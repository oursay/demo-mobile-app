import { createRecordPage, createRecordParams } from "../../create-record-page";

export const generateStaticParams = createRecordParams("statement");

export default createRecordPage("statement");
