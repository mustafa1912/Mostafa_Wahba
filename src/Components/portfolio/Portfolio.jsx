import React from "react";
import { Helmet } from "react-helmet-async";
// Fancybox CSS and JS
import "@fancyapps/fancybox/dist/jquery.fancybox.min.css";
import "@fancyapps/fancybox/dist/jquery.fancybox.min.js";

function Portfolio() {
    const projectCategories = {
        Projects: [
            { href: './img/ugec1.png', title: 'ugec Project', url: 'https://ugec.souqmsr.com/', date: ' Nov 2024  ' },
            { href: './img/jawdaconsultant1.png', title: 'jawdaconsultant Project', url: 'https://jawdaconsultant.com', date: ' jan 2024  ' },
            { href: './img/al-motamizon1.png', title: 'al-motamizon Project', url: 'https://al-motamizon.com/ar', date: ' Dec 2023  ' },
            { href: './img/ghulam1.png', title: 'ghulam Project', url: 'https://ghulam.najezsoft.com/ar', date: ' Nov 2023  ' },
            { href: './img/noorcontrol1.png', title: 'noorcontrol Project', url: 'https://noorcontrol.com/', date: ' Nov 2023  ' },
            { href: './img/asiaf1.png', title: 'asiaf Project', url: 'https://www.asiaf.com.sa/', date: ' oct 2023  ' },
            { href: './img/kfs-hiet1.png', title: 'kfs-hiet Project', url: 'https://kfs-hiet.edu.eg/', date: ' Aug 2023  ' },
            { href: './img/citysquares1.png', title: 'citysquares Project', url: 'https://citysquares.com.eg/ar', date: ' jul 2023  ' },
            { href: './img/osqufia1.png', title: 'osqufia Project', url: '#', date: ' jun 2023  ' },
            { href: './img/whitesand1.png', title: 'whitesand Project', url: 'https://www.whitesand-eg.com/', date: ' Nov 2021  ' },
            { href: './img/us1.png', title: 'us Project', url: '#', date: ' may 2023  ' },
            { href: './img/cms.webp', title: 'CMS Project', url: '#', date: ' Feb 2021  ' },
            { href: './img/hcr1.webp', title: 'HCR Project', url: '#', date: ' Feb 2021  ' },
            { href: './img/naseq8.webp', title: 'naseq Project', url: '#', date: ' Feb 2021  ' },
            { href: './img/thite1.webp', title: 'thite', url: 'https://thiet.edu.eg/ar', date: ' Feb 2021  ' },
            { href: './img/henkleez7.webp', title: 'henkleez Project', url: 'https://www.henkleez.com/ar', date: ' Feb 2021  ' },
            { href: './img/market9.webp', title: 'market Project', url: '', date: ' Feb 2020  ' },
            { href: './img/dashboed7.webp', title: 'dashboed Project', url: '#', date: ' Feb 2020  ' },
        ],
        dashboed: [
            { href: './img/dashboed1.png', title: 'dashboed Project' },
            { href: './img/dashboed2.png', title: 'dashboed Project' }
        ],
        HCR: [
            { href: './img/dashboed1.png', title: 'dashboed Project' },
            { href: './img/dashboed2.png', title: 'dashboed Project' },
            { href: './img/dashboed3.png', title: 'dashboed Project' },
            { href: './img/dashboed4.png', title: 'dashboed Project' },
            { href: './img/dashboed5.png', title: 'dashboed Project' },
            { href: './img/dashboed6.png', title: 'dashboed Project' },
            { href: './img/dashboed7.png', title: 'dashboed Project' },
            { href: './img/dashboed8.png', title: 'dashboed Project' },
            { href: './img/dashboed9.png', title: 'dashboed Project' }
        ],
        market: [
            { href: './img/market1.png', title: 'market Project' },
            { href: './img/market2.png', title: 'market Project' },
            { href: './img/market3.png', title: 'market Project' },
            { href: './img/market4.png', title: 'market Project' },
            { href: './img/market5.png', title: 'market Project' }
        ],
        osqufia: [
            { href: './img/osqufia1.png', title: 'osqufia Project' },
            { href: './img/osqufia2.png', title: 'osqufia Project' },
            { href: './img/osqufia3.png', title: 'osqufia Project' },
            { href: './img/osqufia4.png', title: 'osqufia Project' },
            { href: './img/osqufia5.png', title: 'osqufia Project' },
            { href: './img/osqufia6.png', title: 'osqufia Project' },
            { href: './img/osqufia7.png', title: 'osqufia Project' },
            { href: './img/osqufia8.png', title: 'osqufia Project' },
            { href: './img/osqufia9.png', title: 'osqufia Project' },
            { href: './img/osqufia10.png', title: 'osqufia Project' },
            { href: './img/osqufia11.png', title: 'osqufia Project' },
            { href: './img/osqufia12.png', title: 'osqufia Project' },
            { href: './img/osqufia13.png', title: 'osqufia Project' },
            { href: './img/osqufia14.png', title: 'osqufia Project' },
            { href: './img/osqufia15.png', title: 'osqufia Project' },
            { href: './img/osqufia16.png', title: 'osqufia Project' }
        ],
        thite: [
            { href: './img/thite1.png', title: 'thite' },
            { href: './img/thite2.png', title: 'thite' },
            { href: './img/thite3.png', title: 'thite' },
            { href: './img/thite4.png', title: 'thite' },
            { href: './img/thite5.png', title: 'thite' },
            { href: './img/thite6.png', title: 'thite' }
        ],
        us: [
            { href: './img/us1.png', title: 'us Project' },
            { href: './img/us2.png', title: 'us Project' },
            { href: './img/us3.png', title: 'us Project' },
            { href: './img/us4.png', title: 'us Project' },
            { href: './img/us5.png', title: 'us Project' },
            { href: './img/us6.png', title: 'us Project' },
            { href: './img/us7.png', title: 'us Project' },
            { href: './img/us8.png', title: 'us Project' },
            { href: './img/us9.png', title: 'us Project' }
        ],
        al_motamizon: [
            { href: './img/al-motamizon7.png', title: 'al-motamizon Project' },
            { href: './img/al-motamizon6.png', title: 'al-motamizon Project' },
            { href: './img/al-motamizon5.png', title: 'al-motamizon Project' },
            { href: './img/al-motamizon4.png', title: 'al-motamizon Project' },
            { href: './img/al-motamizon3.png', title: 'al-motamizon Project' },
            { href: './img/al-motamizon2.png', title: 'al-motamizon Project' },
        ],
        jawdaconsultant: [
            { href: './img/jawdaconsultant4.png', title: 'jawdaconsultant Project' },
            { href: './img/jawdaconsultant3.png', title: 'jawdaconsultant Project' },
            { href: './img/jawdaconsultant2.png', title: 'jawdaconsultant Project' },
            { href: './img/jawdaconsultant1.png', title: 'jawdaconsultant Project' },
        ],
        ugec: [
            { href: './img/ugec4.png', title: 'ugec Project' },
            { href: './img/ugec3.png', title: 'ugec Project' },
            { href: './img/ugec2.png', title: 'ugec Project' },
            { href: './img/ugec1.png', title: 'ugec Project' },
        ],
        noorcontrol: [
            { href: './img/noorcontrol7.png', title: 'noorcontrol Project' },
            { href: './img/noorcontrol6.png', title: 'noorcontrol Project' },
            { href: './img/noorcontrol5.png', title: 'noorcontrol Project' },
            { href: './img/noorcontrol4.png', title: 'noorcontrol Project' },
            { href: './img/noorcontrol3.png', title: 'noorcontrol Project' },
            { href: './img/noorcontrol2.png', title: 'noorcontrol Project' },
        ],
        asiaf: [
            { href: './img/asiaf5.png', title: 'asiaf Project' },
            { href: './img/asiaf4.png', title: 'asiaf Project' },
            { href: './img/asiaf3.png', title: 'asiaf Project' },
            { href: './img/asiaf2.png', title: 'asiaf Project' },
        ],
        citysquares: [
            { href: './img/citysquares7.png', title: 'citysquares Project' },
            { href: './img/citysquares6.png', title: 'citysquares Project' },
            { href: './img/citysquares5.png', title: 'citysquares Project' },
            { href: './img/citysquares4.png', title: 'citysquares Project' },
            { href: './img/citysquares3.png', title: 'citysquares Project' },
            { href: './img/citysquares2.png', title: 'citysquares Project' },
        ],
        ghulam: [
            { href: './img/ghulam1.png', title: 'ghulam Project', date: ' Nov 2023  ' },
            { href: './img/ghulam2.png', title: 'ghulam Project', date: ' Nov 2023  ' },
            { href: './img/ghulam3.png', title: 'ghulam Project', date: ' Nov 2023  ' },
            { href: './img/ghulam4.png', title: 'ghulam Project', date: ' Nov 2023  ' },
            { href: './img/ghulam5.png', title: 'ghulam Project', date: ' Nov 2023  ' },
            { href: './img/ghulam6.png', title: 'ghulam Project', date: ' Nov 2023  ' },
            { href: './img/ghulam7.png', title: 'ghulam Project', date: ' Nov 2023  ' },
            { href: './img/ghulam8.png', title: 'ghulam Project', date: ' Nov 2023  ' },
            { href: './img/ghulam9.png', title: 'ghulam Project', date: ' Nov 2023  ' },
        ],
        kfs_hiet: [
            { href: './img/kfs-hiet1.png', title: 'kfs-hiet Project', date: ' Nov 2023  ' },
            { href: './img/kfs-hiet2.png', title: 'kfs-hiet Project', date: ' Nov 2023  ' },
            { href: './img/kfs-hiet3.png', title: 'kfs-hiet Project', date: ' Nov 2023  ' },
            { href: './img/kfs-hiet4.png', title: 'kfs-hiet Project', date: ' Nov 2023  ' },
            { href: './img/kfs-hiet5.png', title: 'kfs-hiet Project', date: ' Nov 2023  ' },
            { href: './img/kfs-hiet6.png', title: 'kfs-hiet Project', date: ' Nov 2023  ' },
            { href: './img/kfs-hiet7.png', title: 'kfs-hiet Project', date: ' Nov 2023  ' },
            { href: './img/kfs-hiet8.png', title: 'kfs-hiet Project', date: ' Nov 2023  ' },
            { href: './img/kfs-hiet9.png', title: 'kfs-hiet Project', date: ' Nov 2023  ' },
            { href: './img/kfs-hiet10.png', title: 'kfs-hiet Project', date: ' Nov 2023  ' },
        ],
        whitesand: [
            { href: './img/whitesand1.png', title: 'whitesand Project' },
            { href: './img/whitesand2.png', title: 'whitesand Project', date: ' Nov 2023  ' },
            { href: './img/whitesand3.png', title: 'whitesand Project', date: ' Nov 2023  ' },
            { href: './img/whitesand4.png', title: 'whitesand Project', date: ' Nov 2023  ' },
            { href: './img/whitesand5.png', title: 'whitesand Project', date: ' Nov 2023  ' },
        ],


    };

    // Reusable render function for project grids
    const renderGrid = (category) =>
        projectCategories[category].map((item, index) => (
            <div className="d-none" key={`${category}-${index}`}>
                <figure>
                    <a data-fancybox={item.title} data-caption={item.title} href={item.href}>
                        <img
                            src={item.href}
                            alt={item.title}
                            title={item.title}
                            decoding="async"
                            className="img img-responsive"
                        />
                    </a>
                </figure>
            </div>
        ));

    return (
        <React.Fragment>
            <Helmet>
                <title>Portfolio | Mostafa Wahba </title>
            </Helmet>
            <section className="portfolio at-top">
                <div id="preloader" className="preloader off">
                    <div className="black_wall"></div>
                    <div className="loader"></div>
                </div>

                {/* Page Title */}
                <section className="title-section text-left text-sm-center">
                    <h1>
                        my <span>portfolio</span>
                    </h1>
                    <span className="title-bg">works</span>
                </section>

                {/* Main Content */}
                <section className="main-content text-center">
                    <div id="grid-gallery" className="container grid-gallery">
                        <section className="grid-wrap">
                            <ul className="row">
                                {projectCategories.Projects.map((project, index) => (
                                    <li className="col-sm-4 mb-2" key={`project-${index}`}>
                                        <figure>
                                            <div className="position-relative mb-2">
                                                <a
                                                    data-fancybox={project.title}
                                                    data-caption={project.title}
                                                    href={project.href}>
                                                    <div className="img-holder">
                                                        <img
                                                            src={project.href}
                                                            alt={project.title}
                                                            title={project.title}
                                                            decoding="async"
                                                            className="img img-responsive"
                                                        />
                                                        <span className="top"></span>
                                                        <span className="bottom"></span>
                                                        <span className="right"></span>
                                                        <span className="left"></span>
                                                    </div>
                                                    <div className="Project-title pt-2 pb-1">
                                                        <span>{project.title}</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="text-center">
                                                <a
                                                    href={project.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="button mb-2 rounded-lg w-100" >
                                                    <span className="button-text rounded">Visit Site</span>
                                                </a>
                                            </div>
                                        </figure>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </section>

                {/* Hidden Grids */}
                {Object.keys(projectCategories).map((category) =>
                    category !== "Projects" ? renderGrid(category) : null
                )}
            </section>
        </React.Fragment>
    );
}

export default Portfolio;
