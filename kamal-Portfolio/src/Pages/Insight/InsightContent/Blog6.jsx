import React, { useState, useEffect } from 'react';
import './blog6.scss';

const Blog6 = () => {
 

  return (
    <div className="blog6-overlay">
      <div className="blog6-container">

        <header className="blog6-header">
          <h1 className="blog6-title">The CSS Grid Revolution: 15 Game-Changing Techniques</h1>
          <div className="blog6-title-underline"></div>
          <p className="blog6-subtitle">Master modern layout techniques with practical examples and real-world applications</p>
        </header>

        {/* Topic 1 */}
        <div className="blog6-section">
          <h2 className="blog6-section-title">1. The Grid Fundamentals</h2>
          <p>CSS Grid introduces a two-dimensional layout system that revolutionizes how we structure web content.</p>
          
          <div className="blog6-tech-demo">
            <h3 className="blog6-tech-title">Basic Grid Example</h3>
            <pre className="blog6-pre"><code>{`.container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  gap: 16px;
  min-height: 100vh;
}`}</code></pre>
            <div className="blog6-grid-demo" style={{
              gridTemplateColumns: '200px 1fr 200px',
              gridTemplateRows: 'auto 1fr auto',
              minHeight: '300px'
            }}>
              <div className="blog6-grid-item" style={{ gridColumn: '1 / 4' }}>Header</div>
              <div className="blog6-grid-item">Sidebar</div>
              <div className="blog6-grid-item">Main Content</div>
              <div className="blog6-grid-item">Right Panel</div>
              <div className="blog6-grid-item" style={{ gridColumn: '1 / 4' }}>Footer</div>
            </div>
          </div>
          
          <div className="blog6-case-study">
            <h4 className="blog6-case-title">Washington Post Redesign</h4>
            <p>Their 2018 redesign using CSS Grid resulted in:</p>
            <table className="blog6-comparison-table">
              <tbody>
                <tr><th>Metric</th><th>Improvement</th></tr>
                <tr><td>Layout code reduction</td><td>75% less code</td></tr>
                <tr><td>Mobile performance</td><td>40% faster</td></tr>
                <tr><td>Ad viewability</td><td>25% increase</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Topic 2 */}
        <div className="blog6-section">
          <h2 className="blog6-section-title">2. Responsive Grids with fr Units</h2>
          <p>The fractional (fr) unit creates flexible columns that adapt to available space.</p>
          
          <div className="blog6-tech-demo">
            <h3 className="blog6-tech-title">Fluid Layout Example</h3>
            <pre className="blog6-pre"><code>{`.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}`}</code></pre>
            <div className="blog6-grid-demo" style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr)'
            }}>
              {[1, 2, 3, 4, 5].map(num => (
                <div key={num} className="blog6-grid-item">{num}</div>
              ))}
            </div>
            <p>Resize your browser to see the responsive behavior</p>
          </div>
          
          <div className="blog6-case-study">
            <h4 className="blog6-case-title">Airbnb's Image Gallery</h4>
            <p>Their implementation features:</p>
            <ul>
              <li>Perfectly aligned images regardless of aspect ratio</li>
              <li>Seamless transitions between breakpoints</li>
              <li>30% less JavaScript for layout management</li>
            </ul>
          </div>
        </div>

        {/* Topic 3 */}
        <div className="blog6-section">
          <h2 className="blog6-section-title">3. Named Grid Areas</h2>
          <p>Visual template syntax makes complex layouts intuitive to create and maintain.</p>
          
          <div className="blog6-tech-demo">
            <h3 className="blog6-tech-title">Semantic Layout Example</h3>
            <pre className="blog6-pre"><code>{`.app {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
}

header { grid-area: header; }
nav { grid-area: nav; }
main { grid-area: main; }
aside { grid-area: aside; }
footer { grid-area: footer; }`}</code></pre>
            <div className="blog6-grid-demo" style={{
              gridTemplateAreas: '"header header header" "nav main aside" "footer footer footer"',
              gridTemplateColumns: '200px 1fr 200px'
            }}>
              <div className="blog6-grid-item" style={{ gridArea: 'header' }}>Header</div>
              <div className="blog6-grid-item" style={{ gridArea: 'nav' }}>Nav</div>
              <div className="blog6-grid-item" style={{ gridArea: 'main' }}>Main</div>
              <div className="blog6-grid-item" style={{ gridArea: 'aside' }}>Aside</div>
              <div className="blog6-grid-item" style={{ gridArea: 'footer' }}>Footer</div>
            </div>
          </div>
          
          <div className="blog6-case-study">
            <h4 className="blog6-case-title">Microsoft's Documentation</h4>
            <p>Their docs use named areas to:</p>
            <ul>
              <li>Simplify RTL language support</li>
              <li>Enable layout variations with one CSS change</li>
              <li>Improve team collaboration</li>
            </ul>
          </div>
        </div>

        {/* Topic 4 */}
        <div className="blog6-section">
          <h2 className="blog6-section-title">4. Grid vs Flexbox: When to Use Each</h2>
          <p>Understanding the strengths of each layout model is crucial for modern CSS.</p>
          
          <div className="blog6-tech-demo">
            <h3 className="blog6-tech-title">Comparison Table</h3>
            <table className="blog6-comparison-table">
              <tbody>
                <tr><th>Scenario</th><th>Best Choice</th><th>Reason</th></tr>
                <tr><td>One-dimensional layouts</td><td>Flexbox</td><td>Simpler syntax for linear items</td></tr>
                <tr><td>Complex two-dimensional layouts</td><td>Grid</td><td>Precise row/column control</td></tr>
                <tr><td>Micro layouts within components</td><td>Flexbox</td><td>Better content-based sizing</td></tr>
                <tr><td>Overall page structure</td><td>Grid</td><td>Template-based organization</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="blog6-case-study">
            <h4 className="blog6-case-title">Spotify's Hybrid Approach</h4>
            <p>Their web player combines:</p>
            <ul>
              <li>Grid for main app structure</li>
              <li>Flexbox for playlist items</li>
              <li>Resulting in 60% less layout bugs</li>
            </ul>
          </div>
        </div>

        {/* Topic 5 */}
        <div className="blog6-section">
          <h2 className="blog6-section-title">5. Advanced Alignment Techniques</h2>
          <p>Grid provides powerful alignment controls surpassing traditional methods.</p>
          
          <div className="blog6-tech-demo">
            <h3 className="blog6-tech-title">Placement Properties</h3>
            <div className="blog6-code-comparison">
              <div>
                <h4>Old Method (Flexbox)</h4>
                <pre className="blog6-pre"><code>{`.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.item {
  margin: auto;
}`}</code></pre>
              </div>
              <div>
                <h4>Grid Method</h4>
                <pre className="blog6-pre"><code>{`.container {
  display: grid;
  place-items: center;
}

/* Or precise control */
.item {
  align-self: end;
  justify-self: start;
}`}</code></pre>
              </div>
            </div>
          </div>
          
          <div className="blog6-case-study">
            <h4 className="blog6-case-title">GitHub's New UI</h4>
            <p>Their alignment improvements:</p>
            <ul>
              <li>Reduced alignment-related CSS by 80%</li>
              <li>Eliminated all "magic number" positioning</li>
              <li>Improved vertical rhythm consistency</li>
            </ul>
          </div>
        </div>

        {/* Topic 6 */}
        <div className="blog6-section">
          <h2 className="blog6-section-title">6. The Explicit vs Implicit Grid</h2>
          <p>Understanding grid creation modes unlocks dynamic layouts.</p>
          
          <div className="blog6-tech-demo">
            <h3 className="blog6-tech-title">Implicit Grid Example</h3>
            <pre className="blog6-pre"><code>{`.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-auto-flow: dense;
}`}</code></pre>
            <div className="blog6-grid-demo" style={{
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridAutoRows: 'minmax(50px, auto)'
            }}>
              <div className="blog6-grid-item">1</div>
              <div className="blog6-grid-item" style={{ gridColumn: 'span 2' }}>2 (spans 2 columns)</div>
              <div className="blog6-grid-item">3</div>
              <div className="blog6-grid-item">4</div>
              <div className="blog6-grid-item">5</div>
            </div>
          </div>
          
          <div className="blog6-case-study">
            <h4 className="blog6-case-title">Pinterest's Layout Engine</h4>
            <p>Their implementation:</p>
            <ul>
              <li>Handles 1000+ items efficiently</li>
              <li>Automatically fills gaps</li>
              <li>Maintains aspect ratios</li>
            </ul>
          </div>
        </div>

        {/* Topic 7 */}
        <div className="blog6-section">
          <h2 className="blog6-section-title">7. Grid Template Columns Magic</h2>
          <p>Creative column definitions enable sophisticated designs.</p>
          
          <div className="blog6-tech-demo">
            <h3 className="blog6-tech-title">Advanced Patterns</h3>
            <pre className="blog6-pre"><code>{`/* Alternating sidebar layout */
.container {
  grid-template-columns: 
    [main-start] 1fr 
    [sidebar-start] 250px 
    [main-end sidebar-end];
}

/* Calendar grid */
.calendar {
  grid-template-columns: 
    repeat(7, minmax(0, 1fr));
}

/* RAM (Repeat, Auto, Minmax) */
.gallery {
  grid-template-columns: 
    repeat(auto-fill, minmax(200px, 1fr));
}`}</code></pre>
          </div>
          
          <div className="blog6-case-study">
            <h4 className="blog6-case-title">New York Times</h4>
            <p>Their interactive articles use:</p>
            <ul>
              <li>Custom column templates for data visualization</li>
              <li>Grid for responsive typography</li>
              <li>Nested grids for complex components</li>
            </ul>
          </div>
        </div>

        {/* Topic 8 */}
        <div className="blog6-section">
          <h2 className="blog6-section-title">8. Subgrid: The Missing Piece</h2>
          <p>Subgrid allows nested components to align with parent grids.</p>
          
          <div className="blog6-tech-demo">
            <h3 className="blog6-tech-title">Subgrid Example</h3>
            <pre className="blog6-pre"><code>{`.parent {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.child {
  display: grid;
  grid-template-columns: subgrid;
  grid-column: span 2;
}`}</code></pre>
            <div className="blog6-grid-demo" style={{
              gridTemplateColumns: '1fr 2fr'
            }}>
              <div className="blog6-grid-item" style={{
                gridColumn: 'span 2',
                display: 'grid',
                gridTemplateColumns: 'subgrid'
              }}>
                <div className="blog6-grid-item" style={{ background: '#15aabf' }}>Subgrid Child 1</div>
                <div className="blog6-grid-item" style={{ background: '#15aabf' }}>Subgrid Child 2</div>
              </div>
              <div className="blog6-grid-item">Regular Item</div>
              <div className="blog6-grid-item">Regular Item</div>
            </div>
          </div>
          
          <div className="blog6-case-study">
            <h4 className="blog6-case-title">Mozilla's Design System</h4>
            <p>Using subgrid they achieved:</p>
            <ul>
              <li>Pixel-perfect nested components</li>
              <li>Eliminated layout "hacks"</li>
              <li>Reduced component CSS by 40%</li>
            </ul>
          </div>
        </div>

        {/* Topic 9 */}
        <div className="blog6-section">
          <h2 className="blog6-section-title">9. Grid in Production: Fallbacks</h2>
          <p>Strategies for supporting older browsers without sacrificing modern features.</p>
          
          <div className="blog6-tech-demo">
            <h3 className="blog6-tech-title">Progressive Enhancement</h3>
            <pre className="blog6-pre"><code>{`/* Fallback first */
.container > * {
  float: left;
  width: 50%;
}

/* Modern browsers will override */
@supports (display: grid) {
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .container > * {
    width: auto;
    float: none;
  }
}`}</code></pre>
            <ul className="blog6-feature-list">
              <li>@supports feature detection</li>
              <li>Mobile-first grid implementation</li>
              <li>CSS Grid polyfill for critical layouts</li>
              <li>Selective enhancement strategy</li>
            </ul>
          </div>
          
          <div className="blog6-case-study">
            <h4 className="blog6-case-title">BBC's World Service</h4>
            <p>Their approach supports:</p>
            <ul>
              <li>Browsers back to IE11</li>
              <li>RTL languages</li>
              <li>Text-only browsing modes</li>
            </ul>
          </div>
        </div>

        {/* Topic 10 */}
        <div className="blog6-section">
          <h2 className="blog6-section-title">10. Animation and Grid</h2>
          <p>Smooth transitions between grid states create engaging experiences.</p>
          
          <div className="blog6-tech-demo">
            <h3 className="blog6-tech-title">Animated Grid Example</h3>
            <pre className="blog6-pre"><code>{`.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  transition: grid-template-columns 0.3s ease;
}

.grid.compact {
  grid-template-columns: repeat(6, 1fr);
}

/* Animate grid gaps */
.grid {
  gap: 20px;
  transition: gap 0.3s ease;
}

.grid.compact {
  gap: 5px;
}`}</code></pre>
          </div>
          
          <div className="blog6-case-study">
            <h4 className="blog6-case-title">Apple's Product Pages</h4>
            <p>Their animations feature:</p>
            <ul>
              <li>Smooth gallery transitions</li>
              <li>Responsive layout morphing</li>
              <li>60fps performance</li>
            </ul>
          </div>
        </div>

        {/* Topic 11 */}
        <div className="blog6-section">
          <h2 className="blog6-section-title">11. Grid for Typography</h2>
          <p>Precise text layout control with grid leads to better readability.</p>
          
          <div className="blog6-tech-demo">
            <h3 className="blog6-tech-title">Typographic Grid</h3>
            <pre className="blog6-pre"><code>{`.article {
  display: grid;
  grid-template-columns: 
    [start] minmax(1em, 1fr) 
    [text] min(65ch, 100%) 
    minmax(1em, 1fr) [end];
}

.article > * {
  grid-column: text;
}

/* Full-bleed elements */
.article > .full-bleed {
  grid-column: start / end;
  width: 100%;
}`}</code></pre>
          </div>
          
          <div className="blog6-case-study">
            <h4 className="blog6-case-title">Medium's Reading Experience</h4>
            <p>Their improvements:</p>
            <ul>
              <li>Optimal line length (45-75 chars)</li>
              <li>Consistent vertical rhythm</li>
              <li>Responsive typography</li>
            </ul>
          </div>
        </div>

        {/* Topic 12 */}
        <div className="blog6-section">
          <h2 className="blog6-section-title">12. Future of Grid: Level 2 Features</h2>
          <p>Upcoming specifications will make Grid even more powerful.</p>
          
          <div className="blog6-tech-demo">
            <h3 className="blog6-tech-title">Coming Attractions</h3>
            <ul className="blog6-feature-list">
              <li><strong>Masonry layout:</strong> <code>grid-template-rows: masonry;</code></li>
              <li><strong>Grid spanning:</strong> <code>grid-column: span 2 / span 3;</code></li>
              <li><strong>Dynamic track sizes:</strong> <code>grid-template-columns: fit-content(200px) auto;</code></li>
              <li><strong>Container queries:</strong> <code>@container (width &gt; 400px) ...   </code></li>
            </ul>
          </div>
          
          <div className="blog6-case-study">
            <h4 className="blog6-case-title">Can I Use Adoption Rates</h4>
            <p>Current browser support:</p>
            <ul>
              <li>CSS Grid: 97% global</li>
              <li>Subgrid: 85% and growing</li>
              <li>Masonry: Experimental</li>
            </ul>
          </div>
        </div>

        {/* Topic 13 */}
        <div className="blog6-section">
          <h2 className="blog6-section-title">13. Grid for Complex Data Tables</h2>
          <p>Grid provides superior control for data-intensive applications.</p>
          
          <div className="blog6-tech-demo">
            <h3 className="blog6-tech-title">Financial Dashboard Example</h3>
            <pre className="blog6-pre"><code>{`.dashboard {
  display: grid;
  grid-template-columns: 
    minmax(200px, 1fr) 
    repeat(3, minmax(150px, 2fr));
  grid-auto-rows: minmax(60px, auto);
}

.header { grid-column: 1 / -1; }
.sidebar { grid-row: 2 / span 3; }`}</code></pre>
          </div>
          
          <div className="blog6-case-study">
            <h4 className="blog6-case-title">Bloomberg Terminal</h4>
            <p>Their implementation benefits:</p>
            <ul>
              <li>Real-time data updates without layout shifts</li>
              <li>Consistent alignment across thousands of cells</li>
              <li>Responsive adaptations without JavaScript</li>
            </ul>
          </div>
        </div>

        {/* Topic 14 */}
        <div className="blog6-section">
          <h2 className="blog6-section-title">14. Grid for Microinteractions</h2>
          <p>Small but meaningful interactions enhanced by Grid.</p>
          
          <div className="blog6-tech-demo">
            <h3 className="blog6-tech-title">Interactive Card Example</h3>
            <pre className="blog6-pre"><code>{`.card {
  display: grid;
  grid-template-rows: auto 1fr auto;
  transition: grid-template-rows 0.3s ease;
}

.card:hover {
  grid-template-rows: auto 1.5fr auto;
}

.card__content {
  overflow: hidden;
  transition: all 0.3s ease;
}`}</code></pre>
          </div>
          
          <div className="blog6-case-study">
            <h4 className="blog6-case-title">Dribbble's Design Showcase</h4>
            <p>Their card interactions feature:</p>
            <ul>
              <li>Smooth content reveals</li>
              <li>Consistent hover states</li>
              <li>Performance-optimized animations</li>
            </ul>
          </div>
        </div>

        {/* Topic 15 */}
        <div className="blog6-section">
          <h2 className="blog6-section-title">15. Accessibility with Grid</h2>
          <p>Ensuring Grid layouts remain accessible to all users.</p>
          
          <div className="blog6-tech-demo">
            <h3 className="blog6-tech-title">Accessible Patterns</h3>
            <pre className="blog6-pre"><code>{`/* Source order independence */
@media (prefers-reduced-motion) {
  .grid {
    transition: none;
  }
}

/* Keyboard navigation */
.grid-item:focus {
  z-index: 1;
  outline: 3px solid blue;
}

/* Screen reader support */
[aria-hidden="true"] {
  display: none;
}`}</code></pre>
          </div>
          
          <div className="blog6-case-study">
            <h4 className="blog6-case-title">Government Digital Service</h4>
            <p>Their accessibility achievements:</p>
            <ul>
              <li>WCAG 2.1 AA compliance</li>
              <li>Keyboard-only navigation support</li>
              <li>Screen reader compatibility</li>
            </ul>
          </div>
        </div>

        {/* Conclusion */}
        <div className="blog6-cta-box">
          <h3 className="blog6-cta-title">Start Using CSS Grid Today</h3>
          <p>These techniques will transform how you approach web layouts. Begin with simple grids and progressively enhance your skills.</p>
        </div>

      </div>
    </div>
  );
};

export default Blog6;