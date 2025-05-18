import { useEffect, useState, type SetStateAction } from 'react'
import axios from 'axios'

export const DropDown = () => {
    const [country, setCountry] = useState<{name:string, isoCode:string}[]>([]);
    const [option, setOption] = useState('NL')
    const [holidays, setHolidays] = useState('NL')
    const [holidayList, setHolidayList] = useState<{name:string, date:string}[]>([]);

    useEffect(() => {
        const fetchCountries = async () => {
            const result = await axios.get("https://openholidaysapi.org/Countries?languageIsoCode=EN").then(res => res.data);
            return result.map((data: { name: any[]; isoCode: any; },_: any) => (
                (data.name.map((data1: { text: any; },_: any) => (
                    setCountry(prev => [...prev, {name:data1.text, isoCode:data.isoCode}])
                )))
            ))
            console.log(country)
        };
        fetchCountries();
    }, []);

    const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setHolidays(e.target.value)
        setOption(e.target.value)
    }

    useEffect(() => {
        const fetchHoldiays = async () => {
            const res = await axios.get(`https://openholidaysapi.org/PublicHolidays?countryIsoCode=${holidays}&validFrom=2025-01-01&validTo=2025-12-31&languageIsoCode=EN`).then((res) => res.data);
            setHolidayList([])
            res.map((data: { name: any[]; startDate: any; }, _: any) => (
                (data.name.map((data1: { text: any; }, _: any) => (
                    setHolidayList(prev => [...prev, {name:data1.text,date:data.startDate}])
                )))
            ))
        }
        fetchHoldiays()
    }, [holidays])

  return (
    <div className='text-center p-20 w-full h-screen'>
        <select name="" id="" onChange={handleChange} value={option} className='border w-[40%] rounded bg-[#2E2E2E]'>
        {   
            country.map((data, index) => (
                <option key={index} value={data.isoCode}>{data.name}</option>
            ))
        }
        </select>
        <div className='px-[30%] text-left'>
            {
                holidayList.map((data, index) => (
                    <p key={index} className='p-1'>{data.date} : <strong>{data.name}</strong></p>
                ))
            }
        </div>
    </div>
  )
}
