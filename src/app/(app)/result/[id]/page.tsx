import { createRecordPage, createRecordParams } from "../../create-record-page";

export const generateStaticParams = createRecordParams("result");

export default createRecordPage("result");
