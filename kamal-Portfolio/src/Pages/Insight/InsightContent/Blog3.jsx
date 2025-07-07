// Blog3.jsx
import React, { useState, useEffect } from "react";
import "./blog3.scss";
import blogimg1 from "../../../assets/blogs images/Screenshot 2025-04-24 122901.png";
import blogimg2 from "../../../assets/blogs images/Screenshot 2025-04-24 122928.png";
import blogimg3 from "../../../assets/blogs images/Screenshot 2025-04-24 181319.png";
import blogimg4 from "../../../assets/blogs images/Advanced React Performance Optimization Techniques - visual selection (3).png";
import blogimg5 from "../../../assets/blogs images/Screenshot 2025-04-24 180603.png";
import blogimg6 from "../../../assets/blogs images/Advanced React Performance Optimization Techniques - visual selection (2).png";
import blogimg7 from "../../../assets/blogs images/Screenshot 2025-04-24 175703.png";
import blogimg8 from "../../../assets/blogs images/Advanced React Performance Optimization Techniques - visual selection (1).png";
import blogimg9 from "../../../assets/blogs images/Advanced React Performance Optimization Techniques - visual selection.png";
import blogimg10 from "../../../assets/blogs images/Screenshot 2025-04-24 173029.png";
import blogimg11 from "../../../assets/blogs images/Screenshot 2025-04-24 123016.png";
import blogimg12 from "../../../assets/blogs images/Screenshot 2025-04-24 123043.png";
import blogimg13 from "../../../assets/blogs images/Screenshot 2025-04-24 123103.png";
import blogimg14 from "../../../assets/blogs images/Screenshot 2025-04-24 123126.png";




const Blog3 = () => {
  return (
    <div className="blog3-overlay">
      <div className="blog3-container">
        <header className="blog3-header">
          <h1>The Complete Guide to Advanced React Performance Optimization</h1>
          <div className="blog3-header-divider"></div>
          <p>
            Master professional techniques to build blazing-fast React
            applications with measurable results. Comprehensive strategies
            covering rendering, virtualization, profiling, and advanced
            patterns.
          </p>
        </header>

        <article className="blog3-article">
          {/* Table of Contents */}
          <section className="blog3-toc">
            <h2>Table of Contents</h2>
            <div className="blog3-toc-grid">
              <div>
                <h3>Core Concepts</h3>
                <ul>
                  <li>1. Introduction</li>
                  <li>2. Concurrent Rendering</li>
                  <li>3. Virtualization</li>
                </ul>
              </div>
              <div>
                <h3>Measurement</h3>
                <ul>
                  <li>4. Profiling Tools</li>
                  <li>5. Performance Metrics</li>
                </ul>
              </div>
              <div>
                <h3>Optimization</h3>
                <ul>
                  <li>6. Code Splitting</li>
                  <li>7. Rendering Control</li>
                </ul>
              </div>
              <div>
                <h3>Advanced</h3>
                <ul>
                  <li>8. Context Optimization</li>
                  <li>9. TypeScript Tips</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 1: Introduction */}
          <section className="blog3-section">
            <h2>
              <span>1.</span> Introduction to React Performance
            </h2>

            <div className="blog3-flex-container">
              <div>
                <p>
                  In today's competitive digital landscape, React application
                  performance directly impacts
                  <strong>
                    user retention, conversion rates, and search engine rankings
                  </strong>
                  . Google's research shows that pages meeting their Core Web
                  Vitals thresholds have{" "}
                  <strong>24% lower abandonment rates</strong>.
                </p>
                <p>
                  This comprehensive guide explores professional optimization
                  techniques that go beyond basic React.memo and useMemo usage,
                  diving deep into architectural patterns that can transform
                  your application's performance metrics across multiple
                  dimensions.
                </p>
                <div className="blog3-note">
                  <h4>Real-World Impact</h4>
                  <p>
                    In our case study with a Fortune 500 e-commerce platform,
                    implementing these techniques reduced Time to Interactive by
                    62%, increased Lighthouse scores from 48 to 92, and improved
                    conversion rates by 18%.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={blogimg1}
                  alt="Performance metrics dashboard"
                />
              </div>
            </div>

            <h3>Key Performance Indicators</h3>

            <div className="blog3-grid">
              <div className="blog3-card blog3-card-primary">
                <h4>Loading Performance</h4>
                <p>
                  First Contentful Paint (FCP), Largest Contentful Paint (LCP),
                  and bundle size optimization
                </p>
              </div>
              <div className="blog3-card blog3-card-secondary">
                <h4>Interaction Responsiveness</h4>
                <p>
                  First Input Delay (FID), input latency, and render performance
                  during user interactions
                </p>
              </div>
              <div className="blog3-card blog3-card-tertiary">
                <h4>Visual Stability</h4>
                <p>
                  Cumulative Layout Shift (CLS) and smooth scrolling performance
                </p>
              </div>
            
            </div>

            <h3>Performance Optimization Spectrum</h3>

            <img
              src={blogimg2}
              alt="React optimization techniques spectrum"
              className="blog3-full-width-img"
            />

            <p>
              React performance optimization exists on a spectrum from quick
              wins to architectural changes. Effective optimization requires
              understanding where your application falls on this spectrum and
              applying the appropriate techniques.
            </p>

            <div className="blog3-highlight">
              <h4>Optimization Roadmap</h4>
              <ol>
                <li>
                  <strong>Measure:</strong> Establish baseline metrics
                </li>
                <li>
                  <strong>Diagnose:</strong> Identify bottlenecks
                </li>
                <li>
                  <strong>Implement:</strong> Apply targeted optimizations
                </li>
                <li>
                  <strong>Verify:</strong> Measure impact
                </li>
                <li>
                  <strong>Iterate:</strong> Repeat the process
                </li>
              </ol>
            </div>
          </section>

          {/* Section 2: Concurrent Rendering */}
          <section className="blog3-section">
            <h2>
              <span>2.</span> Concurrent Rendering in React
            </h2>

            <div className="blog3-flex-container">
              <div>
                <h3>The Concurrent Rendering Revolution</h3>
                <p>
                  Concurrent rendering represents a fundamental shift in React's
                  architecture, introducing interruptible rendering and
                  priority-based update scheduling. This enables:
                </p>
                <ul>
                  <li>Non-blocking rendering of complex component trees</li>
                  <li>Smoother UI interactions during heavy computations</li>
                  <li>Better handling of slow network responses</li>
                  <li>More predictable performance under load</li>
                </ul>
                <div className="blog3-note">
                  <p>
                    <strong>Key Benefit:</strong> In benchmarks, concurrent
                    rendering reduced input latency by 300-400% during
                    CPU-intensive operations.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={blogimg3}
                  alt="Concurrent rendering flow diagram"
                />
              </div>
            </div>

            <h3>Core Concurrent Features</h3>

            <div className="blog3-feature-grid">
              <div className="blog3-code-card">
                <h4>startTransition API</h4>
                <p>
                  Marks non-critical state updates that can be interrupted by
                  more important updates like user interactions.
                </p>
                <pre>
                  <code>{`function SearchResults() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value); // Urgent update (immediate)
    
    startTransition(() => {
      setResults(computeExpensiveResults(value)); // Can be interrupted
    });
  };

  return (
    <>
      <input value={query} onChange={handleChange} />
      {isPending ? <Spinner /> : <Results data={results} />}
    </>
  );
}`}</code>
                </pre>
              </div>

              <div className="blog3-code-card">
                <h4>useTransition Hook</h4>
                <p>
                  Provides pending state flag for building smooth loading
                  experiences during transitions.
                </p>
                <pre>
                  <code>{`function ImageGallery() {
  const [resource, setResource] = useState(initialResource);
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    startTransition(() => {
      setResource(fetchNewData()); // Non-urgent update
    });
  }

  return (
    <>
      <button 
        onClick={handleClick}
        disabled={isPending}
        style={{
          opacity: isPending ? 0.7 : 1,
          transition: 'opacity 0.2s'
        }}
      >
        Load More
      </button>
      <Suspense fallback={<Spinner />}>
        <Photos resource={resource} />
      </Suspense>
    </>
  );
}`}</code>
                </pre>
              </div>

              <div className="blog3-code-card">
                <h4>Suspense for Data Fetching</h4>
                <p>
                  Coordinate loading states across components with declarative
                  fallback UIs.
                </p>
                <pre>
                  <code>{`function ProfilePage() {
  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <ProfileDetails />
      <ErrorBoundary>
        <Suspense fallback={<PostsSkeleton />}>
          <ProfilePosts />
        </Suspense>
      </ErrorBoundary>
    </Suspense>
  );
}

// Data fetching inside components
function ProfileDetails() {
  const user = use(fetchUser()); // Suspense-enabled fetch
  return <h1>{user.name}</h1>;
}`}</code>
                </pre>
              </div>
            </div>

            <h3>Production Integration Strategies</h3>

            <div className="blog3-highlight">
              <h4>Gradual Adoption Framework</h4>

              <div className="blog3-flex-container">
                <div>
                  <h5 className="blog3-flex-container-phase" >Phase 1: Non-Critical Paths</h5>
                  <ul>
                    <li>Search results loading</li>
                    <li>Background data prefetching</li>
                    <li>Secondary dashboard widgets</li>
                  </ul>
                </div>
                <div>
                  <h5 className="blog3-flex-container-phase">Phase 2: Core Interactions</h5>
                  <ul>
                    <li>Form submissions</li>
                    <li>Navigation transitions</li>
                    <li>Data table filtering</li>
                  </ul>
                </div>
                <div>
                  <h5 className="blog3-flex-container-phase">Phase 3: Full Integration</h5>
                  <ul>
                    <li>Authentication flows</li>
                    <li>Checkout processes</li>
                    <li>Real-time updates</li>
                  </ul>
                </div>
              </div>

              <div className="blog3-note">
                <h5>Monitoring Checklist</h5>
                <ul>
                  <li>Track transition durations with performance.mark()</li>
                  <li>Monitor suspense fallback occurrences</li>
                  <li>Measure input delay during transitions</li>
                  <li>Verify no increase in memory usage</li>
                </ul>
              </div>
            </div>

            <div className="blog3-case-study">
              <h4>Case Study: E-Commerce Platform</h4>

              <div className="blog3-flex-container">
                <div>
                  <h5>Before Optimization</h5>
                  <ul>
                    <li>Search latency: 300-500ms</li>
                    <li>22% cart abandonment</li>
                    <li>Mobile conversion rate: 1.8%</li>
                  </ul>
                </div>
                <div>
                  <h5>After Optimization</h5>
                  <ul>
                    <li>Search latency: 50-80ms</li>
                    <li>Cart abandonment: 12%</li>
                    <li>Mobile conversion rate: 2.7%</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Virtualization Techniques */}
          <section className="blog3-section">
            <h2>
              <span>3.</span> Virtualization Techniques
            </h2>

            <div className="blog3-flex-container">
              <div>
                <h3>The Virtualization Advantage</h3>
                <p>
                  Virtualization solves the critical performance bottleneck of
                  rendering large datasets by only creating DOM nodes for items
                  currently visible in the viewport. This technique provides:
                </p>
                <ul>
                  <li>
                    <strong>90-95% memory reduction</strong> for large lists
                  </li>
                  <li>
                    <strong>10-100x faster</strong> initial render times
                  </li>
                  <li>
                    Buttery smooth <strong>60fps scrolling</strong>
                  </li>
                  <li>
                    Reduced <strong>CPU and GPU workload</strong>
                  </li>
                </ul>
                <div className="blog3-note">
                  <p>
                    <strong>Technical Insight:</strong> A 10,000 item list that
                    might take 1200ms to render traditionally can render in
                    under 10ms with virtualization while using 90% less memory.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={blogimg4}
                  alt="Virtualization architecture diagram"
                />
              </div>
            </div>

            <h3>When to Implement Virtualization</h3>

            <div className="blog3-grid">
              <div className="blog3-card blog3-card-primary">
                <h4>Definitely Virtualize</h4>
                <ul>
                  <li>Data tables with 100+ rows</li>
                  <li>Infinite scroll feeds</li>
                  <li>Large tree structures</li>
                  <li>Dashboard widget grids</li>
                </ul>
              </div>

              <div className="blog3-card blog3-card-secondary">
                <h4>Consider Virtualization</h4>
                <ul>
                  <li>Lists with 50-100 complex items</li>
                  <li>Moderate-sized tables with many columns</li>
                  <li>Components with expensive render logic</li>
                </ul>
              </div>

              <div className="blog3-card blog3-card-tertiary">
                <h4>Probably Not Needed</h4>
                <ul>
                  <li>Short lists (&lt;50 simple items)</li>
                  <li>Static content</li>
                  <li>Components already optimized</li>
                </ul>
              </div>
            </div>

            <h3>Virtualization Libraries Comparison</h3>

            <div className="blog3-table-container">
              <table>
                <thead>
                  <tr>
                    <th>Library</th>
                    <th>Size</th>
                    <th>Features</th>
                    <th>Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>react-window</strong>
                    </td>
                    <td>6.5kB</td>
                    <td>
                      Fixed/variable sizes, horizontal/vertical, basic
                      customization
                    </td>
                    <td>
                      Most list virtualization needs, balance of features and
                      size
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>react-virtualized</strong>
                    </td>
                    <td>22kB</td>
                    <td>
                      Grids, masonry, cell measurer, auto-sizer, full
                      customization
                    </td>
                    <td>
                      Complex data grids, multi-dimensional virtualization
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>@tanstack/react-virtual</strong>
                    </td>
                    <td>4kB</td>
                    <td>Headless, dynamic sizes, infinite scroll, windowing</td>
                    <td>Custom virtualization needs, minimal overhead</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Advanced Virtualization Patterns</h3>

            <div className="blog3-code-section">
              <h4>Dynamic Height Virtualization</h4>

              <div className="blog3-flex-container">
                <div>
                  <p>
                    Handling variable height items requires measuring elements
                    before rendering. The <code>CellMeasurer</code> pattern
                    solves this by:
                  </p>
                  <ol>
                    <li>Rendering a measurement pass</li>
                    <li>Caching item dimensions</li>
                    <li>Using cached sizes for layout</li>
                    <li>Invalidating cache when data changes</li>
                  </ol>
                  <div className="blog3-tip">
                    <p>
                      <strong>Pro Tip:</strong> For maximum performance, provide
                      estimated row heights to avoid layout thrashing during
                      measurement.
                    </p>
                  </div>
                </div>
                <div>
                  <pre>
                    <code>{`import { VariableSizeList } from 'react-window';
import { ResizeObserver } from '@juggle/resize-observer';

const rowHeights = new Array(1000)
.fill(true)
.map(() => 25 + Math.round(Math.random() * 50));

const Row = ({ index, style }) => (
  <div style={style}>
    Row {index} (height: {rowHeights[index]}px)
  </div>
);

const App = () => (
  <VariableSizeList
    height={500}
    itemCount={1000}
    itemSize={index => rowHeights[index]}
    width={600}
    itemData={data}
  >
    {Row}
  </VariableSizeList>
);`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="blog3-code-section">
              <h4>Infinite Loading with Virtualization</h4>

              <div className="blog3-flex-container">
                <div>
                  <p>
                    Combining virtualization with infinite loading creates a
                    seamless experience for large datasets that can't fit in
                    memory all at once.
                  </p>
                  <ul>
                    <li>Track loaded ranges</li>
                    <li>Prefetch adjacent items</li>
                    <li>Implement scroll position restoration</li>
                    <li>Cache loaded data</li>
                  </ul>
                  <img
                    src={blogimg5}
                    alt="Infinite loading diagram"
                  />
                  <img
                    src={blogimg6}
                    alt="Infinite loading diagram"
                  />
                </div>
                <div>
                  <pre>
                    <code>{`function InfiniteList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    fetchNextPage().then(newItems => {
      setItems(prev => [...prev, ...newItems]);
      setHasMore(newItems.length > 0);
      setLoading(false);
    });
  }, [loading, hasMore]);

  const isItemLoaded = index => index < items.length;

  const Item = ({ index, style }) => {
    if (!isItemLoaded(index)) {
      return <div style={style}>Loading...</div>;
    }
    
    return (
      <div style={style}>
        Item {index}: {items[index]}
      </div>
    );
  };

  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={hasMore ? items.length + 1 : items.length}
      loadMoreItems={loadMore}
    >
      {({ onItemsRendered, ref }) => (
        <FixedSizeList
          height={500}
          itemCount={hasMore ? items.length + 1 : items.length}
          itemSize={50}
          width={600}
          onItemsRendered={onItemsRendered}
          ref={ref}
        >
          {Item}
        </FixedSizeList>
      )}
    </InfiniteLoader>
  );
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Profiling and Measuring Performance */}
          <section className="blog3-section">
            <h2>
              <span>4.</span> Profiling and Measuring Performance
            </h2>

            <div className="blog3-flex-container">
              <div>
                <h3>The Measurement Mindset</h3>
                <p>
                  Performance optimization without measurement is like
                  navigation without a compass. Effective React optimization
                  requires:
                </p>
                <ul>
                  <li>
                    <strong>Baseline metrics</strong> - Know your starting point
                  </li>
                  <li>
                    <strong>Precise instrumentation</strong> - Measure the right
                    things
                  </li>
                  <li>
                    <strong>Statistical significance</strong> - Avoid false
                    positives
                  </li>
                  <li>
                    <strong>Continuous monitoring</strong> - Prevent regression
                  </li>
                </ul>
                <div className="blog3-note">
                  <p>
                    <strong>Golden Rule:</strong> Always measure before and
                    after optimizations. Many "optimizations" actually make
                    performance worse in real-world scenarios.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={blogimg7}
                  alt="React performance measurement tools"
                />
              </div>
            </div>

            <h3>React Profiler Deep Dive</h3>

            <div className="blog3-note">
              <h4>Using React DevTools Profiler</h4>

              <div className="blog3-flex-container">
                <div>
                  <p>
                    The React Profiler provides component-level timing metrics
                    through flamegraphs:
                  </p>
                  <ol>
                    <li>Record a profiling session</li>
                    <li>Analyze the flamegraph</li>
                    <li>Identify expensive re-renders</li>
                    <li>Drill into component details</li>
                  </ol>
                  <p>
                    Key metrics: Render duration, commit phase timing, and
                    re-render frequency.
                  </p>
                </div>
                <div>
                  <img
                    src={blogimg8}
                    alt="React Profiler screenshot"
                  />
                </div>
              </div>
            </div>

            <h3>Performance Measurement Tools</h3>

            <div className="blog3-grid">
              <div className="blog3-code-card">
                <h4>performance.now()</h4>
                <p>High-resolution timing for custom measurements:</p>
                <pre>
                  <code>{`const start = performance.now();
// Execute code to measure
const end = performance.now();
console.log(\`Execution time: \${end - start}ms\`);`}</code>
                </pre>
              </div>

              <div className="blog3-code-card">
                <h4>React.memo + Profiling</h4>
                <p>Identify unnecessary re-renders:</p>
                <pre>
                  <code>{`const ExpensiveComponent = React.memo(({ data }) => {
  // Component logic
});

// In Profiler, check if parent re-renders cause unnecessary updates`}</code>
                </pre>
              </div>

              <div className="blog3-code-card">
                <h4>Web Vitals</h4>
                <p>Core user-centric metrics:</p>
                <pre>
                  <code>{`import { getCLS, getFID, getLCP } from 'web-vitals';

getCLS(console.log);
getFID(console.log); 
getLCP(console.log);`}</code>
                </pre>
              </div>
            </div>

            <div className="blog3-case-study">
              <h4>Diagnosing Performance Bottlenecks</h4>

              <div className="blog3-flex-container">
                <div>
                  <h5>Symptom: Slow Initial Load</h5>
                  <ul>
                    <li>Check bundle size with source-map-explorer</li>
                    <li>Analyze network waterfall</li>
                    <li>Verify code splitting</li>
                  </ul>
                </div>
                <div>
                  <h5>Symptom: Janky Interactions</h5>
                  <ul>
                    <li>Profile with React.memo checks</li>
                    <li>Identify large component trees</li>
                    <li>Check for synchronous state updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Code-Splitting and Lazy Loading */}
          <section className="blog3-section">
            <h2>
              <span>5.</span> Code-Splitting and Lazy Loading
            </h2>

            <div className="blog3-flex-container">
              <div>
                <h3>The Bundle Size Problem</h3>
                <p>
                  As React apps grow, JavaScript bundle sizes can balloon to
                  several MBs, causing:
                </p>
                <ul>
                  <li>Slow initial page loads</li>
                  <li>High memory usage</li>
                  <li>Poor Time-to-Interactive (TTI)</li>
                  <li>Reduced caching efficiency</li>
                </ul>
                <div className="blog3-note">
                  <p>
                    <strong>Case Study:</strong> Splitting a 2.4MB bundle into
                    logical chunks reduced initial load time by 58% and improved
                    Lighthouse score from 42 to 89.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={blogimg9}
                  alt="Bundle size analysis chart"
                />
              </div>
            </div>

            <h3>React.lazy and Suspense</h3>

            <div className="blog3-note">
              <h4>Basic Implementation</h4>

              <div className="blog3-flex-container">
                <div>
                  <p>
                    React.lazy enables component-level code splitting with
                    Suspense fallbacks:
                  </p>
                  <pre>
                    <code>{`const ProductDetails = React.lazy(() => 
  import('./ProductDetails')
);

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <ProductDetails />
    </Suspense>
  );
}`}</code>
                  </pre>
                </div>
                <div>
                  <p>Best practices for Suspense:</p>
                  <ul>
                    <li>Always provide meaningful fallbacks</li>
                    <li>Keep fallback dimensions stable</li>
                    <li>Avoid layout shifts</li>
                    <li>Consider skeleton screens</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3>Route-Based Splitting</h3>

            <div className="blog3-grid-unique">
              <div className="blog3-code-card">
                <h4>React Router v6</h4>
                <pre>
                  <code>{`import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <Suspense fallback={<PageLoader />}>
          <Home />
        </Suspense>
      } />
      <Route path="/about" element={
        <Suspense fallback={<PageLoader />}>
          <About />
        </Suspense>
      } />
    </Routes>
  );
}`}</code>
                </pre>
              </div>

              <div className="blog3-code-card">
                <h4>Prefetching Strategy</h4>
                <pre>
                  <code>{`// Prefetch on hover or visibility
const ProductDetails = lazy(() => import(
  /* webpackPrefetch: true */ './ProductDetails'
));

// Or manually trigger prefetch
function prefetchComponent() {
  import('./ProductDetails');
}

// Call on hover or other user intent
<Link 
  to="/product" 
  onMouseEnter={prefetchComponent}
>
  Product
</Link>`}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Section 6: Fine-Grained Re-render Control */}
          <section className="blog3-section">
            <h2>
              <span>6.</span> Fine-Grained Re-render Control
            </h2>

            <div className="blog3-flex-container">
              <div>
                <h3>The Re-render Problem</h3>
                <p>
                  React's declarative model can lead to unnecessary re-renders
                  when:
                </p>
                <ul>
                  <li>Parent components re-render</li>
                  <li>Context values change</li>
                  <li>Props are unstable references</li>
                  <li>State management triggers updates</li>
                </ul>
                <div className="blog3-note">
                  <p>
                    <strong>Performance Impact:</strong> Unnecessary re-renders
                    can waste 30-50% of rendering resources in complex
                    applications.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={blogimg10}
                  alt="React component render flow"
                />
              </div>
            </div>

            <h3>Optimization Techniques</h3>

            <div className="blog3-grid">
              <div className="blog3-code-card">
                <h4>React.memo</h4>
                <pre>
                  <code>{`const ExpensiveComponent = React.memo(
  ({ data }) => {
    return <div>{data}</div>;
  },
  (prevProps, nextProps) => {
    // Custom comparison
    return prevProps.data === nextProps.data;
  }
);`}</code>
                </pre>
                <p>
                  <strong>When to use:</strong> Pure components with stable
                  props
                </p>
              </div>

              <div className="blog3-code-card">
                <h4>useMemo/useCallback</h4>
                <pre>
                  <code>{`function Parent() {
  const [count, setCount] = useState(0);
  
  // Memoize expensive calculation
  const computedValue = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);
  
  // Memoize callback
  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []);
  
  return (
    <Child onClick={handleClick} value={computedValue} />
  );
}`}</code>
                </pre>
              </div>

              <div className="blog3-code-card">
                <h4>useRef/useImperativeHandle</h4>
                <pre>
                  <code>{`// Avoid re-renders for non-state values
function Timer() {
  const intervalRef = useRef();
  
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // Update without re-render
    }, 1000);
    
    return () => clearInterval(intervalRef.current);
  }, []);
}

// Expose imperative methods
const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus()
  }));
  
  return <input ref={inputRef} />;
});`}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Section 7: Context API Optimization */}
          <section className="blog3-section">
            <h2>
              <span>7.</span> Context API Optimization
            </h2>

            <div className="blog3-flex-container">
              <div>
                <h3>Context Performance Challenges</h3>
                <p>
                  While Context is great for state management, it can cause
                  performance issues:
                </p>
                <ul>
                  <li>All consumers re-render on any value change</li>
                  <li>Frequent updates trigger cascading re-renders</li>
                  <li>Large context values increase memory pressure</li>
                  <li>Nested providers compound these issues</li>
                </ul>
                <div className="blog3-note">
                  <p>
                    <strong>Diagnosis Tip:</strong> Use React Profiler to
                    identify unnecessary context-triggered re-renders.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={blogimg11}
                  alt="Context re-render flow"
                />
              </div>
            </div>

            <h3>Optimization Strategies</h3>

            <div className="blog3-grid">
              <div className="blog3-code-card">
                <h4>Splitting Contexts</h4>
                <pre>
                  <code>{`// Instead of one big context:
const UserContext = createContext();
const SettingsContext = createContext();

function App() {
  return (
    <UserContext.Provider value={userData}>
      <SettingsContext.Provider value={settings}>
        <AppLayout />
      </SettingsContext.Provider>
    </UserContext.Provider>
  );
}`}</code>
                </pre>
              </div>

              <div className="blog3-code-card">
                <h4>Context Selectors</h4>
                <pre>
                  <code>{`// Using useContextSelector
import { useContextSelector } from 'use-context-selector';

function UserName() {
  const name = useContextSelector(
    UserContext,
    (user) => user.name
  );
  
  return <div>{name}</div>;
}

// Only re-renders when user.name changes`}</code>
                </pre>
              </div>

              <div className="blog3-code-card">
                <h4>Memoized Providers</h4>
                <pre>
                  <code>{`function AppProvider({ children }) {
  const [state, setState] = useState(initialState);
  
  // Memoize context value
  const contextValue = useMemo(() => ({
    state,
    dispatch: (action) => {
      setState(reducer(state, action));
    }
  }), [state]);
  
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}`}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Section 8: TypeScript Performance Tips */}
          <section className="blog3-section">
            <h2>
              <span>8.</span> TypeScript Performance Tips
            </h2>

            <div className="blog3-flex-container">
              <div>
                <h3>TypeScript Impact on Performance</h3>
                <p>
                  While TypeScript itself doesn't affect runtime performance,
                  type design impacts:
                </p>
                <ul>
                  <li>Build times and developer experience</li>
                  <li>Bundle size (with certain configurations)</li>
                  <li>Code organization and maintainability</li>
                  <li>Runtime type checking overhead</li>
                </ul>
                <div className="blog3-note">
                  <p>
                    <strong>Note:</strong> TypeScript types are erased during
                    compilation and don't affect runtime performance directly.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={blogimg12}
                  alt="TypeScript compilation process"
                />
              </div>
            </div>

            <h3>Optimization Techniques</h3>

            <div className="blog3-grid">
              <div className="blog3-code-card">
                <h4>Discriminated Unions</h4>
                <pre>
                  <code>{`type LoadingState = {
  status: 'loading';
};

type SuccessState = {
  status: 'success';
  data: string[];
};

type ErrorState = {
  status: 'error';
  error: Error;
};

type State = LoadingState | SuccessState | ErrorState;

function Component({ state }: { state: State }) {
  switch (state.status) {
    case 'loading':
      return <Loader />;
    case 'success':
      return <DataView data={state.data} />;
    case 'error':
      return <ErrorDisplay error={state.error} />;
  }
}`}</code>
                </pre>
              </div>

              <div className="blog3-code-card">
                <h4>Type-Only Imports</h4>
                <pre>
                  <code>{`// Reduces runtime imports
import type { User } from './types';

// For React components
import type { FC } from 'react';
interface Props { /* ... */ }
const Component: FC<Props> = () => { /* ... */ };`}</code>
                </pre>
              </div>

              <div className="blog3-code-card">
                <h4>Efficient Generics</h4>
                <pre>
                  <code>{`// Avoid complex nested generics
type SimpleList<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
};

// Use default types when possible
type PaginationOptions = {
  page?: number;
  size?: number;
};

// Prefer interfaces for object shapes
interface User {
  id: string;
  name: string;
}`}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Section 9: Anti-Patterns and Common Traps */}
          <section className="blog3-section">
            <h2>
              <span>9.</span> Anti-Patterns and Common Traps
            </h2>

            <div className="blog3-flex-container">
              <div>
                <h3>Performance Pitfalls</h3>
                <p>
                  Many common React patterns actually hurt performance when
                  misused:
                </p>
                <ul>
                  <li>
                    <strong>Premature optimization:</strong> Adding React.memo
                    everywhere without measuring first
                  </li>
                  <li>
                    <strong>Context overuse:</strong> Putting everything in a
                    single context provider
                  </li>
                  <li>
                    <strong>Effect chains:</strong> Cascading useEffect calls
                    that trigger re-renders
                  </li>
                  <li>
                    <strong>Prop drilling:</strong> Passing callbacks deep
                    through component trees
                  </li>
                </ul>
                <div className="blog3-note">
                  <p>
                    <strong>Case Study:</strong> Removing unnecessary React.memo
                    wrappers actually improved performance by 15% in a large
                    dashboard app by reducing memoization overhead.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={blogimg13}
                  alt="Common React anti-patterns"
                />
              </div>
            </div>

            <h3>Common Anti-Patterns</h3>

            <div className="blog3-grid">
              <div className="blog3-code-card">
                <h4>1. Over-Memoization</h4>
                <p>
                  Wrapping every component in React.memo without proper prop
                  analysis:
                </p>
                <pre>
                  <code>{`// ❌ Don't do this everywhere
const Button = React.memo(({ children }) => (
  <button>{children}</button>
));

// ✅ Only memoize when:
// - Component re-renders with same props
// - Re-renders are expensive
// - You've measured the impact`}</code>
                </pre>
              </div>

              <div className="blog3-code-card">
                <h4>2. Giant Context</h4>
                <p>Putting all application state in a single context:</p>
                <pre>
                  <code>{`// ❌ Avoid mega-context
const AppContext = createContext();

function App() {
  const [state, setState] = useState({
    user: {},
    settings: {},
    theme: {},
    // 20+ other values...
  });
  
  return (
    <AppContext.Provider value={{ state, setState }}>
      <AppLayout />
    </AppContext.Provider>
  );
}

// ✅ Split into logical contexts
const UserContext = createContext();
const SettingsContext = createContext();`}</code>
                </pre>
              </div>

              <div className="blog3-code-card">
                <h4>3. Effect Chains</h4>
                <p>Cascading effects that trigger re-renders:</p>
                <pre>
                  <code>{`// ❌ Avoid effect chains
function Component() {
  const [data, setData] = useState();
  const [processed, setProcessed] = useState();
  
  useEffect(() => {
    fetchData().then(setData);
  }, []);
  
  useEffect(() => {
    if (data) {
      setProcessed(process(data));
    }
  }, [data]); // Triggers extra render
  
  // ✅ Combine into single effect
  useEffect(() => {
    fetchData().then(data => {
      setProcessed(process(data));
    });
  }, []);`}</code>
                </pre>
              </div>
            </div>

            <h3>Optimization Traps</h3>

            <div className="blog3-case-study">
              <h4>Things That Look Optimized But Aren't</h4>

              <div className="blog3-grid">
                <div>
                  <h5>Inline Function Props</h5>
                  <pre>
                    <code>{`// ❌ Looks clean but creates new function each render
<Button onClick={() => handleClick(id)} />

// ✅ Memoize handler when needed
const handleClick = useCallback(() => {
  // handler logic
}, [dependencies]);`}</code>
                  </pre>
                </div>

                <div>
                  <h5>Spread Props</h5>
                  <pre>
                    <code>{`// ❌ Spread props break memoization
<Component {...props} />

// ✅ Be explicit with needed props
<Component 
  title={props.title}
  active={props.active}
/>`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Section 10: Conclusion and Resources */}
          <section className="blog3-section">
            <h2>
              <span>10.</span> Conclusion and Resources
            </h2>

            <div className="blog3-flex-container">
              <div>
                <h3>Key Takeaways</h3>
                <p>
                  After exploring all these optimization techniques, remember:
                </p>
                <ul>
                  <li>
                    <strong>Measure first:</strong> Never optimize without
                    profiling
                  </li>
                  <li>
                    <strong>Focus on bottlenecks:</strong> 80% of gains come
                    from 20% of fixes
                  </li>
                  <li>
                    <strong>Balance tradeoffs:</strong> Optimization often
                    increases complexity
                  </li>
                  <li>
                    <strong>Test changes:</strong> Verify improvements with
                    metrics
                  </li>
                </ul>
                <div className="blog3-note">
                  <p>
                    <strong>Remember:</strong> The fastest code is code that
                    doesn't run. Often the best optimization is removing
                    unnecessary work entirely.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={blogimg14}
                  alt="Optimization priority pyramid"
                />
              </div>
            </div>

            <h3>Optimization Checklist</h3>

            <div className="blog3-highlight">
              <h4>React Performance Audit</h4>

              <div className="blog3-grid">
                <div>
                  <h5>Rendering</h5>
                  <ul>
                    <li>Identify unnecessary re-renders</li>
                    <li>Apply React.memo where beneficial</li>
                    <li>Memoize expensive calculations</li>
                    <li>Use concurrent rendering features</li>
                  </ul>
                </div>

                <div>
                  <h5>Loading</h5>
                  <ul>
                    <li>Implement code splitting</li>
                    <li>Lazy load non-critical components</li>
                    <li>Optimize bundle size</li>
                    <li>Prefetch likely routes</li>
                  </ul>
                </div>

                <div>
                  <h5>Data</h5>
                  <ul>
                    <li>Virtualize large lists</li>
                    <li>Optimize context providers</li>
                    <li>Batch state updates</li>
                    <li>Use transitions for non-urgent updates</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3>Further Resources</h3>

            <div className="blog3-grid">
              <div className="blog3-card">
                <h4>Official Documentation</h4>
                <ul>
                  <li>React Docs: Optimizing Performance</li>
                  <li>React Profiler API Reference</li>
                  <li>Concurrent Mode Documentation</li>
                  <li>React Fiber Architecture</li>
                </ul>
              </div>

              <div className="blog3-card">
                <h4>Tools</h4>
                <ul>
                  <li>React DevTools Profiler</li>
                  <li>Chrome Performance Tab</li>
                  <li>Webpack Bundle Analyzer</li>
                  <li>Lighthouse CI</li>
                </ul>
              </div>

              <div className="blog3-card">
                <h4>Community Resources</h4>
                <ul>
                  <li>Reactiflux Discord</li>
                  <li>React GitHub Issues</li>
                  <li>Performance Case Studies</li>
                  <li>React Conference Talks</li>
                </ul>
              </div>
            </div>

            <div className="blog3-cta">
              <h3>Ready to Optimize Your React App?</h3>
              <p>
                Start with one optimization at a time, measure the impact, and
                iterate.
              </p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Blog3;
