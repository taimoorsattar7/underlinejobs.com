import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import { formatDate } from '@lib/formatDate'

export default function JobsListing(data: any) {

    const router = useRouter()
    const [jobsData, setJobsData] = useState([]);

    useEffect(() => {
        async function fetchUsersCompany() {
            await fetch(`/api/jobs`)
                .then(data => { return data.json(); })
                .then(readData => {
                    setJobsData(readData.jobs);
                })
            
        }
    
        fetchUsersCompany()
      }, [jobsData])

    function handleClick(e: any) {
        e.preventDefault();
        router.push(e.currentTarget.getAttribute("data-url"))
    }

    return (
        <div>
            <div className="wrapper wrapper--narrow">
                <table className="fullwidth">
                    <tbody className="bg-white">

                        {jobsData.map((data) => (
                            <tr onClick={handleClick}
                            data-url={`/j/${data.slug}`}
                            className="pointer m-t-10 m-b-10 m-l-10 m-r-10 whitespace-no-wrap border-gray-1 radius3">


                            <td>
                                <div className="flex flex--items-center flex--justify-end">

                                    {/* <div className="flex--grow-0 w-10">
                                        <img className="img__80w"
                                            src=""
                                            alt="" />
                                    </div> */}

                                    <div className="ml-4">
                                        <div className="headline headline__text">
                                            <b>{data.title}</b>
                                        </div>

                                        <div className="headline headline__sml headline--dull">

                                            {/* <b></b> {" "} */}
                                            <span>/</span> {" "}
                                            <span>{data.category}</span>

                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap  border-gray-200 hidden lg:table-cell">
                                <div className="headline headline__text headline--dull">
                                    <i>Helping clients develop React &amp; Node applications</i>
                                </div>
                            </td>

                            <td className="px-6 py-4 whitespace-no-wrap  border-gray-200 text-gray-600 text-sm">

                                <span className="headline headline__sml text-right block">
                                    <b>{formatDate(data.createdAt)}</b>
                                    </span>

                            </td>
                        </tr>
                        ))}

                    </tbody>
                </table>

            </div>

        </div>
    );
};
