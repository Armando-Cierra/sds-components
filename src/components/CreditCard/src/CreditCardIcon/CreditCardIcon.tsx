import React, { cloneElement, forwardRef } from 'react';
import type { CreditCardIconProps } from './types';

export const CreditCardIcon = forwardRef<HTMLDivElement, CreditCardIconProps>(
  ({ creditCard = 'generic', ...rest }: CreditCardIconProps, ref) => {
    const creditCardsIcons = {
      visa: () => (
        <svg
          width="36px"
          height="24px"
          viewBox="0 0 36 24"
          version="1.1"
          className="sds_creditCard_icon"
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <title>CreditCard–Visa</title>
          <g
            id="----Card-Number-Input-🗂"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Card-Number-Input-–-Interaction-–-Show-Brand"
              transform="translate(-340.000000, -94.000000)"
              fillRule="nonzero"
            >
              <g
                id="form-control/text-input/02.-label-+-helptext/01.-initial"
                transform="translate(128.000000, 64.000000)"
              >
                <g
                  id="CreditCard–Visa"
                  transform="translate(212.000000, 30.000000)"
                >
                  <rect
                    id="card_bg"
                    fill="#2A2A6C"
                    x="0"
                    y="0"
                    width="36"
                    height="24"
                    rx="4"
                  ></rect>
                  <path
                    d="M17.895,8.5425 L16.395,15.48 L14.595,15.48 L16.095,8.5425 L17.895,8.5425 Z M25.44,13.0425 L26.385,10.44 L26.9325,13.0425 L25.44,13.0425 Z M27.4425,15.5025 L29.1075,15.5025 L27.6525,8.565 L26.1525,8.565 C25.8224717,8.56801852 25.5266305,8.76919053 25.4025,9.075 L22.71,15.5025 L24.6,15.5025 L24.9675,14.4675 L27.225,14.4675 L27.4425,15.5025 Z M22.7625,13.2525 C22.77,11.385 20.25,11.25 20.25,10.5 C20.25,10.2525 20.49,9.99 21,9.9225 C21.6069739,9.8624469 22.2188463,9.96874677 22.77,10.23 L23.085,8.73 C22.5477121,8.52851844 21.9788201,8.42439088 21.405,8.4225 C19.635,8.4225 18.405,9.3675 18.405,10.7175 C18.405,11.715 19.2975,12.27 19.9725,12.6 C20.6475,12.93 20.91,13.1625 20.9025,13.4625 C20.9025,13.9275 20.3475,14.1375 19.83,14.145 C19.19164,14.1532182 18.5617505,13.9983273 18,13.695 L17.6775,15.195 C18.3131129,15.4431331 18.9901914,15.5678581 19.6725,15.5625 C21.555,15.5625 22.7925,14.6325 22.8,13.1925 M15.3675,8.51999295 L12.4575,15.4575 L10.5,15.4575 L9.0675,9.915 C9.04233332,9.6511951 8.8798188,9.42025341 8.64,9.3075 C8.07694891,9.03884141 7.48225357,8.84228956 6.87,8.7225 L6.915,8.51999295 L9.9675,8.51999295 C10.3806046,8.51831902 10.7336111,8.81726144 10.8,9.225 L11.55,13.2375 L13.4175,8.51999295 L15.3675,8.51999295 Z"
                    id="visa-logo"
                    fill="#FFFFFF"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      ),
      mastercard: () => (
        <svg
          width="36px"
          height="24px"
          className="sds_creditCard_icon"
          viewBox="0 0 36 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <title>CreditCard–Mastercard</title>
          <g
            id="----Card-Number-Input-🗂"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Card-Number-Input-–-Interaction-–-Show-Brand"
              transform="translate(-340.000000, -194.000000)"
              fillRule="nonzero"
            >
              <g
                id="form-control/text-input/02.-label-+-helptext/01.-initial"
                transform="translate(128.000000, 164.000000)"
              >
                <g
                  id="CreditCard–Mastercard"
                  transform="translate(212.000000, 30.000000)"
                >
                  <rect
                    id="card_bg"
                    fill="#DFE3E8"
                    x="0"
                    y="0"
                    width="36"
                    height="24"
                    rx="4"
                  ></rect>
                  <g id="mastercard" transform="translate(3.000000, 2.250000)">
                    <g id="Group" opacity="0" fill="#FFFFFF">
                      <rect
                        id="Rectangle"
                        x="0.4875"
                        y="0.15"
                        width="29.0325"
                        height="19.2"
                      ></rect>
                    </g>
                    <rect
                      id="Rectangle"
                      fill="#F26122"
                      x="11.175"
                      y="3.495"
                      width="7.6575"
                      height="12.51"
                    ></rect>
                    <path
                      d="M12,9.75 C11.9873514,7.31515072 13.0932803,5.00928892 15,3.495 C11.7376886,0.929471138 7.051461,1.30201505 4.23547049,4.35075442 C1.41947999,7.3994938 1.41947999,12.1005062 4.23547049,15.1492456 C7.051461,18.1979849 11.7376886,18.5705289 15,16.005 C13.0932803,14.4907111 11.9873514,12.1848493 12,9.75 Z"
                      id="Path"
                      fill="#EA1D25"
                    ></path>
                    <path
                      d="M27.155,14.78 L27.155,14.44 L27.305,14.44 L27.305,14.37 L26.955,14.37 L26.955,14.44 L27.095,14.44 L27.095,14.78 L27.155,14.78 Z M27.835,14.78 L27.835,14.37 L27.735,14.37 L27.615,14.66 L27.485,14.37 L27.385,14.37 L27.385,14.78 L27.455,14.78 L27.455,14.47 L27.575,14.74 L27.655,14.74 L27.765,14.47 L27.765,14.78 L27.835,14.78 Z"
                      id="Shape"
                      fill="#F69E1E"
                    ></path>
                    <path
                      d="M27.87,9.75 C27.8680401,12.7945082 26.1291383,15.5710486 23.3909003,16.9018705 C20.6526624,18.2326924 17.3950987,17.8845042 15,16.005 C18.4500427,13.2884675 19.0474898,8.29072211 16.335,4.8375 C15.9461629,4.33745255 15.4978613,3.88663236 15,3.495 C17.3950987,1.61549581 20.6526624,1.26730758 23.3909003,2.59812951 C26.1291383,3.92895144 27.8680401,6.70549181 27.87,9.75 L27.87,9.75 Z"
                      id="Path"
                      fill="#F69E1E"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      ),
      'american-express': () => (
        <svg
          width="36px"
          height="24px"
          className="sds_creditCard_icon"
          viewBox="0 0 36 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <title>CreditCard–Amex</title>
          <g
            id="----Card-Number-Input-🗂"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Card-Number-Input-–-Interaction-–-Show-Brand"
              transform="translate(-340.000000, -394.000000)"
              fillRule="nonzero"
            >
              <g
                id="form-control/text-input/02.-label-+-helptext/01.-initial"
                transform="translate(128.000000, 364.000000)"
              >
                <g
                  id="CreditCard–Amex"
                  transform="translate(212.000000, 30.000000)"
                >
                  <rect
                    id="Rectangle"
                    fill="#FFFFFF"
                    x="0"
                    y="0"
                    width="36"
                    height="24"
                    rx="4"
                  ></rect>
                  <g id="amex" fill="#296DB6">
                    <path
                      d="M6.66,13.425 L6.66,19.545 L12.855,19.545 L13.5,18.63 L14.13,19.545 L17.9175,19.545 L17.9175,18.165 L18.3375,18.165 C18.7187643,18.1683328 19.0982502,18.1126749 19.4625,18 L19.4625,19.545 L22.035,19.545 L22.035,18.45 L22.905,19.545 L34.62,19.545 C35.1015371,19.5534091 35.5753451,19.423242 35.985,19.17 L35.985,21.75 C35.6418234,23.0791686 34.4402438,24.0058367 33.0675,24.0000274 L3,24.0000274 C1.34314575,24.0000274 0,22.6568542 0,21 L0,11.55 L1.71,11.55 L2.0625,10.635 L2.9025,10.635 L3.2475,11.55 L17.0025,11.55 L17.0025,10.455 L17.8725,11.55 L21.48,11.55 L21.48,10.995 C22.0089949,11.3715456 22.6458801,11.5662956 23.295,11.55 L25.4475,11.55 L25.7925,10.635 L26.6325,10.635 L27,11.55 L30.675,11.55 L30.675,10.365 L31.425,11.55 L33.96,11.55 L33.96,5.43 L31.2675,5.43 L31.2675,6.675 L30.465,5.43 L28.11,5.43 L28.11,7.005 L27.36,5.43 L23.355,5.43 C22.677448,5.41036828 22.0142979,5.62788152 21.48,6.045 L21.48,5.43 L8.25,5.43 L7.8,6.75 L7.35,5.4 L4.35,5.4 L4.35,6.975 L3.645,5.4 L1.2,5.4 L0,8.25 L0,3 C0,1.34314575 1.34314575,-0.000129559551 3,-0.000129559551 L33.0675,-0.000129559551 C34.4458179,-0.012740522 35.6554647,0.915377217 36,2.25 L36,13.425 L14.145,13.425 L13.5,14.325 L12.87,13.425 L6.66,13.425 Z"
                      id="Path"
                    ></path>
                    <path
                      d="M11.0325,15.27 L11.0325,14.37 L7.635,14.37 L7.635,18.6 L11.0325,18.6 L11.0325,17.7 L8.655,17.7 L8.655,16.95 L10.9875,16.95 L10.9875,16.035 L8.655,16.035 L8.655,15.285 L11.0325,15.27 Z M14.1,16.5 L15.795,14.4 L14.55,14.4 L13.5,15.705 L12.4575,14.37 L11.1825,14.37 L12.9,16.5 L11.25,18.6 L12.48,18.6 L13.5,17.25 L14.52,18.615 L15.81,18.615 L14.1,16.5 Z M18.3225,14.4 L15.99,14.4 L15.99,18.6 L17.0175,18.6 L17.0175,17.205 L18.2925,17.205 C18.6855825,17.2347887 19.0729179,17.0968744 19.3587196,16.8253628 C19.6445213,16.5538511 19.8021047,16.1740926 19.7925,15.78 C19.8089441,15.3905698 19.6571993,15.0128602 19.3759043,14.7430466 C19.0946093,14.473233 18.7109074,14.337351 18.3225,14.37 L18.3225,14.4 Z M18.2325,16.335 L17.0175,16.335 L17.0175,15.27 L18.2325,15.27 C18.5183074,15.27 18.75,15.5016926 18.75,15.7875 C18.75,16.0733074 18.5183074,16.305 18.2325,16.305 L18.2325,16.335 Z M22.95,17.085 C23.6873001,16.9980151 24.2144848,16.3298001 24.1275,15.5925 C24.0405151,14.8551999 23.3723001,14.3280152 22.635,14.415 L20.34,14.415 L20.34,18.6 L21.36,18.6 L21.36,17.1 L21.825,17.1 L23.085,18.6 L24.3675,18.6 L22.95,17.085 Z M22.545,16.245 L21.36,16.245 L21.36,15.27 L22.545,15.27 C22.6783417,15.2526448 22.8126677,15.2938612 22.9133277,15.3830172 C23.0139876,15.4721731 23.0711247,15.6005383 23.07,15.735 C23.0737074,15.870289 23.0173241,16.0002766 22.9160103,16.0900116 C22.8146966,16.1797467 22.678851,16.2200189 22.545,16.2 L22.545,16.245 Z M28.02,15.315 L28.02,14.415 L24.6075,14.415 L24.6075,18.6 L28.02,18.6 L28.02,17.7 L25.6425,17.7 L25.6425,16.95 L27.96,16.95 L27.96,16.035 L25.6425,16.035 L25.6425,15.285 L28.02,15.315 Z M30.8475,16.065 L29.865,16.065 C29.7131442,16.0955226 29.5578709,16.0314493 29.4717309,15.9027181 C29.3855909,15.7739869 29.3855909,15.6060131 29.4717309,15.4772819 C29.5578709,15.3485507 29.7131442,15.2844774 29.865,15.315 L31.6875,15.315 L32.0925,14.415 L29.895,14.415 C29.5211048,14.371674 29.1467109,14.4918969 28.8679396,14.7448028 C28.5891684,14.9977086 28.4331717,15.3586648 28.44,15.735 C28.4172132,16.085181 28.5518021,16.4272772 28.8070876,16.6680578 C29.062373,16.9088384 29.4117487,17.0232088 29.76,16.98 L30.75,16.98 C30.9018558,16.9494774 31.0571291,17.0135507 31.1432691,17.1422819 C31.2294091,17.2710131 31.2294091,17.4389869 31.1432691,17.5677181 C31.0571291,17.6964493 30.9018558,17.7605226 30.75,17.73 L28.56,17.73 L28.56,18.63 L30.75,18.63 C31.1279556,18.6609063 31.5008066,18.5268289 31.7725237,18.2623001 C32.0442408,17.9977713 32.1882641,17.6286483 32.1675,17.25 C32.1864516,16.9033344 32.0494671,16.5663424 31.794022,16.3312168 C31.538577,16.0960913 31.1914109,15.9874446 30.8475,16.035 L30.8475,16.065 Z M33.7725,15.315 L35.595,15.315 L36,14.4 L36,14.4 L33.8025,14.4 C33.4286048,14.356674 33.0542109,14.4768969 32.7754396,14.7298028 C32.4966684,14.9827086 32.3406717,15.3436648 32.3475,15.72 C32.3247132,16.070181 32.4593021,16.4122772 32.7145876,16.6530578 C32.969873,16.8938384 33.3192487,17.0082088 33.6675,16.965 L34.635,16.965 C34.7868558,16.9344774 34.9421291,16.9985507 35.0282691,17.1272819 C35.1144091,17.2560131 35.1144091,17.4239869 35.0282691,17.5527181 C34.9421291,17.6814493 34.7868558,17.7455226 34.635,17.715 L32.4675,17.715 L32.4675,18.615 L34.62,18.615 C35.2249442,18.6751979 35.7934745,18.3167766 36,17.745 L36,16.74 C35.7838119,16.2653608 35.2888188,15.9816452 34.77,16.035 L33.75,16.035 C33.5981442,16.0655226 33.4428709,16.0014493 33.3567309,15.8727181 C33.2705909,15.7439869 33.2705909,15.5760131 33.3567309,15.4472819 C33.4428709,15.3185507 33.5981442,15.2544774 33.75,15.285 L33.7725,15.315 Z"
                      id="Shape"
                    ></path>
                    <path
                      d="M3.1725,6.375 L1.8375,6.375 L0,10.605 L1.11,10.605 L1.5,9.75 L3.4725,9.75 L3.8325,10.635 L4.9875,10.635 L3.1725,6.375 Z M1.785,8.895 L2.1975,7.905 L2.4675,7.245 L2.7375,7.905 L3.1425,8.895 L1.785,8.895 Z M8.775,6.375 L7.95,8.82 L7.815,9.285 L7.815,9.285 L7.68,8.82 L6.84,6.375 L5.1825,6.375 L5.1825,10.605 L6.18,10.605 L6.18,7.83 L6.18,7.185 L6.18,7.185 L6.39,7.83 L7.35,10.605 L8.25,10.605 L9.2325,7.83 L9.4275,7.185 L9.4275,7.185 L9.4275,7.83 L9.4275,10.605 L10.4175,10.605 L10.4175,6.375 L8.775,6.375 Z M14.625,7.275 L14.625,6.375 L11.25,6.375 L11.25,10.605 L14.625,10.605 L14.625,9.705 L12.2475,9.705 L12.2475,8.955 L14.565,8.955 L14.565,8.04 L12.2475,8.04 L12.2475,7.29 L14.625,7.275 Z M17.9325,9.045 C18.6039528,8.96404237 19.1039569,8.38611547 19.0875,7.71 C19.0929508,7.3245919 18.9306186,6.95584416 18.6426911,6.69958869 C18.3547636,6.44333321 17.9696735,6.32487517 17.5875,6.375 L15.3,6.375 L15.3,10.605 L16.3425,10.605 L16.3425,9.105 L16.8075,9.105 L18.0675,10.605 L19.3425,10.605 L17.9325,9.045 Z M17.5275,8.205 L16.3425,8.205 L16.3425,7.275 L17.5275,7.275 C17.6603348,7.26014229 17.7932476,7.30224054 17.8933063,7.39086389 C17.9933649,7.47948724 18.0512067,7.60634315 18.0525,7.74 C18.0562074,7.87528896 17.9998241,8.00527662 17.8985103,8.09501164 C17.7971966,8.18474667 17.661351,8.22501895 17.5275,8.205 L17.5275,8.205 Z M19.5825,6.375 L19.5825,10.605 L20.61,10.605 L20.61,6.375 L19.5825,6.375 Z M23.3325,7.29 L24.435,7.29 L24.435,6.375 L23.25,6.375 C22.6921726,6.33974097 22.1468376,6.55027567 21.7574181,6.95123345 C21.3679987,7.35219124 21.1734725,7.90343953 21.225,8.46 L21.225,8.52 C21.162338,9.06859893 21.3446715,9.61692715 21.7233771,10.0187597 C22.1020826,10.4205923 22.6386534,10.6350711 23.19,10.605 L23.25,10.605 L23.6625,9.705 L23.325,9.705 C23.0137389,9.72099771 22.7114568,9.59789003 22.4999356,9.36898354 C22.2884144,9.14007705 22.1895171,8.8290316 22.23,8.52 L22.23,8.46 C22.1943424,8.1533805 22.2954137,7.84660409 22.5063443,7.62122611 C22.717275,7.39584813 23.0166933,7.27470421 23.325,7.29 L23.3325,7.29 Z M26.9175,6.375 L25.5675,6.375 L23.7525,10.605 L24.8475,10.605 L25.2075,9.75 L27.21,9.75 L27.57,10.635 L28.725,10.635 L26.9175,6.375 Z M25.5375,8.895 L25.9275,7.905 L26.1975,7.245 L26.1975,7.245 L26.4525,7.905 L26.8575,8.895 L25.5375,8.895 Z M31.9575,6.375 L31.9575,8.625 L31.9575,9.135 L31.9575,9.135 L31.6725,8.655 L30.1725,6.405 L28.92,6.405 L28.92,10.635 L29.925,10.635 L29.925,8.25 L29.925,7.755 L29.925,7.755 L30.195,8.22 L31.7625,10.605 L33,10.605 L33,6.375 L31.9575,6.375 Z"
                      id="Shape"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      ),
      discover: () => (
        <svg
          width="36px"
          height="24px"
          className="sds_creditCard_icon"
          viewBox="0 0 36 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <title>CreditCard–Discover</title>
          <g
            id="----Card-Number-Input-🗂"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Card-Number-Input-–-Interaction-–-Show-Brand"
              transform="translate(-340.000000, -294.000000)"
              fillRule="nonzero"
            >
              <g
                id="form-control/text-input/02.-label-+-helptext/01.-initial"
                transform="translate(128.000000, 264.000000)"
              >
                <g
                  id="CreditCard–Discover"
                  transform="translate(212.000000, 30.000000)"
                >
                  <rect
                    id="card_bg"
                    fill="#FFFFFF"
                    x="0"
                    y="0"
                    width="36"
                    height="24"
                    rx="4"
                  ></rect>
                  <path
                    d="M33,1.5 C33.8284271,1.5 34.5,2.17157288 34.5,3 L34.5,21 C34.5,21.8284271 33.8284271,22.5 33,22.5 L3,22.5 C2.17157288,22.5 1.5,21.8284271 1.5,21 L1.5,3 C1.5,2.17157288 2.17157288,1.5 3,1.5 L33,1.5 Z M33,0 L3,0 C1.34314575,0 0,1.34314575 0,3 L0,21 C0,22.6568542 1.34314575,24 3,24 L33,24 C34.6568542,24 36,22.6568542 36,21 L36,3 C36,1.34314575 34.6568542,0 33,0 Z"
                    id="card_bg-2"
                    fill="#C2C1C0"
                  ></path>
                  <g id="discover" transform="translate(3.000000, 7.500000)">
                    <path
                      d="M31.5,5.79 L31.5,13.5 C31.5,14.3284271 30.8284271,15 30,15 L5.94,15 C22.5,12.165 31.5,5.79 31.5,5.79 Z"
                      id="Path"
                      fill="#EE7623"
                    ></path>
                    <path
                      d="M1.3725,0.48 L0,0.48 L0,5.2875 L1.3725,5.2875 C1.99324114,5.31600554 2.60332082,5.11886188 3.09,4.7325 C3.63544672,4.27473394 3.95106684,3.59958134 3.9525,2.8875 C3.96343789,2.21504606 3.6890596,1.56941902 3.19734604,1.11058166 C2.70563248,0.651744299 2.04259135,0.422628217 1.3725,0.48 Z M2.4675,4.0875 C2.11273268,4.39163303 1.65054647,4.54028941 1.185,4.5 L0.9375,4.5 L0.9375,1.2825 L1.185,1.2825 C1.64718041,1.23851113 2.10805146,1.37865905 2.4675,1.6725 C2.80716933,1.97886623 3.00073826,2.4150779 3.00001781,2.8725 C3.00215442,3.33454875 2.80870664,3.77593665 2.4675,4.0875 Z"
                      id="Shape"
                      fill="#231F20"
                    ></path>
                    <rect
                      id="Rectangle"
                      fill="#231F20"
                      x="4.3875"
                      y="0.4725"
                      width="1"
                      height="4.815"
                    ></rect>
                    <path
                      d="M7.6275,2.3175 C7.065,2.115 6.8775,1.9725 6.8775,1.7175 C6.8775,1.4625 7.17,1.1775 7.575,1.1775 C7.87044934,1.18990452 8.14516645,1.33275741 8.325,1.5675 L8.8125,0.93 C8.42764774,0.57825297 7.92385905,0.385312619 7.4025,0.39 C7.01836961,0.365359502 6.64086416,0.498832791 6.35758968,0.759445309 C6.07431521,1.02005783 5.9099003,1.38515127 5.9025,1.77 C5.9025,2.4375 6.2025,2.775 7.08,3.09 C7.30556307,3.16225852 7.52398676,3.25515135 7.7325,3.3675 C7.9092818,3.46956424 8.01798869,3.65837093 8.0175,3.8625 C8.0161366,4.05507939 7.93435178,4.23832578 7.79191547,4.36794283 C7.64947916,4.49755987 7.45935431,4.56175128 7.2675,4.545 C6.83011254,4.54975382 6.43071487,4.29719353 6.2475,3.9 L5.64,4.485 C5.99453185,5.08526729 6.65389421,5.43808399 7.35,5.4 C7.78289572,5.42959136 8.20828211,5.27578286 8.52215037,4.97618134 C8.83601862,4.67657982 9.00943556,4.25880332 9,3.825 C9,3.06 8.6925,2.7075 7.6275,2.3175 Z"
                      id="Path"
                      fill="#231F20"
                    ></path>
                    <path
                      d="M9.3075,2.88 C9.30126374,3.55348026 9.56811662,4.20076153 10.0471774,4.67416971 C10.5262382,5.14757788 11.1766412,5.40672937 11.85,5.3925 C12.2589786,5.39491682 12.6626394,5.29978655 13.0275,5.115 L13.0275,4.0125 C12.744202,4.34372281 12.3308459,4.53534486 11.895,4.5375 C11.4541296,4.54855741 11.0286431,4.37514434 10.7211032,4.05906172 C10.4135634,3.74297911 10.2518704,3.31290208 10.275,2.8725 C10.2608601,2.44367202 10.4198155,2.0271822 10.7160718,1.71681852 C11.012328,1.40645484 11.4209783,1.22831006 11.85,1.2225 C12.3019987,1.22430976 12.731215,1.4211478 13.0275,1.7625 L13.0275,0.66 C12.6740192,0.464049302 12.2766592,0.360838929 11.8725,0.36 C11.1975858,0.352000752 10.5473482,0.613486356 10.0658735,1.08651411 C9.58439883,1.55954187 9.31144645,2.20504996 9.3075,2.88 L9.3075,2.88 Z"
                      id="Path"
                      fill="#231F20"
                    ></path>
                    <polygon
                      id="Path"
                      fill="#231F20"
                      points="20.475 3.705 19.185 0.4725 18.165 0.4725 20.205 5.4075 20.7075 5.4075 22.7925 0.4725 21.7725 0.4725"
                    ></polygon>
                    <polygon
                      id="Path"
                      fill="#231F20"
                      points="23.2125 5.2875 25.8825 5.2875 25.8825 4.47 24.15 4.47 24.15 3.1725 25.815 3.1725 25.815 2.355 24.15 2.355 24.15 1.29 25.8825 1.29 25.8825 0.4725 23.2125 0.4725"
                    ></polygon>
                    <path
                      d="M28.5,3.2625 C29.168069,3.16228653 29.6456778,2.56363984 29.595,1.89 C29.595,0.9975 28.9725,0.48 27.8925,0.48 L26.505,0.48 L26.505,5.2875 L27.4425,5.2875 L27.4425,3.3525 L27.555,3.3525 L28.86,5.2875 L30,5.2875 L28.5,3.2625 Z M27.75,2.685 L27.4725,2.685 L27.4725,1.23 L27.75,1.23 C28.3275,1.23 28.6425,1.47 28.6425,1.98 C28.6425,2.49 28.3125,2.685 27.75,2.685 Z"
                      id="Shape"
                      fill="#231F20"
                    ></path>
                    <path
                      d="M18.4425,2.88 C18.4425,4.29246825 17.2974682,5.4375 15.885,5.4375 C14.4725318,5.4375 13.3275,4.29246825 13.3275,2.88 C13.3275,1.46753175 14.4725318,0.3225 15.885,0.3225 C17.2957586,0.326619029 18.438381,1.46924143 18.4425,2.88 L18.4425,2.88 Z"
                      id="Path"
                      fill="#EE7623"
                    ></path>
                    <path
                      d="M30.0725,0.765 C30.1433951,0.745792125 30.1899527,0.678071975 30.1825,0.605 C30.1825,0.495 30.1125,0.435 29.9725,0.435 L29.7825,0.435 L29.7825,1.015 L29.9125,1.015 L29.9125,0.775 L30.0925,1.015 L30.2425,1.015 L30.0725,0.765 Z M29.9525,0.685 L29.9525,0.685 L29.9525,0.545 L29.9525,0.545 C30.0125,0.545 30.0525,0.545 30.0525,0.605 C30.0525,0.665 30.0725,0.685 29.9725,0.685 L29.9525,0.685 Z"
                      id="Shape"
                      fill="#231F20"
                    ></path>
                    <path
                      d="M30.0749175,0.277731079 C29.9449819,0.280353915 29.8214141,0.334463735 29.7314113,0.428150993 C29.6414084,0.52183825 29.5923472,0.647424271 29.595026,0.777267631 C29.595026,1.05315405 29.818833,1.27680418 30.0949218,1.27680418 C30.3709928,1.27680418 30.5947998,1.05315405 30.5947998,0.777267631 C30.5978561,0.640341987 30.5433733,0.508398188 30.4445789,0.413470226 C30.3457846,0.318542263 30.211714,0.269311734 30.0749175,0.277731079 Z M30.3248609,1.06699883 C30.2613385,1.13798343 30.1702046,1.17805424 30.0749175,1.17689687 C29.9697507,1.17693143 29.8690293,1.13451175 29.7956124,1.05926508 C29.7221954,0.984018413 29.6823091,0.882326169 29.6850057,0.777267631 C29.6823207,0.671270043 29.7218998,0.568551209 29.7950295,0.491725201 C29.8681591,0.414899194 29.9688439,0.370264494 30.0749175,0.367647658 C30.1801421,0.370204635 30.2798626,0.415164853 30.3514118,0.492308527 C30.422961,0.5694522 30.4602603,0.672225619 30.4548315,0.777267631 C30.4559419,0.888180535 30.4084581,0.994031715 30.3248609,1.06699883 L30.3248609,1.06699883 Z"
                      id="Shape"
                      fill="#231F20"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      ),
      generic: () => (
        <svg
          width="36px"
          height="24px"
          className="sds_creditCard_icon"
          viewBox="0 0 36 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <g
            id="----Card-Number-Display-🚧"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="CreditCard–Empty">
              <rect
                id="card_bg"
                fill="#E0E0E2"
                fillRule="nonzero"
                x="0"
                y="0"
                width="36"
                height="24"
                rx="4"
              ></rect>
              <rect
                id="Rectangle"
                fill="#909099"
                x="4"
                y="4"
                width="5"
                height="4"
                rx="1"
              ></rect>
              <rect
                id="Rectangle"
                fill="#909099"
                x="4"
                y="14"
                width="28"
                height="3"
                rx="1"
              ></rect>
            </g>
          </g>
        </svg>
      ),
    };

    return cloneElement(creditCardsIcons[creditCard](), {
      'data-testid': 'sds_creditCard_icon',
      'data-type': creditCardsIcons[creditCard].name,
      ref: ref,
    });
  }
);

export default CreditCardIcon;
