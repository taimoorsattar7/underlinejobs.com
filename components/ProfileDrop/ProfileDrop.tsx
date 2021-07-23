import React, { useState } from 'react';
import './ProfileDrop.module.scss'
import Link from 'next/link';

const ProfileDrop = () => {
  // const [user] = useCurrentUser();

  const [drop, handledrop] = useState(false);

  return (
    <>
	<div>
		<ul className="list-unstyled">
			<li className="dropdown ml-2">

				<Link href="#">         

					<a className="rounded-circle "
						onClick={() => handledrop(!drop)}
						role="button"
						id="dropdownUser"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						
						<div className="avatar avatar-md avatar-indicators avatar-online">
							<img 
								alt="avatar"
								src="https://via.placeholder.com/40x40"
								className="circle" />
						</div>

					</a> 

				</Link>
				
				<div className={
					'dropdown-menu bg-white radius5 p-15' +
					(drop ? '' : ' active')
				}
					 aria-labelledby="dropdownUser">

					<div className="dropdown-item">
						<div className="d-flex py-2">
							<div className="ml-3 lh-1">
								<h5 className="headline headline__text">
									Taimoor Sattar</h5>
								<p className="headline headline__text headline--dull">
									taimoorsattar7@gmail.com</p>
							</div>

						</div>
						
					</div>
					<hr />
					<div className="">
						<ul className="nolist">
	
							<li>
								<Link href="/resume">
									<a  className="headline headline__text dropdown-item">
										Create your resume
									</a>
								</Link>
							</li>


							<li>
								<Link href="/">
									<a className="headline headline__text dropdown-item">
										Profile
									</a>
								</Link>
							</li>
							
						
						</ul>
					</div>
					<hr />
					<ul className="list-unstyled">
						<li>
							<a  className="dropdown-item headline headline__text"
								href="@@webRoot/index.html">
								+ 🏢 Create a company
							</a>
						</li>
				
					</ul>
					<hr />


					<ul className="list-unstyled">
						<li>
							<a  className="dropdown-item headline headline__text"
								href="@@webRoot/index.html">
								Sign Out
							</a>
						</li>
				
					</ul>
					
				</div>
						</li>
  </ul>
  
</div>
            

    </>
  );
};

export default ProfileDrop;
