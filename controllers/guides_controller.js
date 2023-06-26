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

router.post('/:id/:likes', (req, res) => {
    const guideId = req.params.id
    const likes = req.params.likes

    Guides
        .update(guideId, likes)
        .then(guides => res.json(guides))
})

router.post('/new', (req, res) => {
    const guideTitle = req.body.newguideTitle
    const className = req.body.newclassName
    const roleName = req.body.newroleName
    const guideDescription = req.body.newguideDescription
    const characterRaceSuggestion = req.body.newcharacterRaceSuggestion
    const headSetName = req.body.newheadSetName
    const headArmorWeight = req.body.newheadArmorWeight
    const headEnchantment = req.body.newheadEnchantment
    const headTrait = req.body.newheadTrait
    const headWhereToObtain = req.body.newheadWhereToObtain
    const shoulderSetName = req.body.newshoulderSetName
    const shoulderArmorWeight = req.body.newshoulderArmorWeight
    const shoulderEnchantment = req.body.newshoulderEnchantment
    const shoulderTrait = req.body.newshoulderTrait
    const shoulderWhereToObtain = req.body.newshoulderWhereToObtain
    const bodySetName = req.body.newbodySetName
    const bodyArmorWeight = req.body.newbodyArmorWeight
    const bodyEnchantment = req.body.newbodyEnchantment
    const bodyTrait = req.body.newbodyTrait
    const bodyWhereToObtain = req.body.newbodyWhereToObtain
    const handSetName = req.body.newhandSetName
    const handArmorWeight = req.body.newhandArmorWeight
    const handEnchantment = req.body.newhandEnchantment
    const handTrait = req.body.newhandTrait
    const handWhereToObtain = req.body.newhandWhereToObtain
    const beltSetName = req.body.newbeltSetName
    const beltArmorWeight = req.body.newbeltArmorWeight
    const beltEnchantment = req.body.newbeltEnchantment
    const beltTrait = req.body.newbeltTrait
    const beltWhereToObtain = req.body.newbeltWhereToObtain
    const legSetName = req.body.newlegSetName
    const legArmorWeight = req.body.newlegArmorWeight
    const legEnchantment = req.body.newlegEnchantment
    const legTrait = req.body.newlegTrait
    const legWhereToObtain = req.body.newlegWhereToObtain
    const bootsSetName = req.body.newbootsSetName
    const bootsArmorWeight = req.body.newbootsArmorWeight
    const bootsEnchantment = req.body.newbootsEnchantment
    const bootsTrait = req.body.newbootsTrait
    const bootsWhereToObtain = req.body.newbootsWhereToObtain
    const necklaceSetName = req.body.newnecklaceSetName
    const necklaceEnchantment = req.body.newnecklaceEnchantment
    const necklaceTrait = req.body.newnecklaceTrait
    const necklaceWhereToObtain = req.body.newnecklaceWhereToObtain
    const ring1SetName = req.body.newring1SetName
    const ring1Enchantment = req.body.newring1Enchantment
    const ring1Trait = req.body.newring1Trait
    const ring1WhereToObtain = req.body.newring1WhereToObtain
    const ring2SetName = req.body.newring2SetName
    const ring2Enchantment = req.body.newring2Enchantment
    const ring2Trait = req.body.newring2Trait
    const ring2WhereToObtain = req.body.newring2WhereToObtain
    const primaryMainhandSetName = req.body.newprimaryMainhandSetName
    const primaryMainhandWeaponType = req.body.newprimaryMainhandWeaponType
    const primaryMainhandEnchantment = req.body.newprimaryMainhandEnchantment
    const primaryMainhandTrait = req.body.newprimaryMainhandTrait
    const primaryMainhandWhereToObtain = req.body.newprimaryMainhandWhereToObtain
    const primaryOffhandSetName = req.body.newprimaryOffhandSetName
    const primaryOffhandWeaponType = req.body.newprimaryOffhandWeaponType
    const primaryOffhandEnchantment = req.body.newprimaryOffhandEnchantment
    const primaryOffhandTrait = req.body.newprimaryOffhandTrait
    const primaryOffhandWhereToObtain = req.body.newprimaryOffhandWhereToObtain
    const secondaryMainhandSetName = req.body.newsecondaryMainhandSetName
    const secondaryMainhandWeaponType = req.body.newsecondaryMainhandWeaponType
    const secondaryMainhandEnchantment = req.body.newsecondaryMainhandEnchantment
    const secondaryMainhandTrait = req.body.newsecondaryMainhandTrait
    const secondaryMainhandWhereToObtain = req.body.newsecondaryMainhandWhereToObtain
    const secondaryOffhandSetName = req.body.newsecondaryOffhandSetName
    const secondaryOffhandWeaponType = req.body.newsecondaryOffhandWeaponType
    const secondaryOffhandEnchantment = req.body.newsecondaryOffhandEnchantment
    const secondaryOffhandTrait = req.body.newsecondaryOffhandTrait
    const secondaryOffhandWhereToObtain = req.body.newsecondaryOffhandWhereToObtain
    const skillPrimary1 = req.body.newskillPrimary1
    const skillPrimary2 = req.body.newskillPrimary2
    const skillPrimary3 = req.body.newskillPrimary3
    const skillPrimary4 = req.body.newskillPrimary4
    const skillPrimary5 = req.body.newskillPrimary5
    const skillPrimaryUltimate = req.body.newskillPrimaryUltimate
    const skillSecondary1 = req.body.newskillSecondary1
    const skillSecondary2 = req.body.newskillSecondary2
    const skillSecondary3 = req.body.newskillSecondary3
    const skillSecondary4 = req.body.newskillSecondary4
    const skillSecondary5 = req.body.newskillSecondary5
    const skillSecondaryUltimate = req.body.newskillSecondaryUltimate
    const attributesHealth = req.body.newattributesHealth
    const attributesStamina = req.body.newattributesStamina
    const attributesMagicka = req.body.newattributesMagicka
    const cpBlueSlottable1 = req.body.newcpBlueSlottable1
    const cpBlueSlottable2 = req.body.newcpBlueSlottable2
    const cpBlueSlottable3 = req.body.newcpBlueSlottable3
    const cpBlueSlottable4 = req.body.newcpBlueSlottable4
    const cpBedSlottable1 = req.body.newcpBedSlottable1
    const cpRedSlottable2 = req.body.newcpRedSlottable2
    const cpRedSlottable3 = req.body.newcpRedSlottable3
    const cpRedSlottable4 = req.body.newcpRedSlottable4
    const cpGreenSlottable1 = req.body.newcpGreenSlottable1
    const cpGreenSlottable2 = req.body.newcpGreenSlottable2
    const cpGreenSlottable3 = req.body.newcpGreenSlottable3
    const cpGreenSlottable4 = req.body.newcpGreenSlottable4
    const consumableFood = req.body.newconsumableFood
    const consumablePotion = req.body.newconsumablePotion
    const mundusStone = req.body.newmundusStone

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