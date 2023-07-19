import { NextApiRequest, NextApiResponse } from 'next';
import XLSX from 'xlsx';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const workbook = XLSX.readFile('./public/belge.xlsx');
    const sheet_name_list = workbook.SheetNames;
    const jsonVerisi = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    
    res.status(200).json(jsonVerisi);
  } catch (error) {
    res.status(500).json({ error: console.log(error) });
  }
}

export default handler;
