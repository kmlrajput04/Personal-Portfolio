import React, { useState } from 'react';
import './Blog2.css';

const Blog2 = () => {
  return (
    <>

          <div className="blog-container">

            <header className="blog2-header">
              <h1 className="blog-title">From Junior to Senior: Navigating Web Development Career Growth</h1>
              <div className="title-underline"></div>
              <p className="blog-subtitle">A comprehensive roadmap with actionable strategies to advance your career in web development</p>
            </header>

            {/* Topic 1 */}
            <div className="blog-section">
              <h2 className="blog2-section-title">1. The Career Ladder in Web Development</h2>
              <p>Understanding the progression from junior to senior roles is crucial for targeted growth.</p>
              
              <div className="tech-demo">
                <h3 className="tech-title">Typical Career Progression</h3>
                <div className="roadmap">
                  <ol>
                    <li><strong>Junior Developer (0-2 years):</strong> Focus on learning, completing tasks with guidance</li>
                    <li><strong>Mid-Level Developer (2-5 years):</strong> Independent contributor, mentors juniors</li>
                    <li><strong>Senior Developer (5+ years):</strong> Technical leader, architectural decisions</li>
                    <li><strong>Staff/Principal Developer (7+ years):</strong> Cross-team impact, strategic direction</li>
                    <li><strong>Engineering Manager (optional):</strong> People leadership, project delivery</li>
                  </ol>
                </div>
                
                <h3 className="tech-title">Key Differences Between Levels</h3>
                <table className="comparison-table">
                  <thead>
                    <tr><th>Area</th><th>Junior</th><th>Senior</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Code Quality</td><td>Functional</td><td>Maintainable, scalable</td></tr>
                    <tr><td>Problem Solving</td><td>Immediate solutions</td><td>System-wide impact</td></tr>
                    <tr><td>Communication</td><td>Technical details</td><td>Business value</td></tr>
                    <tr><td>Scope</td><td>Single tasks</td><td>Project architecture</td></tr>
                  </tbody>
                </table>
              </div>
              
              <div className="case-study">
                <h4 className="case-title">GitHub's Career Framework</h4>
                <p>Their transparent progression matrix includes:</p>
                <ul>
                  <li>Clear expectations for each level</li>
                  <li>Technical and behavioral competencies</li>
                  <li>Examples of impact at each stage</li>
                  <li>Resulted in 30% faster promotions</li>
                </ul>
              </div>
            </div>

            {/* Topic 2 */}
            <div className="blog-section">
              <h2 className="blog2-section-title">2. Mastering Technical Skills</h2>
              <p>Depth and breadth of technical knowledge separates juniors from seniors.</p>
              
              <div className="tech-demo">
                <h3 className="tech-title">Core Competency Matrix</h3>
                <div className="skill-level">
                  <div>
                    <h4>Junior Developer Skills</h4>
                    <ul>
                      <li>Basic language syntax</li>
                      <li>Simple debugging</li>
                      <li>Framework fundamentals</li>
                      <li>Basic Git workflows</li>
                      <li>Following coding standards</li>
                    </ul>
                  </div>
                  <div>
                    <h4>Senior Developer Skills</h4>
                    <ul>
                      <li>Performance optimization</li>
                      <li>System architecture</li>
                      <li>Advanced debugging</li>
                      <li>CI/CD pipelines</li>
                      <li>Security best practices</li>
                    </ul>
                  </div>
                </div>
                
                <h3 className="tech-title">Learning Roadmap Example</h3>
                <pre>
                  <code>{`// Example: Progressive JavaScript Mastery
1. Core Language (ES6+)
   - Closures, prototypes, promises
2. Browser APIs
   - DOM, Fetch, Storage
3. Framework Deep Dive
   - React/Vue lifecycle, state management
4. Tooling
   - Webpack, Babel, ESLint
5. Advanced Patterns
   - Microfrontends, WASM, Web Workers
6. Full Stack
   - Node.js, databases, APIs`}</code>
                </pre>
              </div>
              
              <div className="case-study">
                <h4 className="case-title">Netflix's Technical Expectations</h4>
                <p>For senior engineers:</p>
                <ul>
                  <li>Can redesign major systems</li>
                  <li>Deep expertise in 2+ areas</li>
                  <li>Mentor multiple engineers</li>
                  <li>Lead technical discussions</li>
                </ul>
              </div>
            </div>

            {/* Topic 3 */}
            <div className="blog-section">
              <h2 className="blog2-section-title">3. Building a Professional Portfolio</h2>
              <p>Your portfolio demonstrates skills better than any resume.</p>
              
              <div className="tech-demo">
                <h3 className="tech-title">Portfolio Checklist</h3>
                <ul className="feature-list">
                  <li><strong>3-5 substantial projects</strong> (not just tutorials)</li>
                  <li><strong>Code samples</strong> on GitHub with clean commits</li>
                  <li><strong>Case studies</strong> explaining challenges/solutions</li>
                  <li><strong>Technical writing</strong> (blog, documentation)</li>
                  <li><strong>Open source contributions</strong></li>
                  <li><strong>Live demos</strong> of working applications</li>
                </ul>
                
                <h3 className="tech-title">Project Evolution Example</h3>
                <div className="code-comparison">
                  <div>
                    <h4>Junior Project</h4>
                    <pre>
                      <code>{`// Basic React todo app
- Single component
- Local state only
- Basic styling
- No tests
- Manual deployment`}</code>
                    </pre>
                  </div>
                  <div>
                    <h4>Senior Project</h4>
                    <pre>
                      <code>{`// Full-stack productivity app
- Microfrontend architecture
- JWT authentication
- Redis caching
- CI/CD pipeline
- E2E testing
- Performance monitoring`}</code>
                    </pre>
                  </div>
                </div>
              </div>
              
              <div className="case-study">
                <h4 className="case-title">How One Developer Got Hired at Google</h4>
                <p>Their portfolio included:</p>
                <ul>
                  <li>Web performance optimization case study</li>
                  <li>Popular open source Vue component</li>
                  <li>Technical talk on WebAssembly</li>
                  <li>Result: Direct outreach from recruiter</li>
                </ul>
              </div>
            </div>

            {/* Topic 4 */}
            <div className="blog-section">
              <h2 className="blog2-section-title">4. Effective Communication Skills</h2>
              <p>Senior developers translate technical concepts for all audiences.</p>
              
              <div className="tech-demo">
                <h3 className="tech-title">Communication Scenarios</h3>
                <table className="comparison-table">
                  <thead>
                    <tr><th>Situation</th><th>Junior Approach</th><th>Senior Approach</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Explaining tech debt</td><td>"The code is messy"</td><td>"Refactoring would reduce bugs by 30% and save 20h/month"</td></tr>
                    <tr><td>Status update</td><td>"Still working on the feature"</td><td>"Completed 3/5 tasks, blocked on API integration - ETA Friday"</td></tr>
                    <tr><td>Design discussion</td><td>"I like React better"</td><td>"React's component model better matches our design system requirements"</td></tr>
                  </tbody>
                </table>
                
                <h3 className="tech-title">Writing Effective Technical Docs</h3>
                <pre>
                  <code>{`# API Design Proposal

## Problem
Users wait too long for search results (current p95: 2.4s)

## Proposed Solution
- Implement Elasticsearch indexing
- Add caching layer with Redis
- New endpoint: GET /v2/search

## Tradeoffs
| Option | Pros | Cons |
|--------|------|------|
| Algolia | Fast setup | $15k/year |
| Elasticsearch | Open-source | 2wk implementation |

## Recommendation
Elasticsearch provides best long-term value given our...`}</code>
                </pre>
              </div>
              
              <div className="case-study">
                <h4 className="case-title">Slack's Engineering Culture</h4>
                <p>Their communication practices:</p>
                <ul>
                  <li>Written design docs before coding</li>
                  <li>Weekly engineering demos</li>
                  <li>"Just Enough" documentation standard</li>
                  <li>Result: 40% fewer misaligned projects</li>
                </ul>
              </div>
            </div>

            {/* Topic 5 */}
            <div className="blog-section">
              <h2 className="blog2-section-title">5. Navigating the Promotion Process</h2>
              <p>Strategic career advancement requires more than just coding skills.</p>
              
              <div className="tech-demo">
                <h3 className="tech-title">Promotion Readiness Checklist</h3>
                <ul className="feature-list">
                  <li>Consistently performing at next level for 6+ months</li>
                  <li>Documented impact beyond assigned tasks</li>
                  <li>Mentored junior team members</li>
                  <li>Improved team processes</li>
                  <li>Recognized as go-to expert in some area</li>
                  <li>Leadership on at least one major project</li>
                </ul>
                
                <h3 className="tech-title">Creating a Promotion Packet</h3>
                <pre>
                  <code>{`// Example Promotion Packet Outline
1. Impact Summary
   - Shipped 3 major features
   - Reduced build times by 40%
   - Mentored 2 junior devs

2. Peer Feedback
   - "Helped debug production issue"
   - "Improved our testing approach"

3. Manager Assessment
   - Exceeds expectations in 4/5 areas
   - Ready for more scope

4. Career Goals
   - Lead small team
   - Deepen architecture skills`}</code>
                </pre>
              </div>
              
              <div className="case-study">
                <h4 className="case-title">Amazon's Promotion Bar</h4>
                <p>Their "Bar Raiser" process evaluates:</p>
                <ul>
                  <li>Customer impact (not just activity)</li>
                  <li>Inventiveness and simplification</li>
                  <li>Earned trust (colleague feedback)</li>
                  <li>Results: Only 15% promotion approval rate</li>
                </ul>
              </div>
            </div>

            {/* Topic 6 */}
            <div className="blog-section">
              <h2 className="blog2-section-title">6. Specialization vs Generalization</h2>
              <p>Choosing your technical focus area impacts career trajectory.</p>
              
              <div className="tech-demo">
                <h3 className="tech-title">Web Development Career Paths</h3>
                <div className="skill-level">
                  <div>
                    <h4>Specialist Paths</h4>
                    <ul>
                      <li><strong>Frontend:</strong> React/Web Performance</li>
                      <li><strong>Backend:</strong> Distributed Systems</li>
                      <li><strong>DevOps:</strong> Cloud Infrastructure</li>
                      <li><strong>Mobile:</strong> React Native/Flutter</li>
                      <li><strong>Web3:</strong> Blockchain/Smart Contracts</li>
                    </ul>
                  </div>
                  <div>
                    <h4>Generalist Paths</h4>
                    <ul>
                      <li>Full Stack Developer</li>
                      <li>Technical Lead</li>
                      <li>Solutions Architect</li>
                      <li>Engineering Manager</li>
                      <li>Startup CTO</li>
                    </ul>
                  </div>
                </div>
                
                <h3 className="tech-title">When to Specialize</h3>
                <pre>
                  <code>{`if (you.enjoyDeepDives && 
    demandForSkill.isHigh && 
    !earlyCareer) {
  return considerSpecialization();
} else {
  return buildBroadFoundation();
}

// Real-world indicators:
- You're the "go-to" person for specific issues
- Recruiters seek you for niche roles
- You enjoy mastering complex topics`}</code>
                </pre>
              </div>
              
              <div className="case-study">
                <h4 className="case-title">Shopify's T-Shaped Developers</h4>
                <p>Their competency model values:</p>
                <ul>
                  <li>Deep expertise in one area (vertical bar)</li>
                  <li>Broad working knowledge (horizontal top)</li>
                  <li>Result: Flexible but expert teams</li>
                </ul>
              </div>
            </div>

            {/* Topic 7 */}
            <div className="blog-section">
              <h2 className="blog2-section-title">7. Interviewing for Senior Roles</h2>
              <p>Senior-level interviews test architecture and leadership skills.</p>
              
              <div className="tech-demo">
                <h3 className="tech-title">System Design Interview Prep</h3>
                <div className="interview-question">
                  <p><strong>Question:</strong> Design a URL shortening service like Bitly</p>
                  <p><strong>Junior Answer:</strong> Discusses basic API and database</p>
                  <p><strong>Senior Answer:</strong> Covers:</p>
                  <ul>
                    <li>Key generation algorithms</li>
                    <li>Cache strategies</li>
                    <li>Rate limiting</li>
                    <li>Analytics storage</li>
                    <li>CDN integration</li>
                  </ul>
                </div>
                
                <h3 className="tech-title">Behavioral Questions</h3>
                <pre>
                  <code>{`// STAR Method Response Structure
Situation: "When our team inherited legacy code..."
Task: "We needed to improve reliability..."
Action: "I led the refactoring effort by..."
Result: "Reduced bugs by 65% and..."

// Common Senior Questions:
- Describe a technical disagreement
- How you mentored a colleague
- Handling production outage
- Prioritizing technical debt`}</code>
                </pre>
              </div>
              
              <div className="case-study">
                <h4 className="case-title">Google's Interview Process</h4>
                <p>For L5+ roles they assess:</p>
                <ul>
                  <li>Coding (algorithms + clean code)</li>
                  <li>System design (scalability)</li>
                  <li>Leadership (project stories)</li>
                  <li>Googliness (culture fit)</li>
                </ul>
              </div>
            </div>

            {/* Topic 8 */}
            <div className="blog-section">
              <h2 className="blog2-section-title">8. Mentorship and Leadership</h2>
              <p>Growing others demonstrates senior-level capabilities.</p>
              
              <div className="tech-demo">
                <h3 className="tech-title">Effective Mentorship Techniques</h3>
                <ul className="feature-list">
                  <li><strong>Pair Programming:</strong> 70/30 rule - let them drive</li>
                  <li><strong>Code Reviews:</strong> Explain "why" not just "what"</li>
                  <li><strong>Career Advice:</strong> Share your journey's lessons</li>
                  <li><strong>Stretch Assignments:</strong> Challenges with safety nets</li>
                  <li><strong>Feedback:</strong> Specific, actionable, kind</li>
                </ul>
                
                <h3 className="tech-title">Code Review Comparison</h3>
                <div className="code-comparison">
                  <div>
                    <h4>Junior Review</h4>
                    <pre>
                      <code>{`// Comment on PR:
"Fix the indentation"`}</code>
                    </pre>
                  </div>
                  <div>
                    <h4>Senior Review</h4>
                    <pre>
                      <code>{`// Comment on PR:
"Consider extracting this logic to a 
separate function since we use it in 
3 places. This follows the DRY principle 
and makes future changes easier.

Also, let's discuss error handling for 
the API response - what should happen 
if the network request fails?"`}</code>
                    </pre>
                  </div>
                </div>
              </div>
              
              <div className="case-study">
                <h4 className="case-title">Microsoft's Mentorship Program</h4>
                <p>Their results:</p>
                <ul>
                  <li>Mentees promoted 2x faster</li>
                  <li>Mentors 35% more likely to be promoted</li>
                  <li>Improved knowledge sharing</li>
                </ul>
              </div>
            </div>

            {/* Topic 9 */}
            <div className="blog-section">
              <h2 className="blog2-section-title">9. Building Professional Networks</h2>
              <p>Strategic relationships accelerate career opportunities.</p>
              
              <div className="tech-demo">
                <h3 className="tech-title">Networking Strategies</h3>
                <table className="comparison-table">
                  <thead>
                    <tr><th>Approach</th><th>Junior</th><th>Senior</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Conferences</td><td>Attend sessions</td><td>Speak/present</td></tr>
                    <tr><td>LinkedIn</td><td>Passive profile</td><td>Share insights</td></tr>
                    <tr><td>Meetups</td><td>Occasional attendee</td><td>Organizer</td></tr>
                    <tr><td>Open Source</td><td>Use projects</td><td>Contribute/maintain</td></tr>
                  </tbody>
                </table>
                
                <h3 className="tech-title">Effective Outreach Template</h3>
                <pre>
                  <code>{`Subject: Appreciated your talk on [topic]

Hi [Name],

I really enjoyed your presentation at 
[event] about [specific detail]. 
Particularly the point about [insight] 
resonated because [personal connection].

I'm currently [your situation] and 
would value your perspective on 
[1 specific question]. Would you be 
available for a 15-minute chat?

Best,
[Your Name]
[Your Portfolio]`}</code>
                </pre>
              </div>
              
              <div className="case-study">
                <h4 className="case-title">How One Developer Landed a FAANG Job</h4>
                <p>Through:</p>
                <ul>
                  <li>Consistent open source contributions</li>
                  <li>Speaking at local meetups</li>
                  <li>Building relationships with maintainers</li>
                  <li>Result: Direct referral bypassing resume screen</li>
                </ul>
              </div>
            </div>

            {/* Topic 10 */}
            <div className="blog-section">
              <h2 className="blog2-section-title">10. Salary Negotiation Strategies</h2>
              <p>Senior developers understand their market value and negotiate accordingly.</p>
              
              <div className="tech-demo">
                <h3 className="tech-title">Compensation Components</h3>
                <ul className="feature-list">
                  <li><strong>Base Salary:</strong> Fixed annual amount</li>
                  <li><strong>Bonus:</strong> Performance-based (10-30%)</li>
                  <li><strong>Equity:</strong> Stock options/RSUs</li>
                  <li><strong>Benefits:</strong> 401k, insurance, etc.</li>
                  <li><strong>Perks:</strong> Remote, education budget</li>
                </ul>
                
                <h3 className="tech-title">Negotiation Scripts</h3>
                <pre>
                  <code>{`// When asked for current salary:
"I'm focusing on roles in the [range] 
range based on my research of this 
market and position level. What's 
the budgeted range for this role?"

// When receiving an offer:
"Thank you for the offer. Based on 
my [experience/skills] and the 
market data I've researched, I was 
expecting something closer to [X]. 
Is there flexibility to get closer 
to that number?"

// For non-salary items:
"If the base salary is firm, could 
we discuss increasing the [bonus/
equity/remote days] instead?"`}</code>
                </pre>
              </div>
              
              <div className="case-study">
                <h4 className="case-title">Hired.com's Salary Data</h4>
                <p>Their research shows:</p>
                <ul>
                  <li>Developers who negotiate earn 15-20% more</li>
                  <li>Senior engineers average $145k-$220k in US</li>
                  <li>Specialists (e.g., DevOps) command 10-15% premiums</li>
                </ul>
              </div>
            </div>

            {/* Topic 11 */}
            <div className="blog-section">
              <h2 className="blog2-section-title">11. Managing Technical Debt</h2>
              <p>Senior developers balance speed and sustainability.</p>
              
              <div className="tech-demo">
                <h3 className="tech-title">Technical Debt Assessment</h3>
                <pre>
                  <code>{`// Debt Evaluation Framework
1. Identify Debt
   - Code smells
   - Outdated dependencies
   - Missing tests

2. Categorize
   - Reckless vs prudent
   - High vs low impact

3. Prioritize
   - Cost of fixing vs cost of keeping
   - Business impact

4. Schedule
   - Dedicated sprints
   - 20% time allocation
   - Feature-coupled fixes`}</code>
                </pre>
                
                <h3 className="tech-title">Communicating Debt Tradeoffs</h3>
                <div className="interview-question">
                  <p><strong>To Product Managers:</strong></p>
                  <p>"If we take 2 sprints to refactor the checkout flow, we can:</p>
                  <ul>
                    <li>Reduce bug reports by ~40%</li>
                    <li>Enable new payment methods faster</li>
                    <li>Lower support costs by $15k/month"</li>
                  </ul>
                </div>
              </div>
              
              <div className="case-study">
                <h4 className="case-title">Stripe's Debt Management</h4>
                <p>Their approach includes:</p>
                <ul>
                  <li>Quarterly "Fixit Weeks"</li>
                  <li>Debt tracking in project planning</li>
                  <li>Architecture review boards</li>
                  <li>Result: 60% fewer production incidents</li>
                </ul>
              </div>
            </div>

            {/* Topic 12 */}
            <div className="blog-section">
              <h2 className="blog2-section-title">12. Personal Branding for Developers</h2>
              <p>Visibility creates opportunities beyond technical skills.</p>
              
              <div className="tech-demo">
                <h3 className="tech-title">Brand-Building Activities</h3>
                <ul className="feature-list">
                  <li><strong>Technical Blogging:</strong> Write about challenges solved</li>
                  <li><strong>Conference Speaking:</strong> Start with local meetups</li>
                  <li><strong>Open Source:</strong> Meaningful contributions</li>
                  <li><strong>Social Media:</strong> Share insights not just links</li>
                  <li><strong>Teaching:</strong> Workshops/webinars</li>
                </ul>
                
                <h3 className="tech-title">Content Creation Framework</h3>
                <pre>
                  <code>{`// The 4P Content Model
1. Problem: Identify pain point
   "Struggling with React performance?"

2. Process: Show your approach
   "Here's how I diagnosed it..."

3. Solution: Share the fix
   "Implementing memoization reduced renders by 70%"

4. Package: Make it reusable
   "Here's a custom hook you can use..."`}</code>
                </pre>
              </div>
              
              <div className="case-study">
                <h4 className="case-title">How Dan Abramov Built His Brand</h4>
                <p>Through:</p>
                <ul>
                  <li>In-depth technical blog posts</li>
                  <li>Creating Redux (open source)</li>
                  <li>Clear, patient teaching style</li>
                  <li>Result: React core team position</li>
                </ul>
              </div>
            </div>

            {/* Topic 13 */}
            <div className="blog-section">
              <h2 className="blog2-section-title">13. Work-Life Balance at Senior Levels</h2>
              <p>Sustainable careers require intentional boundaries.</p>
              
              <div className="tech-demo">
                <h3 className="tech-title">Burnout Prevention Strategies</h3>
                <table className="comparison-table">
                  <thead>
                    <tr><th>Area</th><th>Junior Approach</th><th>Senior Approach</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Work Hours</td><td>Always available</td><td>Core hours + deep work</td></tr>
                    <tr><td>Estimates</td><td>Underestimate to please</td><td>Realistic + buffer</td></tr>
                    <tr><td>Learning</td><td>Only on weekends</td><td>Paid time allocation</td></tr>
                    <tr><td>Stress</td><td>Hero complex</td><td>Systems thinking</td></tr>
                  </tbody>
                </table>
                
                <h3 className="tech-title">Setting Professional Boundaries</h3>
                <pre>
                  <code>{`// Effective Boundary Scripts
On after-hours requests:
"I'll prioritize this first thing tomorrow"

On unrealistic deadlines:
"To deliver quality, we'd need either:
1. More time (2 weeks)
2. Reduced scope (MVP features)
3. Additional resources (2 devs)"

On scope creep:
"Let's create a new ticket to track 
this as separate work"`}</code>
                </pre>
              </div>
              
              <div className="case-study">
                <h4 className="case-title">Basecamp's 4-Day Work Week</h4>
                <p>Their results:</p>
                <ul>
                  <li>Same productivity as 5 days</li>
                  <li>Happier, more focused team</li>
                  <li>Lower turnover</li>
                  <li>Attracted top talent</li>
                </ul>
              </div>
            </div>

            {/* Topic 14 */}
            <div className="blog-section">
              <h2 className="blog2-section-title">14. Transitioning to Leadership Roles</h2>
              <p>Technical leadership requires different skills than individual contribution.</p>
              
              <div className="tech-demo">
                <h3 className="tech-title">Engineering Manager Skills</h3>
                <ul className="feature-list">
                  <li><strong>1:1s:</strong> Active listening, coaching</li>
                  <li><strong>Feedback:</strong> Radical candor framework</li>
                  <li><strong>Planning:</strong> Roadmap creation</li>
                  <li><strong>Hiring:</strong> Interview design</li>
                  <li><strong>Process:</strong> Continuous improvement</li>
                </ul>
                
                <h3 className="tech-title">Tech Lead vs Manager</h3>
                <div className="code-comparison">
                  <div>
                    <h4>Technical Lead</h4>
                    <ul>
                      <li>Hands-on coding (30-70%)</li>
                      <li>Architecture decisions</li>
                      <li>Technical mentorship</li>
                    </ul>
                  </div>
                  <div>
                    <h4>Engineering Manager</h4>
                    <ul>
                      <li>People management</li>
                      <li>Career development</li>
                      <li>Resource allocation</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="case-study">
                <h4 className="case-title">Facebook's Engineering Ladder</h4>
                <p>Their distinct paths:</p>
                <ul>
                  <li><strong>IC Track:</strong> Staff/Principal Engineer</li>
                  <li><strong>Management:</strong> EM → Director</li>
                  <li>Parallel progression at each level</li>
                  <li>Explicit expectations for both</li>
                </ul>
              </div>
            </div>

            {/* Topic 15 */}
            <div className="blog-section">
              <h2 className="blog2-section-title">15. Continuous Learning Strategies</h2>
              <p>The best developers invest in lifelong learning.</p>
              
              <div className="tech-demo">
                <h3 className="tech-title">Learning Framework</h3>
                <pre>
                  <code>{`// The 70/20/10 Learning Model
70% - On-the-job challenges
   - New projects
   - Stretch assignments
   - Fixing hard bugs

20% - Social learning
   - Mentorship
   - Code reviews
   - Pair programming

10% - Formal education
   - Courses
   - Books
   - Conferences`}</code>
                </pre>
                
                <h3 className="tech-title">Quarterly Learning Plan</h3>
                <table className="comparison-table">
                  <thead>
                    <tr><th>Area</th><th>Goal</th><th>Activity</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Technical</td><td>Learn WebSockets</td><td>Build real-time dashboard</td></tr>
                    <tr><td>Soft Skills</td><td>Better presentations</td><td>Give team tech talk</td></tr>
                    <tr><td>Career</td><td>Get promoted</td><td>Complete leadership course</td></tr>
                  </tbody>
                </table>
              </div>
              
              <div className="case-study">
                <h4 className="case-title">Google's 20% Time</h4>
                <p>Results from allowing side projects:</p>
                <ul>
                  <li>Created Gmail, Adsense</li>
                  <li>Higher engineer retention</li>
                  <li>Continuous skill development</li>
                </ul>
              </div>
            </div>

            {/* Conclusion */}
            <div className="cta-cantainer">
              <h3 className="cta-title">Take Control of Your Developer Career</h3>
              <p>Consistent, intentional growth compounds over time. Start with one area to focus on this quarter.</p>
            </div>

          </div>
    </>
  );
};

export default Blog2;