import { createRecordPage, createRecordParams } from "../../create-record-page";

export const generateStaticParams = createRecordParams("petition");

export default createRecordPage("petition");
