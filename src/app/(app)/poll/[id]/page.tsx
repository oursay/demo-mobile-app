import { createRecordPage, createRecordParams } from "../../create-record-page";

export const generateStaticParams = createRecordParams("poll");

export default createRecordPage("poll");
