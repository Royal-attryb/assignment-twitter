import { InputField, FieldLabel, FieldGroup } from "@attrybtech/attryb-ui";
import { useState } from "react";

export default function TweetText ( {onInputChange} ) {

    const [value, setValue] = useState("");
    const maxChars = 160

    return (
        // <textarea className="tweet-text" rows="4" cols="50" maxlength="160">
        // </textarea>
        <FieldGroup name="sample-text-field">
            <FieldLabel
                name="nnnn"
                forFieldValue={value}
                maxCharsLimit={maxChars}>
            </FieldLabel>
            <InputField
                name="input-one"
                state={"default"}
                placeholder={"Enter your tweet..."}
                preFilledValue={value}
                maxCharsLimit={maxChars}
                onChange={(
                    event
                ) => {
                    const val = event?.target?.value
                    // console.log(val)
                    onInputChange(val)
                    setValue(val)
                }}
            />
        </FieldGroup>
    );
}

