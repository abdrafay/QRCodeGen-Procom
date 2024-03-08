"use client";
import { useEffect, useState } from "react";
import {
  Html5Qrcode,
  Html5QrcodeScanner,
  Html5QrcodeSupportedFormats,
  Html5QrcodeScanType,
} from "html5-qrcode";
import QRForm from "./qrform";

const Scan = () => {
    const [count, setCount] = useState<number>(0);
    const [formVals, setFormVals] = useState<any>([]);
    const [test, setTest] = useState<string>("0002020102120202000424PK57BAHL105100810202060205034500712300420242359100407AC")
    const [scanResult, setScanResult] = useState(null);
    useEffect(() => {
        const onScanSuccess = (decodedResult: any) => {
            scanner.clear();
            setScanResult(decodedResult);
        };
        
        let config = {
            fps: 10,
            qrbox: { width: 100, height: 100 },
            supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_FILE],
        };
        let scanner = new Html5QrcodeScanner("reader", config, /* verbose= */ false);
        scanner.render(onScanSuccess, (errorMessage: string) => {
            console.log(`Error = ${errorMessage}`);
        });
    },[])

    const extractField = (text:string, count: number) => {
        
        const field = {
            tag: text.slice(count, count + 2),
            length: parseInt(text.slice(count + 2, count + 4)),
            value: ''
        };
        field.value = text.slice(count + 4, count + 4 + field.length);
        return field
    };

    const extractDetails = (text:string) => {
        let count = 0
        const payloadFormat = extractField(text, count);
        count += 4+payloadFormat.length
        const payloadInitiation = extractField(text, count);
        count += 4+payloadInitiation.length
        const method = extractField(text, count);
        count += 4+method.length
        const bank = extractField(text, count);
        count += 4+bank.length
        const amount = extractField(text, count);
        count += 4+amount.length
        const expiry = extractField(text,count);
        count += 4+expiry.length
        const bankAcc = extractField(text,count);
        count += 4+bankAcc.length
        console.log(amount, bank, 'bank')
        setFormVals([amount.value, bank.value])
        
    };

    useEffect(() => {
        if (scanResult) {
            extractDetails(scanResult);
        }
        
    }, [scanResult]);

    // const extractDetails = (text:string) => {
    //     let count = 0
    //     let payloadFormat = {
    //         tag: '',
    //         length: 0,
    //         value: ''
    //     }
    //     let payloadInitiation = {
    //         tag: '',
    //         length: 0,
    //         value: ''
    //     }
    //     payloadFormat.tag = text.slice(0,2)
    //     payloadFormat.length = parseInt(text.slice(2,4))
    //     payloadFormat.value = text.slice(4,4+payloadFormat.length)
    //     count += 4+payloadFormat.length

    //     payloadInitiation.tag = text.slice(count,count + 2)
        
    //     payloadInitiation.length = parseInt(text.slice(count+2,count + 4))
    //     payloadInitiation.value = text.slice(count+4,count + 4+payloadInitiation.length)
    //     count+= 4+payloadInitiation.length

    //     let method = {
    //         tag: '',
    //         length: 0,
    //         value: ''
    //     }
    //     method.tag = text.slice(count,count+2)
    //     method.length = parseInt(text.slice(count+2,count+4))
    //     method.value = text.slice(count+4,count+4+method.length)
    //     console.log(method ,'method')
    //     count+= 4+method.length

    //     let bank = {
    //         tag: '',
    //         length: 0,
    //         value: ''
    //     }
    //     bank.tag = text.slice(count,count+2)
    //     bank.length = parseInt(text.slice(count+2,count+4))
    //     bank.value = text.slice(count+4,count+4+bank.length)
    //     console.log(bank ,'bank')
    //     count+= 4+bank.length
        
    //     let amount = {
    //         tag: '',
    //         length: 0,
    //         value: ''
    //     }
    //     amount.tag = text.slice(count,count+2)
    //     amount.length = parseInt(text.slice(count+2,count+4))
    //     amount.value = text.slice(count+4,count+4+amount.length)
    //     console.log(amount ,'amount')
    //     count+= 4+amount.length

    //     let year = {
    //         tag: '',
    //         length: 0,
    //         value: ''
    //     }
    //     year.tag = text.slice(count,count+2)
    //     year.length = parseInt(text.slice(count+2,count+4))
    //     year.value = text.slice(count+4,count+4+year.length)
    //     console.log(year ,'year')
    //     count+= 4+year.length

    //     let bankAcc = {
    //         tag: '',
    //         length: 0,
    //         value: ''
    //     }

    //     bankAcc.tag = text.slice(count,count+2)
    //     bankAcc.length = parseInt(text.slice(count+2,count+4))
    //     bankAcc.value = text.slice(count+4,count+4+bankAcc.length)
        
    //     console.log(bankAcc ,'bankAcc')
    //     count+= 4+bankAcc.length


        
        


    //     // let 
    //     console.log(payloadFormat, 'payload')
        
    // }
return <div>
    {scanResult ? (
    <QRForm bank={formVals[1]} amount={formVals[0]} />
    ) : <div id="reader"></div> }
    {/* {extractDetails(test)} */}
    
  </div>;
};

export default Scan;
