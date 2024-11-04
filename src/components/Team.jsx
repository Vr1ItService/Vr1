import React from 'react'
import { FaHome} from 'react-icons/fa';
import { FaYoutube, FaFacebook, FaInstagram, FaLinkedin, FaShareAlt } from 'react-icons/fa';
import teamimg1 from '../Images/Team/top1.jpg'
import teamimg2 from '../Images/Team/top2.jpg'
import teamimg3 from '../Images/Team/top3.jpg'
import teamimg4 from '../Images/Team/top4.jpg'
import teamimg5 from '../Images/Team/middle1.jpg'
import teamimg6 from '../Images/Team/middle2.jpg'
import teamimg7 from '../Images/Team/middle3.jpg'
import teamimg8 from '../Images/Team/middle4.jpg'
import teamimg9 from '../Images/Team/middle5.jpg'
import teamimg10 from '../Images/Team/middle6.jpg'

function Team() {
    return (
        <>
            <section id="center" className="center_team">
                <div className="center_om clearfix">
                    <div className="container">
                        <div className="row center_o1 text-center">
                            <div className="col-md-12">
                                <h1 className="text-white">Our Team</h1>
                                <h5 className="mb-0 mt-3 text-light"> <a href="index.html"><FaHome /></a><a href="team.html"><span className="span_1">/</span> <span className="color_1" style={{ color: '#fff' }}>Team</span>  </a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team
