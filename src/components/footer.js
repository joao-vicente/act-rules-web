import React from 'react'
import PropTypes from 'prop-types'

import './footer.scss'

const Footer = ({ actRulesRepoUrl }) => (
	<footer className="appFooter">
		{/* tags  */}
		<div className="tags">
			<p className="tag">
				A Community Group of the
				<a href="https://www.w3.org/" target="_blank" rel="noopener noreferrer">
					World Wide Web Consortium.
				</a>
			</p>
			<p className="tag">
				Developed with the support of the EU-funded{' '}
				<a target="_blank" rel="noopener noreferrer" href="https://www.w3.org/WAI/about/projects/wai-tools/">
					WAI-Tools{' '}
				</a>{' '}
				Project.
			</p>
		</div>

		{/* logos  */}
		<div className="logos">
			{/* w3c logo */}
			<a lang="en" className="logo-w3c" href="https://www.w3.org/" rel="noopener noreferrer" target="_blank">
				<svg role="img" aria-label="W3C" viewBox="0 0 68 34" height="25" xmlns="http://www.w3.org/2000/svg">
					<g>
						<path d="m16.117 1.006 5.759 19.58 5.759-19.58h4.17 11.444v1.946l-5.879 10.128c2.065.663 3.627 1.868 4.686 3.615 1.059 1.748 1.589 3.799 1.589 6.155 0 2.914-.775 5.363-2.324 7.348s-3.555 2.978-6.017 2.978c-1.854 0-3.469-.589-4.845-1.767-1.377-1.178-2.396-2.773-3.058-4.786l3.256-1.35c.477 1.218 1.106 2.178 1.887 2.879.781.702 1.701 1.052 2.76 1.052 1.112 0 2.052-.622 2.82-1.866.768-1.245 1.152-2.74 1.152-4.489 0-1.933-.411-3.429-1.231-4.488-.954-1.244-2.45-1.867-4.489-1.867h-1.588v-1.906l5.56-9.612h-6.712l-.382.65-8.163 27.548h-.397l-5.958-19.937-5.957 19.937h-.397l-9.53-32.168h4.17l5.759 19.58 3.892-13.185-1.906-6.395z" />
						<path d="m64.92 1.006c-.819 0-1.554.295-2.111.861-.591.6-.92 1.376-.92 2.178s.313 1.545.887 2.128c.583.591 1.334.912 2.145.912.793 0 1.562-.321 2.161-.903.574-.557.887-1.3.887-2.136 0-.811-.321-1.57-.878-2.136-.584-.592-1.344-.904-2.171-.904zm2.643 3.065c0 .701-.271 1.351-.768 1.832-.524.507-1.174.777-1.892.777-.675 0-1.342-.278-1.84-.785s-.777-1.157-.777-1.849.287-1.368.802-1.891c.481-.49 1.131-.751 1.84-.751.726 0 1.376.271 1.883.785.49.489.752 1.147.752 1.882zm-2.559-1.807h-1.3v3.445h.65v-1.469h.642l.701 1.469h.726l-.769-1.57c.498-.102.785-.439.785-.929 0-.625-.472-.946-1.435-.946zm-.118.422c.608 0 .886.169.886.591 0 .405-.278.549-.87.549h-.549v-1.14z" />
						<path d="m59.807.825.676 4.107-2.391 4.575s-.918-1.941-2.443-3.015c-1.285-.905-2.122-1.102-3.431-.832-1.681.347-3.587 2.357-4.419 4.835-.995 2.965-1.005 4.4-1.04 5.718-.056 2.113.277 3.362.277 3.362s-1.452-2.686-1.438-6.62c.009-2.808.451-5.354 1.75-7.867 1.143-2.209 2.842-3.535 4.35-3.691 1.559-.161 2.791.59 3.743 1.403 1 .854 2.01 2.721 2.01 2.721z" />
						<path d="m60.102 24.063s-1.057 1.889-1.715 2.617c-.659.728-1.837 2.01-3.292 2.651s-2.218.762-3.656.624c-1.437-.138-2.772-.97-3.24-1.317s-1.664-1.369-2.34-2.322-1.733-2.859-1.733-2.859.589 1.91.958 2.721c.212.467.864 1.894 1.789 3.136.863 1.159 2.539 3.154 5.086 3.604 2.547.451 4.297-.693 4.73-.97s1.346-1.042 1.924-1.66c.603-.645 1.174-1.468 1.49-1.962.231-.36.607-1.092.607-1.092z" />
					</g>
				</svg>
			</a>

			{/* wai logo */}
			<a lang="en" className="logo-wai" href="https://www.w3.org/WAI/" target="_blank" rel="noopener noreferrer">
				<span className="wai">
					<span className="wa">Web&nbsp;Accessibility</span>{' '}
					<span className="i">
						<span className="initieative">Initiative</span> <span>WAI</span>
					</span>
				</span>
			</a>
		</div>
	</footer>
)

Footer.propTypes = {
	actRulesRepoUrl: PropTypes.string,
}

Footer.defaultProps = {
	actRulesRepoUrl: ``,
}

export default Footer
