// ============================================
// MAIN APPLICATION JAVASCRIPT
// ============================================

// Mobile menu toggle
function initMobileMenu() {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function() {
            navLinks.classList.toggle("active");
            this.classList.toggle("active");
        });
    }
}

// Initialize homepage
function initHomePage() {
    if (!protectPage()) return;

    initMobileMenu();

    // Update stats
    const totalFamilies = document.getElementById("totalFamilies");
    const totalMembers = document.getElementById("totalMembers");
    const totalDomains = document.getElementById("totalDomains");

    if (totalFamilies) totalFamilies.textContent = getTotalFamiliesCount();
    if (totalMembers) totalMembers.textContent = getTotalMembersCount();
    if (totalDomains) totalDomains.textContent = FAMILY_DOMAINS.length;

    // Update society info
    const societyName = document.getElementById("societyName");
    const societyDescription = document.getElementById("societyDescription");

    if (societyName) societyName.textContent = SOCIETY_INFO.name;
    if (societyDescription) societyDescription.textContent = SOCIETY_INFO.description;
}

// Initialize directory page
function initDirectoryPage() {
    if (!protectPage()) return;

    initMobileMenu();
    renderDomains();

    // Search functionality
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", function() {
            const query = this.value.trim();
            if (query.length >= 2) {
                renderSearchResults(query);
            } else {
                renderDomains();
            }
        });
    }
}

// Render family domains
function renderDomains() {
    const domainsContainer = document.getElementById("domainsContainer");
    if (!domainsContainer) return;

    domainsContainer.innerHTML = "";

    FAMILY_DOMAINS.forEach(domain => {
        const members = getMembersByDomain(domain.id);
        const card = document.createElement("div");
        card.className = "domain-card";
        card.onclick = () => showDomainMembers(domain.id);

        card.innerHTML = `
            <div class="domain-icon" style="background: ${domain.color}">${domain.icon}</div>
            <h3>${domain.name}</h3>
            <p>${members.length} Families</p>
        `;

        domainsContainer.appendChild(card);
    });
}

// Show members of a specific domain
function showDomainMembers(domainId) {
    const domainsContainer = document.getElementById("domainsContainer");
    const membersContainer = document.getElementById("membersContainer");
    const backButton = document.getElementById("backButton");
    const domainTitle = document.getElementById("domainTitle");

    if (!membersContainer) return;

    const domain = getDomainInfo(domainId);
    const members = getMembersByDomain(domainId);

    if (domainsContainer) domainsContainer.style.display = "none";
    if (backButton) backButton.style.display = "inline-flex";
    if (domainTitle) domainTitle.textContent = `${domain.name} Family`;

    membersContainer.style.display = "grid";
    membersContainer.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("div");
        card.className = "member-card";
        card.onclick = () => window.location.href = `member.html?id=${member.id}`;

        card.innerHTML = `
            <div class="member-avatar" style="background: ${domain.color}">
                ${member.name.charAt(0)}
            </div>
            <div class="member-info">
                <h4>${member.name}</h4>
                <p class="member-role">${member.role}</p>
                <p class="member-location"><i class="fas fa-map-marker-alt"></i> ${member.location}</p>
                <p class="member-phone"><i class="fas fa-phone"></i> ${member.phone}</p>
                <p class="member-count"><i class="fas fa-users"></i> ${member.family.totalMembers} Members</p>
            </div>
        `;

        membersContainer.appendChild(card);
    });
}

// Render search results
function renderSearchResults(query) {
    const domainsContainer = document.getElementById("domainsContainer");
    const membersContainer = document.getElementById("membersContainer");
    const backButton = document.getElementById("backButton");
    const domainTitle = document.getElementById("domainTitle");

    const results = searchMembers(query);

    if (domainsContainer) domainsContainer.style.display = "none";
    if (backButton) backButton.style.display = "inline-flex";
    if (domainTitle) domainTitle.textContent = `Search Results (${results.length})`;

    membersContainer.style.display = "grid";
    membersContainer.innerHTML = "";

    if (results.length === 0) {
        membersContainer.innerHTML = '<p class="no-results">No members found matching your search.</p>';
        return;
    }

    results.forEach(member => {
        const domain = getDomainInfo(member.domain);
        const card = document.createElement("div");
        card.className = "member-card";
        card.onclick = () => window.location.href = `member.html?id=${member.id}`;

        card.innerHTML = `
            <div class="member-avatar" style="background: ${domain.color}">
                ${member.name.charAt(0)}
            </div>
            <div class="member-info">
                <h4>${member.name}</h4>
                <p class="member-role">${member.role} - ${domain.name}</p>
                <p class="member-location"><i class="fas fa-map-marker-alt"></i> ${member.location}</p>
                <p class="member-phone"><i class="fas fa-phone"></i> ${member.phone}</p>
                <p class="member-count"><i class="fas fa-users"></i> ${member.family.totalMembers} Members</p>
            </div>
        `;

        membersContainer.appendChild(card);
    });
}

// Go back to domains view
function goBack() {
    const domainsContainer = document.getElementById("domainsContainer");
    const membersContainer = document.getElementById("membersContainer");
    const backButton = document.getElementById("backButton");
    const domainTitle = document.getElementById("domainTitle");
    const searchInput = document.getElementById("searchInput");

    if (domainsContainer) domainsContainer.style.display = "grid";
    if (membersContainer) {
        membersContainer.style.display = "none";
        membersContainer.innerHTML = "";
    }
    if (backButton) backButton.style.display = "none";
    if (domainTitle) domainTitle.textContent = "Family Domains";
    if (searchInput) searchInput.value = "";
}

// Initialize member detail page
function initMemberPage() {
    if (!protectPage()) return;

    initMobileMenu();

    const urlParams = new URLSearchParams(window.location.search);
    const memberId = urlParams.get("id");

    if (!memberId) {
        window.location.href = "directory.html";
        return;
    }

    const memberData = getMemberById(memberId);

    if (!memberData) {
        window.location.href = "directory.html";
        return;
    }

    renderMemberDetails(memberData);
    renderFamilyTree(memberData);
}

// Render member details
function renderMemberDetails(member) {
    const domain = getDomainInfo(member.domain);

    // Header
    document.getElementById("memberName").textContent = member.name;
    document.getElementById("memberDomain").textContent = `${domain.name} Family`;
    document.getElementById("memberAvatar").textContent = member.name.charAt(0);
    document.getElementById("memberAvatar").style.background = domain.color;

    // Contact info
    document.getElementById("memberPhone").textContent = member.phone;
    document.getElementById("memberLocation").textContent = member.location;
    document.getElementById("memberCount").textContent = `${member.family.totalMembers} Members`;

    // Family members list
    const familyList = document.getElementById("familyList");
    familyList.innerHTML = "";

    // Wife
    if (member.family.wife) {
        const wifeItem = document.createElement("div");
        wifeItem.className = "family-member-item";
        wifeItem.innerHTML = `
            <div class="family-member-icon wife"><i class="fas fa-female"></i></div>
            <div class="family-member-details">
                <h4>${member.family.wife.name}</h4>
                <p>Wife | Age: ${member.family.wife.age}</p>
            </div>
        `;
        familyList.appendChild(wifeItem);
    }

    // Children
    if (member.family.children && member.family.children.length > 0) {
        member.family.children.forEach(child => {
            const childItem = document.createElement("div");
            childItem.className = "family-member-item";

            let statusText = "";
            if (child.status === "married_out") {
                statusText = ` | Married to ${child.marriedTo}`;
            } else if (child.married) {
                statusText = " | Married";
            }

            const iconClass = child.gender === "male" ? "fa-male" : "fa-female";
            const itemClass = child.status === "married_out" ? "married-out" : "";

            childItem.innerHTML = `
                <div class="family-member-icon ${child.gender} ${itemClass}"><i class="fas ${iconClass}"></i></div>
                <div class="family-member-details ${itemClass}">
                    <h4>${child.name}</h4>
                    <p>${child.gender === "male" ? "Son" : "Daughter"} | Age: ${child.age}${statusText}</p>
                </div>
            `;
            familyList.appendChild(childItem);
        });
    }
}

// Render family tree
function renderFamilyTree(member) {
    const treeContainer = document.getElementById("familyTree");
    if (!treeContainer) return;

    const domain = getDomainInfo(member.domain);

    let treeHTML = `
        <div class="tree">
            <div class="tree-node root">
                <div class="node-content" style="border-color: ${domain.color}">
                    <div class="node-icon" style="background: ${domain.color}"><i class="fas fa-user"></i></div>
                    <span>${member.name}</span>
                    <small>Mukhiya</small>
                </div>
            </div>
    `;

    if (member.family.wife || (member.family.children && member.family.children.length > 0)) {
        treeHTML += `<div class="tree-connector"></div><div class="tree-children">`;

        // Wife
        if (member.family.wife) {
            treeHTML += `
                <div class="tree-node spouse">
                    <div class="node-content spouse-node">
                        <div class="node-icon spouse-icon"><i class="fas fa-female"></i></div>
                        <span>${member.family.wife.name}</span>
                        <small>Wife</small>
                    </div>
                </div>
            `;
        }

        // Children
        if (member.family.children && member.family.children.length > 0) {
            member.family.children.forEach(child => {
                const isMarriedOut = child.status === "married_out";
                const nodeClass = isMarriedOut ? "married-out-node" : "";
                const iconClass = child.gender === "male" ? "fa-male" : "fa-female";
                const genderClass = child.gender === "male" ? "male-node" : "female-node";

                treeHTML += `
                    <div class="tree-node child">
                        <div class="node-content ${nodeClass} ${genderClass}">
                            <div class="node-icon"><i class="fas ${iconClass}"></i></div>
                            <span>${child.name}</span>
                            <small>${child.gender === "male" ? "Son" : "Daughter"}${isMarriedOut ? ` → ${child.marriedTo}` : ""}</small>
                        </div>
                    </div>
                `;
            });
        }

        treeHTML += `</div>`;
    }

    treeHTML += `</div>`;
    treeContainer.innerHTML = treeHTML;
}

// Initialize events page
function initEventsPage() {
    if (!protectPage()) return;

    initMobileMenu();
    renderEvents();
}

// Render events
function renderEvents() {
    const eventsContainer = document.getElementById("eventsContainer");
    if (!eventsContainer) return;

    eventsContainer.innerHTML = "";

    // Sort events by date
    const sortedEvents = [...EVENTS].sort((a, b) => new Date(a.date) - new Date(b.date));

    sortedEvents.forEach(event => {
        const eventDate = new Date(event.date);
        const today = new Date();
        const isPast = eventDate < today;

        const card = document.createElement("div");
        card.className = `event-card ${isPast ? "past-event" : ""}`;

        const dateFormatted = eventDate.toLocaleDateString("en-IN", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        card.innerHTML = `
            <div class="event-date-badge">
                <span class="day">${eventDate.getDate()}</span>
                <span class="month">${eventDate.toLocaleString("en-IN", { month: "short" })}</span>
            </div>
            <div class="event-details">
                <h3>${event.title}</h3>
                <p class="event-datetime"><i class="fas fa-calendar-alt"></i> ${dateFormatted}</p>
                <p class="event-time"><i class="fas fa-clock"></i> ${event.time}</p>
                <p class="event-venue"><i class="fas fa-map-marker-alt"></i> ${event.venue}</p>
                <p class="event-description">${event.description}</p>
                ${isPast ? '<span class="event-status past">Event Completed</span>' : '<span class="event-status upcoming">Upcoming</span>'}
            </div>
        `;

        eventsContainer.appendChild(card);
    });
}

// Call to action for phone
function callMember(phone) {
    window.location.href = `tel:${phone}`;
}

// Open location in maps
function openLocation(location) {
    const encodedLocation = encodeURIComponent(location);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedLocation}`, "_blank");
}
