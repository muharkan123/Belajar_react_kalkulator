import React, { useEffect, useState } from "react";
import Button from "./button";

const Calc = () => {
    const [bilanganPertama, setBilper] = useState(null);
    const [bilanganKedua, setBildua] = useState(null);
    const [operator, setOperator] = useState(null);
    const [displayNumber, setdisplayNumber] = useState(null);
    const [result, setResult] = useState(null);

    const showNumber = () => {
        if(result){
            setdisplayNumber(result);
        } else if (!operator){
            setdisplayNumber(bilanganPertama);
        } else {
            setdisplayNumber(bilanganKedua);
        }
    }

    useEffect(() => {
        showNumber();
    }, [bilanganPertama, bilanganKedua]);

    const handleNumber = (val) => {
        setResult(null);
        if(!bilanganPertama && !operator){
            setBilper(val.toString());
        }else if (bilanganPertama && !operator){
            setBilper(bilanganPertama + val);
        }else if (!bilanganKedua){
            setBildua(val.toString());
        }else {
            setBildua(bilanganKedua + val);
        }
    }

    const handleOperator = (val) => {
        if(result){
            setBilper(result);
            setOperator(val);
        }

        if(bilanganPertama){
            setOperator(val);
        }
    }

    const handleClear = () => {
        setBilper(null);
        setBildua(null);
        setOperator(null);
        setdisplayNumber(0);
    }

    const handleResult = (val) => {
        let tempResult;
        switch (operator){
            case '+':
                tempResult = parseFloat(bilanganPertama) + parseFloat(bilanganKedua);
                setResult(tempResult.toString());
                handleClear();
                break;

            case '-':
                tempResult = parseFloat(bilanganPertama) - parseFloat(bilanganKedua);
                setResult(tempResult.toString());
                handleClear();
                break;

                case 'x':
                tempResult = parseFloat(bilanganPertama) * parseFloat(bilanganKedua);
                setResult(tempResult.toString());
                handleClear();
                break;

                case '/':
                tempResult = parseFloat(bilanganPertama) / parseFloat(bilanganKedua);
                setResult(tempResult.toString());
                handleClear();
                break;

            default : 
                break;
        }
    }

  return (
    <div className="w-[320px] h-[445px] bg-gray-800 text-white">
      <div className="h-[100px] w-[290px] flex items-center justify-end text-white">
        <span className="text-3xl">{displayNumber ? displayNumber : 0}</span>
      </div>
      <div className="flex flex-row flex-wrap h-[345px]">
     
        <Button val={1} clickAction={handleNumber}/>
        <Button val={2} clickAction={handleNumber}/>
        <Button val={3} clickAction={handleNumber}/>
        <Button val={"+"} operator={true} clickAction={handleOperator}/>

        <Button val={4} clickAction={handleNumber}/>
        <Button val={5} clickAction={handleNumber}/>
        <Button val={6} clickAction={handleNumber}/>
        <Button val={"-"} operator={true} clickAction={handleOperator}/>

        <Button val={7} clickAction={handleNumber}/>
        <Button val={8} clickAction={handleNumber}/>
        <Button val={9} clickAction={handleNumber}/>
        <Button val={"x"} operator={true} clickAction={handleOperator}/>

        <Button val={0} grow={true} clickAction={handleNumber}/>
        <Button val={"/"} operator={true} clickAction={handleOperator}/>

        <Button val={"C"} grow={true} clickAction={handleClear}/>
        <Button val={"="} grow={true} operator={true} clickAction={handleResult}/>
      </div>
    </div>
  );
};

export default Calc;
