import _ from "lodash";
const valid_phone = /\+1(\d{3})(\d{3})(\d{4})$/;
export const format_phone = phone => {
  if (phone_is_valid(phone))
    return phone.replace(valid_phone, "( $1 ) $2 - $3");
  return null;
};

export const phone_is_valid = _.memoize(phone => {
  if (!phone.match(valid_phone)) {
    console.error(
      `${ phone } isn't a valid phone number.\nOnly Canadian (+1 with 10 following numbers) numbers are allowed.`
    );
    return false;
  }
  return true;
});
