import rest from '../../db/conection'


const getSpecies = async (req, res) => {
  const result = await rest.executeStoredProcedure('consultAllSpecies');
  res.json(result.data);
}

const getSpeciesById = async (req, res) => {
  const { SpecieId } = req.params;
  const result = await rest.executeStoredProcedure('consultSpecie', null, { SpecieId, })
  res.json(result.data);
}

const updateSpecie = async (req, res) => {
  const { SpeciesId, SpeciesDrescription: SpeciesDescription, SpeciesState } = req.body;

  const updated = {
    SpeciesId,
    SpeciesDescription,
    SpeciesState,
  };

  const result = await rest.executeStoredProcedure('updateSpecie', null, updated)

  res.json({
    update: result.success,
    new: { ...updated }
  });
}

const deleteSpecie = async (req, res) => {
  const { SpeciesId } = req.params;

  const result = await rest.executeStoredProcedure('removeSpecies', null, {
    SpeciesId,
  })

  res.json({
    delete: result.success,
    message: result.data
  });
}

const createSpecie = async (req, res) => {
  const { specie } = req.body;

  const result = await rest.executeStoredProcedure('insertSpecie', null, specie);

  res.json({
    create: result.success,
    error: result.error,
  })
}

export {
  getSpecies,
  getSpeciesById,
  updateSpecie,
  deleteSpecie,
  createSpecie
}