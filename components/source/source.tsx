import React from 'react';
import axios from "axios";

import Head from 'next/head';
import Link from 'next/link';
import { useCurrentUser } from '@hooks/index';

import source from './source.module.scss';

export default function Source({ children }) {

  return (
    <div className={source} >
      <div className="wrapper wrapper--narrow">

        <h2 className="headline">Jobs Post</h2>
        <div className="site-body site-body__margin-b">

          <table className="w--full">
            <tbody className="bg-white">
              <tr className={source.item}>

                <td className="px-6 py-4 whitespace-no-wrap  border-gray-200">
                  <div className="flex flex--items-center">

                    <div className="flex--shrink-0 w-10">
                      <img className="img__80w" src="https://remoteok.io/cdn-cgi/image/format=auto,fit=contain,width=100,height=100,quality=85/https://remoteOK.io/assets/jobs/3f13dbbc33fe53319cf0a7c991282b791619815146.png?1619815146" alt="Tobias Lins logo" />
                    </div>

                    <div className="ml-4">
                      <div className="headline headline__text">
                        <b>Freelance Consultant, System Architect</b>
                      </div>

                      <div className="headline headline__sml headline--dull">
                        Tobias Lins
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap  border-gray-200 hidden lg:table-cell">
                  <div className="text-sm leading-5 text-gray-800">Helping clients develop React &amp; Node applications</div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap  border-gray-200 text-gray-600 text-sm"><span className="">June 2019</span> -
                  <span className="font-bold">Now</span></td>
              </tr>



            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
};
