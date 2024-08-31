import * as ExcelJS from 'exceljs'

export async function openExcel(buffer: unknown | null = null) {
  const workBook = new ExcelJS.Workbook()
  try {
    if (buffer) await workBook.xlsx.load(buffer as ExcelJS.Buffer)
  } catch (e) {
    console.log(e)
  }

  return workBook
}

export function getHeaderXls(wb: ExcelJS.Workbook, worksheeet: number = 0) {
  const worksheet = wb.worksheets[worksheeet]
  let header = (worksheet.getRow(1).values as string[]) ?? []
  header = header.map((v: string) => v ?? '')
  return { header }
}

export function getRows(
  wb: ExcelJS.Workbook,
  rowsRange = [1, 10],
  worksheeet = 0
) {
  const worksheet = wb.worksheets[worksheeet]
  const body = worksheet
    .getRows(rowsRange[0] + 1, rowsRange[1] + 1)
    ?.map((row) => row.values)
  return { body }
}
