// ============================================
// MAIN APPLICATION JAVASCRIPT
// ============================================

// Mobile menu toggle
function setLang(lang) {
    const select = document.querySelector("select.goog-te-combo");
    if (!select) return;

    select.value = lang;
    select.dispatchEvent(new Event("change"));

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    event.target.classList.add("active");
}


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
const savedLang = localStorage.getItem("language") || "en";
setLanguage(savedLang);

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

// Helper: return display name/role for directory card (promote Mukhiya if parent is Late)
function getRepresentative(member) {
    const f = member.family || {};
    if (member.name && member.name.toLowerCase().startsWith('late') && Array.isArray(f.children)) {
        const rep = f.children.find(c => c.role && c.role.toLowerCase() === 'mukhiya');
        if (rep) {
            return { name: rep.name, role: 'Mukhiya' };
        }
    }
    return { name: member.name, role: member.role };
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

        const rep = getRepresentative(member);
        const displayName = rep.name;
        const displayRole = rep.role || member.role;

        card.innerHTML = `
            <div class="member-avatar" style="background: ${domain.color}">
                ${displayName.charAt(0)}
            </div>
            <div class="member-info">
                <h4>${displayName}</h4>
                <p class="member-role">${displayRole}</p>
                <p class="member-location"><i class="fas fa-map-marker-alt"></i> ${member.location}</p>
                <p class="member-phone"><i class="fas fa-phone"></i> ${member.phone}</p>
                <p class="member-count"><i class="fas fa-users"></i> ${countActiveFamilyMembers(member)} Members</p>
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
    document.getElementById("memberCount").textContent = `${countActiveFamilyMembers(member)} Members`;

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

            // Child's spouse (e.g., daughter-in-law)
            if (child.spouse && child.spouse.name) {
                const spouse = child.spouse;
                const spouseItem = document.createElement("div");
                spouseItem.className = "family-member-item spouse-item";
                // determine gender class (fallback from relation text)
                const spouseGenderClass = spouse.gender ? spouse.gender : (spouse.relation && spouse.relation.toLowerCase().includes('wife') ? 'female' : (spouse.relation && spouse.relation.toLowerCase().includes('husband') ? 'male' : ''));
                const spouseIcon = spouseGenderClass === "male" ? "fa-male" : (spouseGenderClass === "female" ? "fa-female" : "fa-user");
                const spouseRole = spouse.relation ? spouse.relation.replace(/-/g, ' ') : (child.gender === 'male' ? 'Daughter-in-law' : 'Son-in-law');
                const spouseAgeText = spouse.age ? ` | Age: ${spouse.age}` : ' | Age: —';

                spouseItem.innerHTML = `
                    <div class="family-member-icon spouse ${spouseGenderClass}"><i class="fas ${spouseIcon}"></i></div>
                    <div class="family-member-details">
                        <h4>${spouse.name}</h4>
                        <p>${spouseRole}${spouseAgeText}</p>
                    </div>
                `;
                familyList.appendChild(spouseItem);
            }

            // Grandchildren (children of this child)
            if (child.children && child.children.length > 0) {
                child.children.forEach(gc => {
                    const gcItem = document.createElement("div");
                    gcItem.className = "family-member-item grandchild-item";
                    const gcIconClass = gc.gender ? (gc.gender === "male" ? "fa-male" : "fa-female") : "fa-user";
                    const gcGenderClass = gc.gender ? gc.gender : '';
                    const gcAgeText = gc.age ? ` | Age: ${gc.age}` : ' | Age: —';
                    gcItem.innerHTML = `
                        <div class="family-member-icon grandchild ${gcGenderClass}"><i class="fas ${gcIconClass}"></i></div>
                        <div class="family-member-details">
                            <h4>${gc.name}</h4>
                            <p>Grandchild${gcAgeText}</p>
                        </div>
                    `;
                    familyList.appendChild(gcItem);
                });
            }

        });
    }
        // 👉 Render Family Tree / Pedigree
    const familyTree = document.getElementById("familyTree");
    if (familyTree) {
        familyTree.innerHTML = renderPedigree(member);
        // adjust connector line to align exactly between first and last child
        setTimeout(() => adjustPedigreeConnectors(familyTree), 0);
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

// Adjust horizontal children line to span exactly between first and last visible child branch
function adjustPedigreeConnectors(root) {
    try {
        const tree = (root instanceof HTMLElement) ? root : document.getElementById('familyTree');
        if (!tree) return;
        const section = tree.querySelector('.children-section');
        const line = tree.querySelector('.children-line');
        const row = tree.querySelector('.children-row');
        if (!section || !line || !row) return;

        const branches = Array.from(row.querySelectorAll('.child-branch'));
        if (branches.length === 0) {
            line.style.display = 'none';
            return;
        }

        // compute centers of first and last branch relative to .children-section
        const sectionRect = section.getBoundingClientRect();
        const first = branches[0].getBoundingClientRect();
        const last = branches[branches.length - 1].getBoundingClientRect();

        const firstCenter = (first.left + first.right) / 2 - sectionRect.left;
        const lastCenter = (last.left + last.right) / 2 - sectionRect.left;

        const left = Math.min(firstCenter, lastCenter);
        const width = Math.abs(lastCenter - firstCenter);

        // add small padding so line doesn't touch box edges
        const pad = 12;
        line.style.display = '';
        line.style.left = (left - pad) + 'px';
        line.style.width = (width + pad * 2) + 'px';
        line.style.transform = 'none';

    } catch (err) {
        console.error('adjustPedigreeConnectors error', err);
    }
}

// keep connectors aligned on resize
window.addEventListener('resize', () => {
    const tree = document.getElementById('familyTree');
    if (tree) adjustPedigreeConnectors(tree);
});
// ...existing code...
// ...existing code...
// ...existing code...
function renderPedigree(member) {
    if (!member || !member.family) {
        return `<div class="pedigree-error">Family data unavailable.</div>`;
    }
    const f = member.family || {};

    function personBox(person, role) {
        if (!person) return "";
        const genderClass = person.gender === "female" ? "female" : "male";
        const lateText = person.status === "late" ? " (Late)" : "";
        return `<div class="person-box ${genderClass}">
            ${person.name}${lateText}${role ? `<br><small>${role}</small>` : ""}
        </div>`;
    }

    function spouseRole(child, spouse) {
        if (!spouse) return "";
        if (child.gender === "male") return "Daughter-in-law";
        return spouse.gender === "male" ? "Husband" : "Spouse";
    }

    // Normalize children: attach any child-record that is actually a spouse (e.g. daughter-in-law)
    const rawChildren = Array.isArray(f.children) ? f.children.slice() : [];
    const childrenByName = {};
    rawChildren.forEach((c, i) => { if (c && c.name) childrenByName[c.name.trim().toLowerCase()] = i; });

    // clone so we can mark attachments
    const children = rawChildren.map(c => Object.assign({}, c));

    // Attach spouse-records to their husband when possible (marriedTo points to husband name)
    children.forEach(c => {
        if (!c || !c.marriedTo) return;
        const husbandIndex = childrenByName[(c.marriedTo || "").trim().toLowerCase()];
        if (husbandIndex !== undefined) {
            const husband = children[husbandIndex];
            if (husband && husband.gender === "male") {
                husband.spouse = husband.spouse || c;
                c._attached = true;
            }
        }
    });

    // Also if some child has role/status indicating it's a 'daughter-in-law' and marriedTo absent,
    // try to match by searching male child whose spouse name matches this name (rare case)
    children.forEach(c => {
        if (!c || c._attached) return;
        if ((c.relation === "daughter-in-law" || c.role === "daughter-in-law" || c.status === "daughter_in_law") && c.name) {
            // try to find a male child who doesn't have spouse and likely husband by last name or missing spouse
            for (let h of children) {
                if (h && h.gender === "male" && !h.spouse && h.name && h.name.split(" ")[1] === c.name.split(" ")[1]) {
                    h.spouse = c;
                    c._attached = true;
                    break;
                }
            }
        }
    });

    // Final children preserve original order, only non-attached (main children) remain
    const finalChildren = children.filter(c => !c._attached);

    // Parents (mother first)
    const parentsHtml = (f.parents?.mother || f.parents?.father) ? `
        <div class="tree-level parents-level">
            ${personBox(f.parents?.mother, "Mother")}
            ${personBox(f.parents?.father, "Father")}
        </div>
        <div class="connector parents-to-couple"><div class="connector-vertical"></div></div>
    ` : "";

    // If the current member is 'Late' and one of the children is marked as Mukhiya,
    // promote that child to be shown as the main Mukhiya (root) and display the late member's
    // name as a separate label above/outside the couple.
    let lateCoupleHtml = "";
    let mainMukhiya = member;
    let mainWife = f.wife;
    let extraCoupleHtml = "";

    if (member.name && member.name.toLowerCase().startsWith('late') && finalChildren.length) {
        const repIndex = finalChildren.findIndex(c => c.role && c.role.toLowerCase() === 'mukhiya');
        if (repIndex !== -1) {
            const rep = finalChildren.splice(repIndex, 1)[0]; // remove from children list
            mainMukhiya = rep;
            mainWife = rep.spouse || null; // use promoted spouse for main couple

            const nameWithoutLate = member.name.replace(/^late\s+/i, '');
            // show the late member as a couple (with their wife) above the promoted mukhiya
            lateCoupleHtml = `
                <div class="tree-level late-couple">
                    ${personBox(member, "Late")}
                    ${f.wife ? personBox(f.wife, "Wife") : ""}
                </div>
            `;
        }
    }

    // Couple row (Mukhiya + wife). We may append extra family members (e.g., a daughter) to the couple row
    let coupleHtml = `
        ${lateCoupleHtml}
        <div class="couple-wrap">
            <div class="tree-level couple-level">
                ${personBox(mainMukhiya, "Mukhiya")}
                ${mainWife ? personBox(mainWife, "Wife") : ""}
                ${extraCoupleHtml}
            </div>
            <div class="connector couple-to-children"><div class="connector-vertical short"></div></div>
        </div>
    `;

    // Children (each child is a branch; spouse and grandchildren are under that branch)
    let childrenRow = "";

    // If we promoted a child to mainMukhiya, include its children first so they appear under the main couple
    let childrenToRender = finalChildren;
    if (mainMukhiya !== member) {
        const promotedChildren = (mainMukhiya.children && mainMukhiya.children.length) ? mainMukhiya.children.map(c => Object.assign({}, c)) : [];
        childrenToRender = promotedChildren.concat(finalChildren);
    }

    // Promote specific children to the couple-row (e.g., Thosi/Toshi) so they appear next to the Mukhiya and spouse
    const promoteNames = [ 'toshi bhalla'];
    let coupleExtras = [];
    childrenToRender = childrenToRender.filter(child => {
        if (!child || !child.name) return true;
        const n = child.name.trim().toLowerCase();
        // Flexible match: exact names or contains 'tos' (covers Toshi/Thosi/Tosh variants)
        if (promoteNames.includes(n) || n.includes('tos')) {
            coupleExtras.push(child);
            return false; // remove from children list
        }
        return true;
    });
    if (coupleExtras.length) {
        extraCoupleHtml = coupleExtras.map(c => personBox(c, c.gender === 'male' ? 'Son' : 'Daughter')).join('');
    }

    // Rebuild coupleHtml now that extraCoupleHtml may be populated (fixes missing promoted members like Thoshi)
    coupleHtml = `
        ${lateCoupleHtml}
        <div class="couple-wrap">
            <div class="tree-level couple-level">
                ${personBox(mainMukhiya, "Mukhiya")}
                ${mainWife ? personBox(mainWife, "Wife") : ""}
                ${extraCoupleHtml}
            </div>
            <div class="connector couple-to-children"><div class="connector-vertical short"></div></div>
        </div>
    `;
    if (childrenToRender.length) {
        const branches = childrenToRender.map(child => {
            const spouseHtml = child.spouse ? personBox(child.spouse, spouseRole(child, child.spouse)) : "";
            const grandchildrenHtml = Array.isArray(child.children) && child.children.length
                ? `<div class="grandchildren-row" data-parent="${child.name}">${child.children.map(gc => personBox(gc, "Grandchild")).join("")}</div>`
                : "";
            return `
                <div class="child-branch">
                    <div class="child-connector"><div class="connector-vertical tiny"></div></div>
                    <div class="child-node">
                        ${personBox(child, child.gender === "male" ? "Son" : "Daughter")}
                        ${spouseHtml}
                    </div>
                    ${grandchildrenHtml}
                </div>
            `;
        }).join("");
        childrenRow = `
            <div class="children-section">
                <div class="children-line"></div>
                <div class="children-row">
                    ${branches}
                </div>
            </div>
        `;
    }

    return `
        <div class="pedigree-root">
            ${parentsHtml}
            ${coupleHtml}
            ${childrenRow}
        </div>
    `;
}
// ...existing code...
function personBox(person, role) {
    if (!person) return "";
    const genderClass = person.gender === "female" ? "female" : "male";
    const lateText = person.status === "late" ? " (Late)" : "";
    const marriedOutClass = (person.status === "married_out" || person.marriedOut || person.married === true || person.marriedTo) ? "married-out" : "";
    return `<div class="person-box ${genderClass} ${marriedOutClass}">
        ${person.name}${lateText}${role ? `<br><small>${role}</small>` : ""}
    </div>`;
}
// ...existing code...
// ...existing code...
