import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const AddSpecieForm = ({}) => {
  const formik = useFormik({
    initialValues: {
      desc: "",
    },
    validationSchema: Yup.object({
      desc: Yup.string()
        .required("Description is required")
        .min(5, "at least 5 chars to describe"),
    }),
    onSubmit: async (values) => {
      const { desc } = values;

      console.log(values);

      const message = {
        specie: {
          SpeciesDescription: desc,
          SpeciesState: "A",
        },
      };

      const request = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message),
      };

      fetch("http://localhost:8000/species", request)
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
        });

      formik.values.desc = "";
      window.location.replace("");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full">
      <h2 className="text-2xl text-white mb-3">Add another specie</h2>
      <input
        type="text"
        name="desc"
        className="block w-full px-4 py-2 text-sm bg-white text-black rounded"
        placeholder="Description"
        onChange={formik.handleChange}
        value={formik.values.desc}
      />

      {formik.errors.desc ? (
        <div className="bg-red-500 rounded text-sm px-2 my-1">
          {formik.errors.desc}
        </div>
      ) : null}

      <input
        type={"submit"}
        className="rounded p-2 text-xl bg-green-800 block w-full mt-1"
        value={"Add"}
      />
    </form>
  );
};
