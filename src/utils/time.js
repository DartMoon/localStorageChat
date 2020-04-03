import moment from "moment";

const toMessageSent = (date) => moment(date).format('LTS');

export {toMessageSent};