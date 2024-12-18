import mtnLogo from '../../assets/MTN LOGO 2.svg';
// import Download from 'public/assets/Download icon.svg';
// import Print from 'public/assets/Print icon.svg';
import gloLogo from '../../assets/network/glo-log.png';
import airtelLogo from '../../assets/network/airtel-logo.png';
import etisalatLogo from '../../assets/network/9mobile-logo.jpg';
import { Button } from '@mui/material';
import logo from '../../assets/images/GBRAIN LOGO NEW1.png';
import { useRef } from 'react';
import moment from 'moment';
import { useLocation } from 'react-router';
import ReactToPrint from 'react-to-print';

const DATA = 'Corporate Gifting (CG)';
const AIRTIME = 'Airtime';
const WALLET = 'Wallet Funding';
const CABLE = 'Cable Tv';
const ELECTRICITY = 'Electricity';
const EXAM = 'Education Pin ';
const RecieptComponent = () => {
    const { state } = useLocation();
    const order = state?.order;
    const printRef = useRef();

    const returnImage = ({ order }) => {
        switch (order?.network?.trim().toLowerCase()) {
            case 'mtn':
                return mtnLogo;
            case 'glo':
                return gloLogo;
            case 'airtel':
                return airtelLogo;

            default:
                return etisalatLogo;
        }
    };
    const returnHeaderText = ({ order }) => {
        switch (order?.name) {
            case AIRTIME:
                return `${order?.network_provider?.network} Airtime`;
            case EXAM:
                return 'Exam Pin';
            case WALLET:
                return order?.name;
            case ELECTRICITY:
                return 'Electricity Bill';
            case CABLE:
                return `${order?.serviceID.toUpperCase()} ${order?.type}`;

            default:
                return order?.plan;
        }
    };
    if (!order) return <p>No Order</p>;
    return (
        <div className="w-[383px] mx-auto  py-10">
            <div ref={printRef} className=" w-[348px] bg-white shadow-md  rounded-[30px] p-[35px] m-auto ">
                <div className="flex flex-row justify-between items-center">
                    {(order?.name === AIRTIME || order?.name?.includes('Data') || order?.name === DATA) && (
                        <img height={52} width={52} src={returnImage({ order })} alt="product image" />
                    )}
                    <img height={52} width={52} src={logo} alt="logo" />
                </div>

                <h4 className="text-center font-bold text uppercase my-6 font text-[20px]">{returnHeaderText({ order })}</h4>
                <p className="text-center font-semibold text my-6 leading-5  font text-[16px]">
                    {order?.api_response || `${order?.status} transaction`}
                </p>
                <div className="bg-[#5e35b1] text-white text-center p-2 rounded-[10px]">
                    <p>Transaction Details</p>
                </div>
                <div className="grid grid-cols-2 gap-4 my-8">
                    {/* <div className="col-span-2 font-bold text-xl mb-2">Transaction Details</div> */}
                    {(order?.name === AIRTIME || order?.name === DATA || order?.name?.includes('Data')) && (
                        <>
                            <div className="col-span-1 font-normal text-[12px]">Phone Number</div>
                            <div className="col-span-1 text-right font-bold text-[12px]">{order?.beneficiary}</div>
                        </>
                    )}
                    {/* {order?.type === WALLET && (
            <>
              <div className="col-span-1 font-normal text-[12px]">User</div>
              <div className="col-span-1 text-right font-bold text-[12px]">{order?.email}</div>
            </>
          )} */}

                    <div className="col-span-1 font-normal text-[12px]">Transaction Type</div>
                    <div className="col-span-1 text-right font-bold text-[12px]">{returnHeaderText({ order })}</div>
                    {/* {order?.name === DATA ||
                        (order?.name === CG && (
                            <>
                                <div className="col-span-1 font-normal text-[12px]">Plan Size</div>
                                <div className="col-span-1 text-right font-bold text-[12px]">{order?.size_in_mb}MB</div>
                            </>
                        ))} */}
                    {order?.name === CABLE && (
                        <>
                            <div className="col-span-1 font-normal text-[12px]">Plan </div>
                            <div className="col-span-1 text-right font-bold text-[12px]">{order?.variation_code?.toUpperCase()}</div>
                        </>
                    )}
                    {(order?.name === CABLE || order?.name === ELECTRICITY) && (
                        <>
                            <div className="col-span-1 font-normal text-[12px]">Billers Code </div>
                            <div className="col-span-1 text-right font-bold text-[12px]">{order?.billersCode}</div>
                        </>
                    )}
                    <div className="col-span-1 font-normal text-[12px]">Status</div>
                    <div className="col-span-1 text-right font-bold text-[12px]">{order?.status}</div>
                    <div className="col-span-1 font-normal text-[12px]">Date & Time </div>
                    <div className="col-span-1 text-right font-bold text-[12px]">
                        {moment(order?.date || '2023-01-01T16:37:04.164Z').format('LLLL')}
                    </div>
                    {order?.name === ELECTRICITY && (
                        <>
                            <div className="col-span-1 font-normal text-[12px]">Purchased Token </div>
                            <div className="col-span-1 text-right font-bold text-[12px] " style={{ color: 'green' }}>
                                {order?.electricity}
                            </div>
                        </>
                    )}
                    {order?.name === EXAM && (
                        <>
                            <div className="col-span-1 font-normal text-[12px]">Purchased Pin </div>
                            <div className="col-span-1 text-right font-bold text-[12px] " style={{ color: 'green' }}>
                                {order?.exam_pin}
                            </div>
                        </>
                    )}
                    <div className="col-span-1 font-normal text-[12px]">Transaction ref </div>
                    <div className="col-span-1 text-right font-bold text-[12px]">{order?.ref} </div>

                    <div className="col-span-1 font-normal text-[12px]">Amount </div>
                    <div className="col-span-1 text-right font-bold text-[12px]">₦{order?.amount} </div>
                    <div className="col-span-1 font-normal text-[12px]">Previous Balance</div>
                    <div className="col-span-1 text-right font-bold text-[12px]">₦{order?.previous_balance}</div>
                    <div className="col-span-1 font-normal text-[12px]">New Balance</div>
                    <div className="col-span-1 text-right font-bold text-[12px]">₦{order?.current_balance}</div>
                    {/* Add more rows as needed */}
                </div>
            </div>
            <div className="flex flex-row items-center justify-center p-[35px]">
                <Button
                    onClick={async () => {
                        const content = printRef.current;
                        var element = content;
                        const html2pdf = require('html2pdf.js');
                        const res = await html2pdf()?.from(element)?.set({ filename: 'Gbrain.pdf' }).save();

                        // ?.then((pdfBlob) => {
                        //     console.log({ pdfBlob });
                        //     const blobUrl = URL.createObjectURL(pdfBlob);
                        //     navigator.share({
                        //         title: 'Gbrain Corporate Business Ventures',
                        //         url: blobUrl
                        //     });
                        // });
                    }}
                    // endIcon={<img height={18} width={18} src={Download} alt="download" />}
                    sx={{
                        marginTop: '10px',
                        width: '130px',
                        height: '47px',
                        fontWeight: 'normal',
                        fontSize: '14px'
                    }}
                    variant="outlined"
                    color="primary"
                >
                    Download
                </Button>
                {/* <ReactToPrint
                    trigger={() => (
                        <Button
                            // endIcon={<img height={18} width={18} src={Print} alt="print" />}
                            sx={{
                                marginTop: '10px',
                                width: '130px',
                                height: '47px',
                                fontWeight: 'normal',
                                fontSize: '14px'
                            }}
                            variant="outlined"
                            color="primary"
                        >
                            Print
                        </Button>
                    )}
                    content={() => printRef.current}
                /> */}
            </div>
        </div>
    );
};

export default RecieptComponent;
