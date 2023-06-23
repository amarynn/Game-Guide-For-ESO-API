const express = require('express')
const router = express.Router()

const Guides = require('../models/guides.js')

router.get('/', (req, res) => {
    Guides
        .findAll()
        .then(guides => res.json(guides))
})

router.get('/:id', (req, res) => {
    const guideId = req.params.id

    Guides
        .findById(guideId)
        .then(guides => res.json(guides))
})

router.get('/filtered/:className/:roleName', (req, res) => {
    let className = ""
    let roleName = ""
    if (req.params.className !== " ") {
        className = req.params.className
    }
    if (req.params.roleName !== " ") {
        roleName = req.params.roleName
    }
    Guides
        .findFiltered(className, roleName)
        .then(guides => res.json(guides))
})

router.post('/:id', (req, res) => {
    const guideId = req.params.id
    const likes = req.body.likes

    Guides
        .update(guideId, likes)
        .then(guides => res.json(guides))
})

router.post('/', (req, res) => {
    const guideTitle = req.body.guideTitle
    const className = req.body.className
    const roleName = req.body.roleName
    const guideDescription = req.body.guideDescription
    const characterRaceSuggestion = req.body.characterRaceSuggestion
    const headSetName = req.body.headSetName
    const headArmorWeight = req.body.headArmorWeight
    const headEnchantment = req.body.headEnchantment
    const headTrait = req.body.headTrait
    const headWhereToObtain = req.body.headWhereToObtain
    const shoulderSetName = req.body.shoulderSetName
    const shoulderArmorWeight = req.body.shoulderArmorWeight
    const shoulderEnchantment = req.body.shoulderEnchantment
    const shoulderTrait = req.body.shoulderTrait
    const shoulderWhereToObtain = req.body.shoulderWhereToObtain
    const bodySetName = req.body.bodySetName
    const bodyArmorWeight = req.body.bodyArmorWeight
    const bodyEnchantment = req.body.bodyEnchantment
    const bodyTrait = req.body.bodyTrait
    const bodyWhereToObtain = req.body.bodyWhereToObtain
    const handSetName = req.body.handSetName
    const handArmorWeight = req.body.handArmorWeight
    const handEnchantment = req.body.handEnchantment
    const handTrait = req.body.handTrait
    const handWhereToObtain = req.body.handWhereToObtain
    const beltSetName = req.body.beltSetName
    const beltArmorWeight = req.body.beltArmorWeight
    const beltEnchantment = req.body.beltEnchantment
    const beltTrait = req.body.beltTrait
    const beltWhereToObtain = req.body.beltWhereToObtain
    const legSetName = req.body.legSetName
    const legArmorWeight = req.body.legArmorWeight
    const legEnchantment = req.body.legEnchantment
    const legTrait = req.body.legTrait
    const legWhereToObtain = req.body.legWhereToObtain
    const bootsSetName = req.body.bootsSetName
    const bootsArmorWeight = req.body.bootsArmorWeight
    const bootsEnchantment = req.body.bootsEnchantment
    const bootsTrait = req.body.bootsTrait
    const bootsWhereToObtain = req.body.bootsWhereToObtain
    const necklaceSetName = req.body.necklaceSetName
    const necklaceEnchantment = req.body.necklaceEnchantment
    const necklaceTrait = req.body.necklaceTrait
    const necklaceWhereToObtain = req.body.necklaceWhereToObtain
    const ring1SetName = req.body.ring1SetName
    const ring1Enchantment = req.body.ring1Enchantment
    const ring1Trait = req.body.ring1Trait
    const ring1WhereToObtain = req.body.ring1WhereToObtain
    const ring2SetName = req.body.ring2SetName
    const ring2Enchantment = req.body.ring2Enchantment
    const ring2Trait = req.body.ring2Trait
    const ring2WhereToObtain = req.body.ring2WhereToObtain
    const primaryMainhandSetName = req.body.primaryMainhandSetName
    const primaryMainhandWeaponType = req.body.primaryMainhandWeaponType
    const primaryMainhandEnchantment = req.body.primaryMainhandEnchantment
    const primaryMainhandTrait = req.body.primaryMainhandTrait
    const primaryMainhandWhereToObtain = req.body.primaryMainhandWhereToObtain
    const primaryOffhandSetName = req.body.primaryOffhandSetName
    const primaryOffhandWeaponType = req.body.primaryOffhandWeaponType
    const primaryOffhandEnchantment = req.body.primaryOffhandEnchantment
    const primaryOffhandTrait = req.body.primaryOffhandTrait
    const primaryOffhandWhereToObtain = req.body.primaryOffhandWhereToObtain
    const secondaryMainhandSetName = req.body.secondaryMainhandSetName
    const secondaryMainhandWeaponType = req.body.secondaryMainhandWeaponType
    const secondaryMainhandEnchantment = req.body.secondaryMainhandEnchantment
    const secondaryMainhandTrait = req.body.secondaryMainhandTrait
    const secondaryMainhandWhereToObtain = req.body.secondaryMainhandWhereToObtain
    const secondaryOffhandSetName = req.body.secondaryOffhandSetName
    const secondaryOffhandWeaponType = req.body.secondaryOffhandWeaponType
    const secondaryOffhandEnchantment = req.body.secondaryOffhandEnchantment
    const secondaryOffhandTrait = req.body.secondaryOffhandTrait
    const secondaryOffhandWhereToObtain = req.body.secondaryOffhandWhereToObtain
    const skillPrimary1 = req.body.skillPrimary1
    const skillPrimary2 = req.body.skillPrimary2
    const skillPrimary3 = req.body.skillPrimary3
    const skillPrimary4 = req.body.skillPrimary4
    const skillPrimary5 = req.body.skillPrimary5
    const skillPrimaryUltimate = req.body.skillPrimaryUltimate
    const skillSecondary1 = req.body.skillSecondary1
    const skillSecondary2 = req.body.skillSecondary2
    const skillSecondary3 = req.body.skillSecondary3
    const skillSecondary4 = req.body.skillSecondary4
    const skillSecondary5 = req.body.skillSecondary5
    const skillSecondaryUltimate = req.body.skillSecondaryUltimate
    const attributesHealth = req.body.attributesHealth
    const attributesStamina = req.body.attributesStamina
    const attributesMagicka = req.body.attributesMagicka
    const cpBlueSlottable1 = req.body.cpBlueSlottable1
    const cpBlueSlottable2 = req.body.cpBlueSlottable2
    const cpBlueSlottable3 = req.body.cpBlueSlottable3
    const cpBlueSlottable4 = req.body.cpBlueSlottable4
    const cpBedSlottable1 = req.body.cpBedSlottable1
    const cpRedSlottable2 = req.body.cpRedSlottable2
    const cpRedSlottable3 = req.body.cpRedSlottable3
    const cpRedSlottable4 = req.body.cpRedSlottable4
    const cpGreenSlottable1 = req.body.cpGreenSlottable1
    const cpGreenSlottable2 = req.body.cpGreenSlottable2
    const cpGreenSlottable3 = req.body.cpGreenSlottable3
    const cpGreenSlottable4 = req.body.cpGreenSlottable4
    const consumableFood = req.body.consumableFood
    const consumablePotion = req.body.consumablePotion
    const mundusStone = req.body.mundusStone

    Guides
        .create(guideTitle,
            className,
            roleName,
            guideDescription,
            characterRaceSuggestion,
            headSetName,
            headArmorWeight,
            headEnchantment,
            headTrait,
            headWhereToObtain,
            shoulderSetName,
            shoulderArmorWeight,
            shoulderEnchantment,
            shoulderTrait,
            shoulderWhereToObtain,
            bodySetName,
            bodyArmorWeight,
            bodyEnchantment,
            bodyTrait,
            bodyWhereToObtain,
            handSetName,
            handArmorWeight,
            handEnchantment,
            handTrait,
            handWhereToObtain,
            beltSetName,
            beltArmorWeight,
            beltEnchantment,
            beltTrait,
            beltWhereToObtain,
            legSetName,
            legArmorWeight,
            legEnchantment,
            legTrait,
            legWhereToObtain,
            bootsSetName,
            bootsArmorWeight,
            bootsEnchantment,
            bootsTrait,
            bootsWhereToObtain,
            necklaceSetName,
            necklaceEnchantment,
            necklaceTrait,
            necklaceWhereToObtain,
            ring1SetName,
            ring1Enchantment,
            ring1Trait,
            ring1WhereToObtain,
            ring2SetName,
            ring2Enchantment,
            ring2Trait,
            ring2WhereToObtain,
            primaryMainhandSetName,
            primaryMainhandWeaponType,
            primaryMainhandEnchantment,
            primaryMainhandTrait,
            primaryMainhandWhereToObtain,
            primaryOffhandSetName,
            primaryOffhandWeaponType,
            primaryOffhandEnchantment,
            primaryOffhandTrait,
            primaryOffhandWhereToObtain,
            secondaryMainhandSetName,
            secondaryMainhandWeaponType,
            secondaryMainhandEnchantment,
            secondaryMainhandTrait,
            secondaryMainhandWhereToObtain,
            secondaryOffhandSetName,
            secondaryOffhandWeaponType,
            secondaryOffhandEnchantment,
            secondaryOffhandTrait,
            secondaryOffhandWhereToObtain,
            skillPrimary1,
            skillPrimary2,
            skillPrimary3,
            skillPrimary4,
            skillPrimary5,
            skillPrimaryUltimate,
            skillSecondary1,
            skillSecondary2,
            skillSecondary3,
            skillSecondary4,
            skillSecondary5,
            skillSecondaryUltimate,
            attributesHealth,
            attributesStamina,
            attributesMagicka,
            cpBlueSlottable1,
            cpBlueSlottable2,
            cpBlueSlottable3,
            cpBlueSlottable4,
            cpBedSlottable1,
            cpRedSlottable2,
            cpRedSlottable3,
            cpRedSlottable4,
            cpGreenSlottable1,
            cpGreenSlottable2,
            cpGreenSlottable3,
            cpGreenSlottable4,
            consumableFood,
            consumablePotion,
            mundusStone)
        .then(guides => res.json(guides))
})

module.exports = router