// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 0;
switch (g) {
case 897:
case 2816:
case 1240:
case 1787:
case 477:
case 579:
case 483:
case 3024:
case 119:
case 436:
case 930:
case 1245:
case 376:
case 1712:
case 2602:
case 1611:
case 1070:
case 352:
case 3413:
case 3995:
case 2411:
case 2659:
case 1402:
case 826:
case 1713:
case 4035:
case 2552:
case 557:
case 154:
case 1075:
case 3601:
case 3288:
case 3029:
case 1147:
case 1291:
case 200:
case 1367:
case 3458:
case 338:
case 1837:
case 3337:
case 3477:
case 188:
case 1996:
case 687:
case 3941:
case 4071:
case 3754:
case 1454:
case 1597:
case 1031:
case 673:
case 772:
case 2310:
case 2942:
case 3246:
case 1279:
case 885:
case 3061:
case 2654:
case 2063:
case 290:
case 5:
case 1855:
case 3327:
case 3929:
case 318:
case 1069:
case 3137:
case 2697:
case 3355:
case 3797:
case 3614:
case 1497:
case 1949:
case 1347:
case 1850:
case 3976:
case 4046:
case 525:
case 2272:
case 3350:
case 754:
case 808:
case 3039:
case 2404:
case 2110:
case 3266:
case 1985:
case 639:
case 2043:
case 3041:
case 3608:
case 773:
case 1931:
case 2042:
case 719:
case 2708:
case 3558:
case 2115:
case 1618:
case 105:
case 27:
case 2719:
case 2282:
case 547:
case 1653:
case 144:
case 1064:
case 807:
case 416:
case 449:
case 2452:
case 3513:
case 2283:
case 172:
case 3034:
case 1298:
case 586:
case 1260:
case 3512:
case 1751:
case 795:
case 317:
case 3451:
case 605:
case 1356:
case 4057:
case 3856:
case 3068:
case 3948:
case 3095:
case 3294:
case 3921:
case 2923:
case 835:
case 2514:
case 676:
case 395:
case 2032:
case 1061:
case 2300:
case 3085:
case 3454:
case 3226:
case 2033:
case 789:
case 643:
case 3284:
case 3031:
case 637:
case 2815:
case 3049:
case 201:
case 3837:
case 1155:
case 4036:
case 388:
case 3996:
case 3147:
case 1288:
case 1867:
case 2293:
case 4:
case 3758:
case 2508:
case 3969:
case 1458:
case 1150:
case 3367:
case 3402:
case 1413:
case 638:
case 1995:
case 4060:
case 1048:
case 3274:
case 2519:
case 354:
case 2612:
case 3075:
case 1601:
case 1703:
case 3712:
case 3289:
case 1990:
case 2401:
case 2613:
case 319:
case 582:
case 1934:
case 980:
case 176:
case 346:
case 1278:
case 3044:
case 76:
case 3240:
case 931:
case 516:
case 433:
case 3787:
case 143:
case 373:
case 2316:
case 1257:
case 534:
case 1086:
case 549:
case 1948:
case 738:
case 2207:
case 1095:
case 1587:
case 3928:
case 1068:
case 3970:
case 1856:
case 4040:
case 413:
case 3652:
case 142:
case 2709:
case 911:
case 117:
case 4074:
case 432:
case 1235:
case 3260:
case 1512:
case 1451:
case 1619:
case 174:
case 2419:
case 344:
case 3653:
case 189:
case 4089:
case 479:
case 3502:
case 1513:
case 1230:
case 3265:
case 1299:
case 3980:
case 3236:
case 2408:
case 1961:
case 776:
case 674:
case 1577:
case 1041:
case 3985:
case 689:
case 3931:
case 737:
case 3347:
case 3850:
case 653:
case 3949:
case 3497:
case 1350:
case 2704:
case 3096:
case 578:
case 118:
case 1327:
case 3604:
case 3069:
case 3827:
case 1137:
case 1478:
case 2625:
case 3778:
case 1895:
case 3720:
case 3445:
case 1420:
case 1890:
case 97:
case 3368:
case 123:
case 2620:
case 3757:
case 1740:
case 3725:
case 1834:
case 635:
case 592:
case 496:
case 3565:
case 876:
case 1213:
case 3334:
case 3259:
case 3598:
case 2201:
case 837:
case 1364:
case 1535:
case 3203:
case 3489:
case 1789:
case 1277:
case 428:
case 1693:
case 445:
case 2822:
case 3161:
case 3536:
case 3491:
case 609:
case 1488:
case 1180:
case 799:
case 3937:
case 3339:
case 1446:
case 3050:
case 1396:
case 3479:
case 722:
case 398:
case 3896:
case 210:
case 1571:
case 1839:
case 964:
case 1369:
case 3254:
case 3027:
case 2646:
case 3880:
case 1380:
case 3584:
case 3673:
case 2010:
case 1861:
case 1471:
case 2362:
case 115:
case 2773:
case 1331:
case 3771:
case 2833:
case 1546:
case 709:
case 2015:
case 1121:
case 1588:
case 3950:
case 2593:
case 3591:
case 3037:
case 622:
case 3436:
case 3799:
case 460:
case 1499:
case 818:
case 1067:
case 1829:
case 1196:
case 3955:
case 3766:
case 3927:
case 3735:
case 1375:
case 3589:
case 1848:
case 2783:
case 3498:
case 3190:
case 122:
case 3348:
case 1798:
case 1481:
case 3465:
case 2681:
case 1765:
case 4003:
case 3683:
case 1956:
case 3870:
case 3195:
case 2782:
case 1494:
case 3540:
case 502:
case 1525:
case 2006:
case 3617:
case 2407:
case 1164:
case 817:
case 1520:
case 3324:
case 874:
case 3545:
case 3134:
case 2694:
case 1824:
case 889:
case 1578:
case 1886:
case 3726:
case 3784:
case 1055:
case 3369:
case 3967:
case 1484:
case 1176:
case 1027:
case 2572:
case 3779:
case 962:
case 1746:
case 626:
case 1479:
case 3446:
case 198:
case 1896:
case 1129:
case 3571:
case 2684:
case 2626:
case 707:
case 3692:
case 2132:
case 3841:
case 697:
case 2900:
case 2322:
case 3566:
case 3693:
case 3131:
case 3277:
case 335:
case 2133:
case 1821:
case 2792:
case 475:
case 2323:
case 3185:
case 197:
case 3144:
case 1259:
case 1598:
case 1489:
case 309:
case 3364:
case 1560:
case 3789:
case 3834:
case 1474:
case 1202:
case 3457:
case 3890:
case 2645:
case 323:
case 3175:
case 3425:
case 1148:
case 1440:
case 2517:
case 3170:
case 1778:
case 1395:
case 698:
case 1838:
case 3745:
case 708:
case 3420:
case 3128:
case 844:
case 4087:
case 1386:
case 3520:
case 403:
case 3886:
case 901:
case 3824:
case 3494:
case 872:
case 1794:
case 3164:
case 3138:
case 3430:
case 4012:
case 1683:
case 429:
case 1574:
case 1730:
case 856:
case 3765:
case 1828:
case 2482:
case 3956:
case 124:
case 2660:
case 2253:
case 4013:
case 1735:
case 3760:
case 3251:
case 3375:
case 1589:
case 1460:
case 1168:
case 1781:
case 2665:
case 1498:
case 1190:
case 3798:
case 2209:
case 3196:
case 2636:
case 280:
case 1766:
case 461:
case 3466:
case 4058:
case 1950:
case 3876:
case 3169:
case 1849:
case 1037:
case 1436:
case 1799:
case 3499:
case 4077:
case 1885:
case 3121:
case 3385:
case 2204:
case 1361:
case 2332:
case 528:
case 1880:
case 1673:
case 545:
case 2122:
case 2005:
case 805:
case 3861:
case 1141:
case 2863:
case 1767:
case 268:
case 1984:
case 2637:
case 3066:
case 2243:
case 3241:
case 1437:
case 438:
case 1979:
case 1377:
case 148:
case 757:
case 3099:
case 1221:
case 378:
case 1269:
case 3610:
case 2108:
case 1991:
case 3354:
case 2715:
case 2072:
case 1527:
case 1555:
case 4061:
case 686:
case 2710:
case 732:
case 505:
case 133:
case 2416:
case 147:
case 3268:
case 804:
case 758:
case 112:
case 2017:
case 4024:
case 4086:
case 1387:
case 443:
case 3094:
case 186:
case 2119:
case 970:
case 1974:
case 314:
case 896:
case 267:
case 1616:
case 3957:
case 1803:
case 3359:
case 99:
case 3303:
case 2082:
case 1859:
case 827:
case 359:
case 3978:
case 625:
case 1802:
case 3302:
case 1945:
case 648:
case 1098:
case 3920:
case 894:
case 474:
case 2319:
case 2852:
case 349:
case 573:
case 2917:
case 334:
case 1228:
case 442:
case 382:
case 519:
case 4034:
case 1351:
case 2853:
case 3851:
case 806:
case 417:
case 132:
case 3248:
case 546:
case 1187:
case 7:
case 1965:
case 4090:
case 3224:
case 3057:
case 1040:
case 4095:
case 453:
case 1244:
case 725:
case 951:
case 3159:
case 3935:
case 1112:
case 2101:
case 748:
case 2983:
case 3755:
case 2314:
case 2262:
case 1177:
case 1455:
case 1285:
case 3727:
case 1158:
case 2500:
case 3750:
case 2263:
case 657:
case 4039:
case 3999:
case 3397:
case 860:
case 1280:
case 4041:
case 2818:
case 3088:
case 2972:
case 3154:
case 595:
case 2308:
case 1978:
case 3802:
case 1081:
case 1234:
case 3313:
case 454:
case 3098:
case 1359:
case 1812:
case 1030:
case 3065:
case 1925:
case 1556:
case 542:
case 2152:
case 419:
case 136:
case 802:
case 517:
case 446:
case 2007:
case 940:
case 177:
case 1268:
case 1887:
case 487:
case 347:
case 1290:
case 312:
case 473:
case 3989:
case 1606:
case 893:
case 971:
case 3527:
case 782:
case 4080:
case 3296:
case 1615:
case 636:
case 1239:
case 2705:
case 614:
case 875:
case 2410:
case 2118:
case 677:
case 3854:
case 1071:
case 1610:
case 749:
case 3437:
case 325:
case 3979:
case 1877:
case 488:
case 2667:
case 3:
case 518:
case 3984:
case 3926:
case 1197:
case 1241:
case 682:
case 2808:
case 3249:
case 2092:
case 1154:
case 28:
case 616:
case 1971:
case 358:
case 1088:
case 3537:
case 783:
case 634:
case 538:
case 3897:
case 3079:
case 3158:
case 1046:
case 2232:
case 2515:
case 1750:
case 1261:
case 2510:
case 2233:
case 3177:
case 1755:
case 3427:
case 2656:
case 1078:
case 357:
case 3045:
case 965:
case 1981:
case 3965:
case 1930:
case 829:
case 1224:
case 1057:
case 1286:
case 2506:
case 3113:
case 1102:
case 2111:
case 892:
case 1994:
case 182:
case 3351:
case 269:
case 3275:
case 2353:
case 472:
case 2309:
case 1851:
case 2907:
case 4064:
case 543:
case 379:
case 3228:
case 149:
case 3421:
case 602:
case 2423:
case 328:
case 1721:
case 792:
case 2641:
case 3643:
case 345:
case 2892:
case 3171:
case 3237:
case 20:
case 2173:
case 515:
case 3388:
case 2422:
case 1576:
case 1623:
case 693:
case 1267:
case 3891:
case 3097:
case 1846:
case 2210:
case 3585:
case 878:
case 3496:
case 3826:
case 729:
case 3884:
case 4055:
case 2215:
case 1326:
case 3469:
case 1384:
case 920:
case 2668:
case 1586:
case 859:
case 1524:
case 3320:
case 1878:
case 2182:
case 1820:
case 3378:
case 522:
case 2690:
case 1165:
case 3325:
case 1857:
case 1340:
case 1912:
case 3357:
case 2695:
case 1160:
case 3959:
case 761:
case 3570:
case 1374:
case 836:
case 1434:
case 1051:
case 396:
case 3528:
case 497:
case 1389:
case 3575:
case 877:
case 2634:
case 1548:
case 3194:
case 1140:
case 1398:
case 1881:
case 91:
case 3475:
case 1775:
case 3335:
case 3564:
case 1012:
case 129:
case 2001:
case 3003:
case 3120:
case 1728:
case 3865:
case 523:
case 2648:
case 3470:
case 424:
case 2624:
case 2686:
case 1568:
case 882:
case 3444:
case 1590:
case 968:
case 407:
case 1256:
case 394:
case 849:
case 1595:
case 1247:
case 535:
case 702:
case 3188:
case 29:
case 3250:
case 3761:
case 2763:
case 2372:
case 3596:
case 2661:
case 1785:
case 3054:
case 1871:
case 3485:
case 2762:
case 3431:
case 603:
case 2433:
case 3776:
case 1749:
case 3997:
case 3449:
case 1541:
case 967:
case 629:
case 1429:
case 3366:
case 270:
case 355:
case 1179:
case 1866:
case 2676:
case 1464:
case 3389:
case 3764:
case 833:
case 393:
case 409:
case 812:
case 3374:
case 1734:
case 2664:
case 1874:
case 886:
case 1528:
case 1325:
case 1181:
case 3198:
case 3490:
case 2638:
case 3340:
case 3160:
case 3468:
case 2216:
case 1357:
case 1768:
case 3913:
case 2911:
case 3345:
case 1795:
case 3524:
case 1320:
case 3878:
case 3738:
case 1438:
case 1845:
case 1884:
case 1826:
case 2563:
case 3769:
case 1580:
case 2562:
case 3846:
case 1879:
case 1531:
case 2205:
case 2669:
case 1585:
case 3439:
case 3796:
case 1346:
case 4047:
case 1496:
case 1739:
case 2722:
case 2443:
case 3391:
case 3888:
case 3267:
case 3576:
case 1891:
case 1421:
case 435:
case 2392:
case 2723:
case 128:
case 2442:
case 145:
case 3529:
case 1237:
case 696:
case 3622:
case 1171:
case 1729:
case 3429:
case 1366:
case 727:
case 3058:
case 1146:
case 3179:
case 3866:
case 361:
case 1521:
case 2649:
case 1776:
case 1449:
case 598:
case 3899:
case 2543:
case 415:
case 1227:
case 2918:
case 858:
case 1596:
case 1663:
case 3632:
case 3539:
case 2733:
case 1371:
case 1431:
case 1480:
case 3780:
case 2193:
case 2463:
case 606:
case 2732:
case 796:
case 1250:
case 2685:
case 2644:
case 884:
case 3087:
case 2817:
case 3486:
case 2952:
case 1786:
case 2909:
case 813:
case 3894:
case 728:
case 3189:
case 392:
case 1394:
case 3951:
case 1003:
case 3012:
case 3830:
case 3728:
case 3534:
case 1330:
case 1470:
case 1059:
case 1860:
case 3140:
case 3448:
case 1002:
case 2011:
case 1381:
case 660:
case 3881:
case 3775:
case 3360:
case 1814:
case 2727:
case 3650:
case 55:
case 1510:
case 3314:
case 3505:
case 2755:
case 2397:
case 2999:
case 1515:
case 3500:
case 1304:
case 2046:
case 501:
case 320:
case 1093:
case 1318:
case 2088:
case 2229:
case 2971:
case 3308:
case 18:
case 2567:
case 121:
case 1092:
case 3972:
case 4042:
case 1808:
case 33:
case 3917:
case 3852:
case 3319:
case 1352:
case 68:
case 2248:
case 621:
case 2851:
case 3809:
case 2994:
case 1111:
case 2102:
case 2057:
case 2224:
case 2286:
case 945:
case 2930:
case 3983:
case 3101:
case 2103:
case 2159:
case 283:
case 562:
case 2290:
case 3017:
case 2887:
case 960:
case 466:
case 2295:
case 1007:
case 214:
case 721:
case 3119:
case 2556:
case 1152:
case 1406:
case 3301:
case 2303:
case 2925:
case 2030:
case 2812:
case 1801:
case 2234:
case 1311:
case 3083:
case 2813:
case 3811:
case 2978:
case 259:
case 2035:
case 2241:
case 2197:
case 2858:
case 2467:
case 1104:
case 1223:
case 1667:
case 2099:
case 3242:
case 994:
case 2737:
case 3715:
case 1700:
case 2354:
case 1415:
case 3400:
case 2071:
case 3073:
case 1992:
case 1118:
case 3405:
case 54:
case 4063:
case 769:
case 3072:
case 2615:
case 1516:
case 2998:
case 2112:
case 2244:
case 2960:
case 3656:
case 3111:
case 2756:
case 2040:
case 1982:
case 2074:
case 232:
case 2187:
case 213:
case 2275:
case 2351:
case 63:
case 1917:
case 279:
case 71:
case 3352:
case 3819:
case 767:
case 38:
case 321:
case 2249:
case 1972:
case 3808:
case 4023:
case 13:
case 3093:
case 120:
case 2091:
case 3318:
case 258:
case 1973:
case 2280:
case 2747:
case 1804:
case 2936:
case 1500:
case 3515:
case 871:
case 993:
case 491:
case 2158:
case 2450:
case 2897:
case 2427:
case 1650:
case 2455:
case 3647:
case 1505:
case 2231:
case 2177:
case 3510:
case 1405:
case 57:
case 3992:
case 3410:
case 3118:
case 2555:
case 4032:
case 3705:
case 850:
case 1710:
case 2527:
case 4033:
case 2550:
case 1400:
case 2991:
case 2605:
case 2269:
case 2221:
case 3223:
case 248:
case 1114:
case 401:
case 2377:
case 2437:
case 1243:
case 3222:
case 992:
case 2984:
case 590:
case 3104:
case 45:
case 168:
case 2:
case 2767:
case 2945:
case 3311:
case 2313:
case 2802:
case 1811:
case 2060:
case 2940:
case 2264:
case 1301:
case 2859:
case 2065:
case 2616:
case 3007:
case 167:
case 1119:
case 286:
case 2974:
case 3152:
case 961:
case 3406:
case 720:
case 2989:
case 212:
case 247:
case 1416:
case 3153:
case 3372:
case 1732:
case 1685:
case 2250:
case 1193:
case 83:
case 1631:
case 2662:
case 3908:
case 2480:
case 2569:
case 959:
case 2431:
case 2255:
case 1680:
case 1873:
case 2485:
case 2054:
case 977:
case 1543:
case 3522:
case 260:
case 2997:
case 2449:
case 481:
case 341:
case 2399:
case 2776:
case 42:
case 3676:
case 1649:
case 2146:
case 1542:
case 2366:
case 2729:
case 2335:
case 2475:
case 1883:
case 1628:
case 3383:
case 2125:
case 2002:
case 2748:
case 2178:
case 2470:
case 2120:
case 2428:
case 3382:
case 1675:
case 206:
case 2444:
case 3686:
case 1909:
case 4006:
case 1307:
case 2786:
case 1817:
case 294:
case 3919:
case 765:
case 2538:
case 3206:
case 3690:
case 2320:
case 771:
case 3695:
case 2357:
case 3901:
case 2544:
case 2903:
case 2325:
case 2181:
case 740:
case 296:
case 650:
case 867:
case 1664:
case 3117:
case 2889:
case 665:
case 2464:
case 204:
case 150:
case 245:
case 2643:
case 3423:
case 3742:
case 2421:
case 3893:
case 1621:
case 351:
case 2388:
case 3743:
case 2954:
case 1393:
case 81:
case 1443:
case 2346:
case 916:
case 2739:
case 2496:
case 1004:
case 1669:
case 3210:
case 2097:
case 934:
case 2531:
case 2166:
case 2469:
case 3215:
case 1563:
case 3532:
case 1696:
case 580:
case 1200:
case 2884:
case 2199:
case 2595:
case 203:
case 3817:
case 1919:
case 2174:
case 2256:
case 70:
case 3953:
case 2951:
case 2590:
case 292:
case 3307:
case 1686:
case 3882:
case 2534:
case 670:
case 2830:
case 2360:
case 2775:
case 3883:
case 2013:
case 3670:
case 3011:
case 2448:
case 1676:
case 2179:
case 2866:
case 1914:
case 986:
case 170:
case 480:
case 340:
case 3543:
case 510:
case 1629:
case 933:
case 2126:
case 431:
case 1522:
case 947:
case 2476:
case 3680:
case 1762:
case 1373:
case 2871:
case 2632:
case 3918:
case 1661:
case 3192:
case 1372:
case 1763:
case 4005:
case 2461:
case 1432:
case 3463:
case 1908:
case 3193:
case 3631:
case 2780:
case 2958:
case 2384:
case 530:
case 2769:
case 913:
case 2136:
case 3563:
case 2379:
case 984:
case 2977:
case 2439:
case 979:
case 3669:
case 52:
case 3205:
case 581:
case 3562:
case 1893:
case 2576:
case 2267:
case 3621:
case 1172:
case 1743:
case 1422:
case 2391:
case 2441:
case 2622:
case 10:
case 275:
case 1641:
case 2529:
case 1892:
case 2721:
case 3392:
case 3723:
case 1742:
case 1008:
case 1634:
case 2548:
case 3052:
case 651:
case 2987:
case 79:
case 3009:
case 2825:
case 1695:
case 2160:
case 770:
case 3638:
case 2490:
case 2165:
case 1182:
case 741:
case 2345:
case 1668:
case 3911:
case 2913:
case 1752:
case 3106:
case 1651:
case 1419:
case 3719:
case 274:
case 364:
case 3453:
case 1753:
case 217:
case 2235:
case 64:
case 1501:
case 242:
case 1709:
case 2034:
case 2281:
case 3283:
case 3409:
case 2856:
case 75:
case 985:
case 3217:
case 2587:
case 253:
case 691:
case 701:
case 3273:
case 1414:
case 2327:
case 3404:
case 2039:
case 2350:
case 997:
case 2976:
case 1933:
case 2608:
case 2041:
case 3043:
case 1718:
case 1105:
case 3418:
case 26:
case 37:
case 2961:
case 1932:
case 3963:
case 1023:
case 1100:
case 43:
case 3115:
case 3708:
case 2150:
case 1508:
case 1677:
case 15:
case 468:
case 1293:
case 2867:
case 2029:
case 2288:
case 907:
case 3518:
case 2155:
case 238:
case 2127:
case 3800:
case 1815:
case 4073:
case 3504:
case 1300:
case 3805:
case 521:
case 3942:
case 4072:
case 924:
case 1514:
case 663:
case 2024:
case 1316:
case 908:
case 2487:
case 1687:
case 74:
case 467:
case 569:
case 2934:
case 2220:
case 3509:
case 2968:
case 3602:
case 2412:
case 65:
case 2990:
case 1401:
case 3553:
case 3701:
case 2551:
case 2601:
case 3603:
case 2702:
case 3659:
case 601:
case 3411:
case 2413:
case 664:
case 4092:
case 1963:
case 3932:
case 2618:
case 2021:
case 1115:
case 3100:
case 2236:
case 1708:
case 3933:
case 2931:
case 4093:
case 51:
case 766:
case 3105:
case 3022:
case 2167:
case 2497:
case 2949:
case 909:
case 2347:
case 2604:
case 190:
case 2855:
case 568:
case 880:
case 3207:
case 700:
case 2928:
case 1217:
case 2356:
case 690:
case 67:
case 1453:
case 164:
case 2260:
case 3501:
case 3116:
case 2503:
case 2944:
case 2559:
case 1283:
case 1106:
case 1511:
case 244:
case 1282:
case 2064:
case 2075:
case 3612:
case 3519:
case 2713:
case 2156:
case 3711:
case 2402:
case 1411:
case 1509:
case 2611:
case 2459:
case 1602:
case 3613:
case 2070:
case 600:
case 3401:
case 2289:
case 2403:
case 2712:
case 790:
case 2044:
case 4007:
case 2245:
case 363:
case 3316:
case 2787:
case 2964:
case 287:
case 2240:
case 1654:
case 3032:
case 295:
case 1805:
case 2279:
case 3305:
case 1942:
case 2080:
case 3923:
case 53:
case 2921:
case 1800:
case 2284:
case 1062:
case 3033:
case 2226:
case 1518:
case 288:
case 3292:
case 999:
case 2049:
case 2367:
case 2969:
case 3508:
case 2758:
case 3677:
case 2147:
case 2875:
case 3630:
case 3783:
case 2589:
case 2460:
case 2168:
case 2682:
case 1253:
case 2735:
case 1660:
case 3782:
case 2195:
case 711:
case 1482:
case 4001:
case 2730:
case 2574:
case 1698:
case 1707:
case 2844:
case 2617:
case 3006:
case 2540:
case 938:
case 3694:
case 2545:
case 2386:
case 3143:
case 49:
case 2141:
case 3832:
case 1863:
case 2673:
case 3671:
case 2297:
case 1122:
case 1005:
case 2880:
case 952:
case 2361:
case 1204:
case 3772:
case 3015:
case 1000:
case 2831:
case 1862:
case 3773:
case 1333:
case 3362:
case 3214:
case 565:
case 131:
case 2376:
case 208:
case 3208:
case 2436:
case 32:
case 3666:
case 441:
case 2849:
case 2766:
case 330:
case 890:
case 3699:
case 976:
case 1636:
case 470:
case 1905:
case 3492:
case 3910:
case 1792:
case 4008:
case 1691:
case 3162:
case 451:
case 1793:
case 2788:
case 3493:
case 1843:
case 3822:
case 974:
case 1684:
case 1626:
case 1573:
case 2129:
case 2050:
case 2339:
case 2746:
case 571:
case 3646:
case 2027:
case 4014:
case 2254:
case 111:
case 2426:
case 917:
case 540:
case 800:
case 731:
case 2720:
case 2838:
case 226:
case 2440:
case 2148:
case 2390:
case 3678:
case 2757:
case 780:
case 2202:
case 1211:
case 2334:
case 918:
case 2186:
case 2124:
case 1582:
case 1689:
case 2203:
case 2560:
case 3201:
case 4019:
case 2864:
case 3218:
case 380:
case 3636:
case 1592:
case 2196:
case 2067:
case 2829:
case 987:
case 331:
case 1208:
case 12:
case 2588:
case 891:
case 3000:
case 2121:
case 1015:
case 551:
case 3862:
case 2546:
case 1773:
case 1214:
case 3333:
case 3863:
case 2861:
case 50:
case 1143:
case 2380:
case 1671:
case 3122:
case 1010:
case 3472:
case 1363:
case 3332:
case 1772:
case 3417:
case 1717:
case 1694:
case 988:
case 2520:
case 2164:
case 3707:
case 2494:
case 2344:
case 1635:
case 2328:
case 3482:
case 2956:
case 2370:
case 3252:
case 995:
case 2138:
case 3483:
case 2798:
case 3209:
case 1783:
case 222:
case 3665:
case 2435:
case 2375:
case 681:
case 3253:
case 2789:
case 2212:
case 4052:
case 2144:
case 3674:
case 2581:
case 4053:
case 2530:
case 2213:
case 3582:
case 2834:
case 4009:
case 2287:
case 2868:
case 2056:
case 2740:
case 730:
case 1678:
case 2175:
case 1620:
case 223:
case 1507:
case 2890:
case 2457:
case 2128:
case 2745:
case 1657:
case 72:
case 2895:
case 2478:
case 1625:
case 3679:
case 2149:
case 2369:
case 85:
case 2784:
case 110:
case 3573:
case 2839:
case 2047:
case 939:
case 2446:
case 801:
case 2396:
case 3322:
case 3793:
case 3900:
case 1343:
case 3132:
case 3843:
case 1822:
case 4018:
case 2599:
case 1342:
case 450:
case 59:
case 3323:
case 1823:
case 235:
case 3691:
case 2131:
case 2566:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1761645601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,];
var gg_b = "1761645601/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
