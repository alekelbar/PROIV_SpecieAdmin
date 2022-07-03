import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

export const UpdateSpecieForm = ({ updateSpecie }) => {
  const specie = updateSpecie.content;
  const { SpeciesDrescription: desc } = specie;

  const validationSchema = Yup.object({
    desc: Yup.string()
      .required("Description is required")
      .min(5, "at least 5 chars to describe"),
  });

  return (
    <Formik
      initialValues={{ desc: desc }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const { desc } = values;
        const respond = {
          ...specie,
          SpeciesDrescription: desc,
        };

        const request = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(respond),
        };

        fetch("http://localhost:8000/species", request)
          .then((data) => data.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));

        window.location.replace("");
      }}
      enableReinitialize
    >
      {(props) => {
        return (
          <form onSubmit={props.handleSubmit}>
            <h2 className="text-2xl text-white mb-3">Update specie</h2>
            <input
              type="text"
              name="desc"
              className="block w-full px-4 py-2 text-sm bg-white text-black rounded"
              placeholder="Description"
              onChange={props.handleChange}
              value={props.values.desc}
            />

            {props.errors.desc ? (
              <div className="bg-red-500 rounded text-sm px-2 my-1">
                {props.errors.desc}
              </div>
            ) : null}

            <input
              type={"submit"}
              className="rounded p-2 text-xl bg-green-800 block w-full mt-1"
              value={"Update"}
            />
          </form>
        );
      }}
    </Formik>
  );
};
