import React from "react"

export async function getStaticProps() {

    return { props: {} }
}

export default function Index({ tweet }) {
    return (
        <page
            title="Static Tweet Next.js Demo"
            description="A demo showing off ahead-of-time and incremental static generation by using Tweets as the datasource"
        >
            <p>
                This demo shows off the next-gen Static Site Generation capabilities in Next.js. The
                following tweet:
            </p>
            {/*TODO Tweet*/}
            <p>
                was inlined into the HTML of this page (<code className="inline">`pages/index.js`</code>) by
                using <code className="inline">`getStaticProps`</code> in your Next.js page (
                <a href="https://github.com/lfades/static-tweet/blob/master/pages/index.js">source</a>
                ).
            </p>
            <p>
                That means no Twitter embed <code className="inline">`{`<iframe>`}`</code>, no JS, no layout
                and scrolling jumps, no slowness, great SEO, great lighthouse scores:
            </p>
            {/*TODO Score*/}
            <p>To see this in action, try statically rendering your very own tweet it:</p>
            {/*TODO RandomTweet*/}
            <p>
                How is this possible? The deploy time for this project was <strong>30 seconds</strong>. We
                couldn’t have possibly statically generated all tweets. Each day,{' '}
                <a href="https://blog.twitter.com/engineering/en_us/a/2013/new-tweets-per-second-record-and-how.html">
                    500M tweets are added
                </a>
                !
            </p>
            <h2 data={{ id: 'incremental-static-generation' }}>Incremental Static Generation</h2>
            <p>
                When you visit{' '}
                <code className="inline">
                    `https://static-tweet.now.sh/<b>{`{tweetId}`}</b>`
                </code>{' '}
                you’ll notice that if the tweet has never been rendered before, you’ll get a{' '}
                <strong>skeleton page</strong>.
            </p>
            {/*TODO Tweet*/}
            <p>
                After you refresh that page, you’ll get the static HTML, no matter what edge in the{' '}
                <a href="https://vercel.com/edge-network">global network</a> you are visiting.
            </p>
            <p>
                Because it’s static HTML, if Twitter disappears from the internet, you have strong
                guarantees of its high availability, backed by redundant storage.
            </p>
            <p>
                This is all enabled by a simple option: <code className="inline">`fallback: true`</code> in{' '}
                <code className="inline">`getStaticPaths`</code>. In this case, this is defined in the
                Next.js page called <code className="inline">`pages/[tweet].js`</code> (
                <a href="https://github.com/lfades/static-tweet/blob/master/pages/%5Btweet%5D.js">source</a>
                ).
            </p>
            <p>
                The <code className="inline">`getStaticPaths`</code> hook allows you to give Next.js the set
                of IDs you want to generate at <strong>build time</strong>.
            </p>
            <p>
                When you define a fallback, you get the power to continue lazily building pages{' '}
                <strong>at runtime as well</strong>. Unlike traditional Server Side Rendering (SSR), the
                initial request is always <strong>instant</strong> (the fallback itself is also static), you
                don’t worry about <strong>configuring caching</strong> and the work is only done{' '}
                <strong>once globally</strong>.
            </p>
            <hr />
            <ul>
                <li>
                    <a href="https://github.com/jannkasper/frameworks-workout/tree/master/next-static-tweet">
                        Source code
                    </a>{' '}
                    for this page
                </li>
                <li>
                    <a href="https://nextjs.org/docs/basic-features/data-fetching">Next.js documentation</a>{' '}
                    for <code className="inline">`getStaticProps`</code> and{' '}
                    <code className="inline">`getStaticPaths`</code>
                </li>
                <li>
                    Get started{' '}
                    <a href="https://nextjs.org/learn/basics/create-nextjs-app">
                        learning Next.js from scratch
                    </a>
                </li>
            </ul>
        </page>
    )
}
