// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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
case 3956:
case 1315:
case 2284:
case 857:
case 16:
case 2784:
case 4040:
case 3001:
case 2362:
case 1439:
case 1423:
case 2352:
case 2103:
case 2979:
case 3765:
case 2882:
case 1458:
case 2320:
case 3323:
case 2591:
case 2829:
case 2174:
case 998:
case 551:
case 927:
case 949:
case 832:
case 2138:
case 2445:
case 482:
case 1182:
case 3702:
case 455:
case 1932:
case 1774:
case 3880:
case 70:
case 2874:
case 1978:
case 3101:
case 3785:
case 3780:
case 487:
case 1391:
case 1783:
case 2418:
case 1926:
case 2523:
case 2161:
case 197:
case 1831:
case 1438:
case 1484:
case 2359:
case 1891:
case 2229:
case 898:
case 1946:
case 4049:
case 1543:
case 3672:
case 2759:
case 2140:
case 2638:
case 458:
case 1336:
case 2160:
case 1048:
case 3123:
case 814:
case 1545:
case 40:
case 2049:
case 2232:
case 1483:
case 2699:
case 3579:
case 2195:
case 291:
case 390:
case 3884:
case 3763:
case 3980:
case 953:
case 3090:
case 2427:
case 1081:
case 1541:
case 3889:
case 3526:
case 3524:
case 573:
case 2915:
case 1937:
case 669:
case 1505:
case 3248:
case 679:
case 3990:
case 3030:
case 621:
case 1054:
case 2648:
case 1723:
case 1802:
case 125:
case 1413:
case 1742:
case 3952:
case 1727:
case 220:
case 3514:
case 1686:
case 2544:
case 2587:
case 3722:
case 700:
case 878:
case 838:
case 3669:
case 921:
case 101:
case 2066:
case 3289:
case 2962:
case 3194:
case 2452:
case 2350:
case 3719:
case 3105:
case 968:
case 210:
case 4030:
case 1818:
case 2247:
case 160:
case 2179:
case 1979:
case 3666:
case 1645:
case 751:
case 3693:
case 208:
case 2257:
case 464:
case 561:
case 2603:
case 2900:
case 624:
case 308:
case 1570:
case 1719:
case 3318:
case 3949:
case 1943:
case 1046:
case 3473:
case 2830:
case 347:
case 788:
case 2000:
case 1077:
case 1489:
case 216:
case 3859:
case 1354:
case 285:
case 3027:
case 306:
case 2408:
case 3091:
case 2309:
case 4004:
case 668:
case 1614:
case 328:
case 3576:
case 3891:
case 2604:
case 1126:
case 4074:
case 1730:
case 3656:
case 2564:
case 3940:
case 1469:
case 3199:
case 820:
case 325:
case 2508:
case 2717:
case 2171:
case 2984:
case 3488:
case 4038:
case 126:
case 344:
case 1214:
case 506:
case 2166:
case 367:
case 1551:
case 3775:
case 1503:
case 846:
case 2875:
case 2581:
case 2672:
case 1984:
case 1906:
case 1921:
case 3166:
case 378:
case 3975:
case 1652:
case 3000:
case 1547:
case 4011:
case 3455:
case 2801:
case 2287:
case 3527:
case 4080:
case 27:
case 1631:
case 1340:
case 2994:
case 1918:
case 3454:
case 3467:
case 209:
case 1097:
case 3660:
case 1146:
case 809:
case 554:
case 1025:
case 1823:
case 2213:
case 3172:
case 392:
case 2611:
case 1821:
case 44:
case 1813:
case 2458:
case 3793:
case 257:
case 1887:
case 2893:
case 3400:
case 2057:
case 2728:
case 517:
case 266:
case 678:
case 2546:
case 4089:
case 1621:
case 3736:
case 3977:
case 2988:
case 3268:
case 3089:
case 3013:
case 2976:
case 855:
case 374:
case 2480:
case 1852:
case 1537:
case 81:
case 2389:
case 360:
case 2497:
case 1375:
case 1313:
case 109:
case 923:
case 3805:
case 974:
case 2053:
case 1724:
case 2450:
case 2175:
case 3102:
case 2623:
case 3233:
case 3926:
case 2340:
case 984:
case 1849:
case 3096:
case 2209:
case 273:
case 1735:
case 2447:
case 3528:
case 671:
case 993:
case 2552:
case 3502:
case 3520:
case 865:
case 3411:
case 3885:
case 477:
case 1420:
case 2251:
case 1873:
case 1276:
case 2595:
case 3497:
case 893:
case 1085:
case 2374:
case 3085:
case 2440:
case 1121:
case 2037:
case 2024:
case 113:
case 2676:
case 1800:
case 2549:
case 167:
case 566:
case 4045:
case 2778:
case 3180:
case 3336:
case 606:
case 238:
case 3213:
case 1286:
case 3767:
case 320:
case 342:
case 1660:
case 4079:
case 704:
case 3241:
case 1708:
case 615:
case 3405:
case 743:
case 3201:
case 976:
case 513:
case 451:
case 3384:
case 614:
case 591:
case 3764:
case 583:
case 1732:
case 150:
case 1935:
case 1603:
case 1755:
case 1001:
case 469:
case 2439:
case 1883:
case 1020:
case 3200:
case 30:
case 2168:
case 1871:
case 3119:
case 2916:
case 2336:
case 3231:
case 363:
case 1529:
case 2849:
case 2898:
case 746:
case 2456:
case 3810:
case 2489:
case 2779:
case 169:
case 1324:
case 822:
case 1262:
case 3936:
case 190:
case 3185:
case 2974:
case 3558:
case 3129:
case 952:
case 2621:
case 1459:
case 2692:
case 303:
case 1896:
case 3284:
case 3728:
case 4060:
case 2446:
case 1516:
case 2906:
case 2461:
case 3556:
case 2237:
case 3126:
case 3333:
case 2109:
case 2566:
case 1574:
case 457:
case 845:
case 1689:
case 242:
case 3777:
case 4076:
case 3410:
case 3637:
case 1500:
case 1490:
case 2459:
case 391:
case 3274:
case 3511:
case 3212:
case 1125:
case 2653:
case 1955:
case 2349:
case 1298:
case 1203:
case 88:
case 2500:
case 3370:
case 2665:
case 619:
case 907:
case 2894:
case 1337:
case 3888:
case 2781:
case 1177:
case 3438:
case 3237:
case 715:
case 484:
case 284:
case 1353:
case 2843:
case 2131:
case 1635:
case 2538:
case 1475:
case 1961:
case 1290:
case 2069:
case 312:
case 156:
case 4042:
case 3420:
case 3315:
case 842:
case 3112:
case 2127:
case 2794:
case 2757:
case 1768:
case 1700:
case 2315:
case 3597:
case 1714:
case 1592:
case 1377:
case 1816:
case 1409:
case 599:
case 2104:
case 2292:
case 1797:
case 3712:
case 3893:
case 742:
case 2253:
case 2285:
case 3797:
case 3155:
case 2002:
case 178:
case 1950:
case 1985:
case 1604:
case 723:
case 2110:
case 2052:
case 74:
case 3077:
case 3981:
case 3547:
case 3047:
case 2114:
case 2691:
case 1862:
case 3710:
case 522:
case 3627:
case 2012:
case 1131:
case 3202:
case 287:
case 370:
case 1063:
case 1200:
case 577:
case 3788:
case 3916:
case 1082:
case 2814:
case 521:
case 183:
case 750:
case 1067:
case 3457:
case 2629:
case 1596:
case 322:
case 97:
case 1785:
case 4013:
case 380:
case 2534:
case 3418:
case 2279:
case 948:
case 407:
case 2687:
case 1280:
case 4054:
case 3654:
case 2081:
case 2335:
case 2938:
case 104:
case 2827:
case 2505:
case 3971:
case 1170:
case 335:
case 1986:
case 3154:
case 3038:
case 3742:
case 1553:
case 463:
case 3217:
case 3682:
case 3883:
case 2763:
case 1089:
case 1239:
case 3377:
case 2511:
case 1701:
case 262:
case 872:
case 1900:
case 1436:
case 111:
case 2773:
case 3835:
case 2018:
case 2337:
case 2899:
case 3618:
case 3174:
case 1285:
case 2640:
case 2761:
case 3690:
case 3819:
case 791:
case 3519:
case 1696:
case 3054:
case 1673:
case 2557:
case 387:
case 485:
case 3264:
case 2628:
case 2165:
case 1284:
case 1288:
case 941:
case 49:
case 1415:
case 2204:
case 738:
case 1294:
case 3249:
case 2124:
case 3510:
case 80:
case 1695:
case 1445:
case 1042:
case 3375:
case 341:
case 3008:
case 1839:
case 2528:
case 2798:
case 3993:
case 2883:
case 153:
case 1441:
case 2617:
case 3665:
case 849:
case 2727:
case 2149:
case 1971:
case 2713:
case 1433:
case 3947:
case 3050:
case 792:
case 3178:
case 253:
case 275:
case 3337:
case 1148:
case 340:
case 309:
case 1798:
case 2224:
case 3842:
case 2249:
case 1513:
case 3554:
case 1264:
case 3632:
case 4033:
case 401:
case 1565:
case 3804:
case 3419:
case 3772:
case 2971:
case 2684:
case 2952:
case 942:
case 3857:
case 2995:
case 3462:
case 3676:
case 2042:
case 756:
case 1658:
case 1966:
case 3585:
case 3150:
case 1007:
case 640:
case 1787:
case 1155:
case 1168:
case 73:
case 3424:
case 2792:
case 2719:
case 1287:
case 1346:
case 1644:
case 3267:
case 803:
case 2905:
case 1061:
case 2075:
case 3508:
case 3603:
case 955:
case 3751:
case 735:
case 346:
case 2254:
case 3762:
case 825:
case 3162:
case 2925:
case 1069:
case 1289:
case 1988:
case 762:
case 3086:
case 1245:
case 2425:
case 130:
case 710:
case 2471:
case 2133:
case 1123:
case 1037:
case 1962:
case 3151:
case 748:
case 2758:
case 1902:
case 1947:
case 3161:
case 2177:
case 3833:
case 1626:
case 1252:
case 2504:
case 2233:
case 3811:
case 3399:
case 2734:
case 2472:
case 1174:
case 3616:
case 3703:
case 904:
case 1982:
case 1975:
case 1141:
case 3334:
case 1212:
case 2580:
case 649:
case 754:
case 1757:
case 1220:
case 3312:
case 1260:
case 672:
case 1114:
case 1913:
case 3465:
case 2105:
case 1448:
case 211:
case 2396:
case 2725:
case 1332:
case 184:
case 1254:
case 3522:
case 2281:
case 1482:
case 4055:
case 1837:
case 570:
case 2067:
case 381:
case 2145:
case 1519:
case 997:
case 920:
case 3115:
case 1819:
case 2743:
case 549:
case 790:
case 2650:
case 3010:
case 3955:
case 3705:
case 3173:
case 3551:
case 2933:
case 1318:
case 2821:
case 1197:
case 1702:
case 3506:
case 3967:
case 3487:
case 3480:
case 3330:
case 2043:
case 1261:
case 954:
case 3441:
case 1367:
case 3124:
case 1817:
case 1402:
case 1857:
case 535:
case 2516:
case 978:
case 3731:
case 185:
case 632:
case 3032:
case 987:
case 3830:
case 1564:
case 90:
case 1373:
case 612:
case 3746:
case 3228:
case 2240:
case 2316:
case 3483:
case 82:
case 2637:
case 2378:
case 969:
case 72:
case 4006:
case 3243:
case 1825:
case 1101:
case 1437:
case 2186:
case 3402:
case 897:
case 799:
case 3458:
case 29:
case 752:
case 3304:
case 3372:
case 3392:
case 991:
case 1828:
case 725:
case 175:
case 3714:
case 405:
case 3309:
case 239:
case 1846:
case 1039:
case 2367:
case 3945:
case 3932:
case 696:
case 1737:
case 3695:
case 2735:
case 1993:
case 3046:
case 3277:
case 2588:
case 1622:
case 3288:
case 2656:
case 1331:
case 1136:
case 427:
case 1535:
case 3081:
case 1711:
case 3589:
case 1378:
case 2991:
case 1779:
case 1810:
case 722:
case 2189:
case 3328:
case 3479:
case 1506:
case 3630:
case 170:
case 594:
case 2618:
case 2191:
case 3909:
case 2910:
case 1904:
case 1968:
case 1656:
case 227:
case 2403:
case 4010:
case 3905:
case 2369:
case 1517:
case 2385:
case 1172:
case 2502:
case 3025:
case 2394:
case 3841:
case 836:
case 532:
case 2397:
case 3545:
case 1228:
case 1152:
case 1071:
case 556:
case 1509:
case 2405:
case 3640:
case 311:
case 1733:
case 1634:
case 3452:
case 143:
case 2694:
case 1897:
case 1454:
case 2820:
case 3663:
case 4088:
case 626:
case 994:
case 3651:
case 3959:
case 269:
case 1167:
case 2351:
case 2150:
case 1282:
case 369:
case 1875:
case 4065:
case 2732:
case 217:
case 288:
case 1898:
case 1292:
case 765:
case 120:
case 1171:
case 2772:
case 3643:
case 345:
case 787:
case 3381:
case 402:
case 91:
case 1166:
case 1330:
case 3453:
case 1019:
case 3282:
case 2520:
case 1601:
case 1196:
case 2035:
case 3694:
case 966:
case 3611:
case 736:
case 1368:
case 2015:
case 2666:
case 3278:
case 3574:
case 1743:
case 1383:
case 2664:
case 334:
case 3359:
case 1649:
case 796:
case 268:
case 2514:
case 1759:
case 3999:
case 550:
case 2318:
case 2510:
case 3531:
case 453:
case 1022:
case 3806:
case 944:
case 2188:
case 3849:
case 2945:
case 1129:
case 3495:
case 870:
case 1270:
case 737:
case 713:
case 1653:
case 3847:
case 2533:
case 4027:
case 2058:
case 2088:
case 2663:
case 939:
case 2536:
case 21:
case 504:
case 1794:
case 539:
case 3881:
case 1213:
case 2121:
case 461:
case 2498:
case 2878:
case 1861:
case 2325:
case 3608:
case 4018:
case 3572:
case 511:
case 218:
case 2460:
case 3896:
case 674:
case 3726:
case 1268:
case 801:
case 3998:
case 3844:
case 2551:
case 3153:
case 912:
case 3449:
case 181:
case 910:
case 1641:
case 2744:
case 827:
case 1406:
case 1033:
case 1147:
case 3494:
case 2113:
case 2966:
case 3783:
case 2515:
case 964:
case 2636:
case 2393:
case 685:
case 2967:
case 2626:
case 1605:
case 281:
case 3416:
case 2444:
case 3642:
case 1848:
case 1265:
case 2135:
case 1951:
case 3209:
case 1248:
case 2608:
case 39:
case 4051:
case 3673:
case 2117:
case 1079:
case 3006:
case 2142:
case 3496:
case 572:
case 1773:
case 3109:
case 1925:
case 769:
case 3302:
case 3291:
case 3677:
case 2192:
case 793:
case 2987:
case 497:
case 1895:
case 2391:
case 775:
case 2805:
case 1410:
case 442:
case 3246:
case 2223:
case 2080:
case 7:
case 2495:
case 375:
case 314:
case 2280:
case 1026:
case 1717:
case 1031:
case 2327:
case 224:
case 2712:
case 1969:
case 3247:
case 3258:
case 1549:
case 2220:
case 3020:
case 1476:
case 336:
case 2848:
case 465:
case 2817:
case 1942:
case 2535:
case 1056:
case 3331:
case 3066:
case 1548:
case 2208:
case 3434:
case 1613:
case 4028:
case 1004:
case 3871:
case 1612:
case 2571:
case 493:
case 2197:
case 277:
case 1518:
case 1339:
case 3364:
case 3650:
case 3988:
case 3873:
case 278:
case 1334:
case 2698:
case 4039:
case 1766:
case 1467:
case 1430:
case 2872:
case 1296:
case 3240:
case 362:
case 858:
case 2008:
case 761:
case 4053:
case 1235:
case 3781:
case 3417:
case 3944:
case 1127:
case 3867:
case 2306:
case 917:
case 973:
case 515:
case 816:
case 2125:
case 2568:
case 3245:
case 2964:
case 1674:
case 4064:
case 2507:
case 289:
case 2681:
case 914:
case 2936:
case 3768:
case 2767:
case 3862:
case 3029:
case 2518:
case 1095:
case 2660:
case 3275:
case 644:
case 890:
case 3097:
case 1729:
case 798:
case 122:
case 3394:
case 3700:
case 3365:
case 3679:
case 3207:
case 3244:
case 413:
case 3573:
case 2599:
case 2333:
case 1764:
case 1590:
case 824:
case 2710:
case 1973:
case 773:
case 2673:
case 4083:
case 264:
case 1640:
case 2485:
case 1746:
case 4063:
case 2130:
case 3445:
case 3563:
case 3395:
case 970:
case 1795:
case 1394:
case 3570:
case 1786:
case 922:
case 2853:
case 331:
case 3738:
case 1407:
case 2090:
case 2989:
case 3266:
case 3221:
case 2400:
case 3577:
case 2791:
case 2122:
case 3045:
case 3413:
case 1345:
case 1841:
case 3970:
case 3515:
case 682:
case 3042:
case 2688:
case 2914:
case 1216:
case 3938:
case 3259:
case 410:
case 2201:
case 2561:
case 1718:
case 3263:
case 759:
case 2655:
case 568:
case 100:
case 697:
case 243:
case 3561:
case 1965:
case 3230:
case 3984:
case 3380:
case 3707:
case 520:
case 3362:
case 2107:
case 1521:
case 1090:
case 2070:
case 4056:
case 1618:
case 3769:
case 1320:
case 38:
case 1361:
case 1780:
case 454:
case 3366:
case 114:
case 429:
case 1581:
case 2395:
case 2968:
case 1647:
case 1150:
case 383:
case 460:
case 3443:
case 313:
case 960:
case 2897:
case 1805:
case 2982:
case 3621:
case 3034:
case 1811:
case 613:
case 2922:
case 3003:
case 2579:
case 1225:
case 419:
case 1401:
case 1267:
case 1180:
case 2562:
case 1485:
case 3460:
case 1664:
case 3348:
case 1651:
case 1957:
case 51:
case 3125:
case 2301:
case 3049:
case 2093:
case 24:
case 3562:
case 3009:
case 2210:
case 1431:
case 1119:
case 3461:
case 766:
case 2496:
case 1747:
case 3103:
case 165:
case 1103:
case 2342:
case 1192:
case 2811:
case 3492:
case 2527:
case 2319:
case 3855:
case 841:
case 1507:
case 810:
case 1587:
case 3647:
case 75:
case 492:
case 2089:
case 3430:
case 1358:
case 536:
case 3351:
case 1357:
case 2407:
case 279:
case 466:
case 1408:
case 5:
case 3429:
case 3321:
case 128:
case 1683:
case 733:
case 623:
case 3374:
case 771:
case 3860:
case 3431:
case 3622:
case 1365:
case 2120:
case 3028:
case 4068:
case 4:
case 161:
case 611:
case 4001:
case 690:
case 1994:
case 2272:
case 1539:
case 2997:
case 938:
case 172:
case 1195:
case 854:
case 930:
case 3594:
case 1137:
case 3662:
case 267:
case 4043:
case 639:
case 3435:
case 745:
case 563:
case 3139:
case 2364:
case 3459:
case 1481:
case 3127:
case 2158:
case 524:
case 4041:
case 1307:
case 2525:
case 3995:
case 423:
case 3875:
case 3718:
case 1990:
case 28:
case 2839:
case 1739:
case 2199:
case 2941:
case 915:
case 2858:
case 3790:
case 241:
case 1672:
case 588:
case 981:
case 2248:
case 3440:
case 1094:
case 108:
case 3035:
case 3748:
case 2242:
case 1164:
case 2707:
case 3397:
case 230:
case 1434:
case 755:
case 3571:
case 2824:
case 2762:
case 2703:
case 744:
case 2594:
case 3078:
case 3753:
case 3280:
case 1107:
case 1138:
case 103:
case 4073:
case 2742:
case 32:
case 4025:
case 3939:
case 4005:
case 2083:
case 2269:
case 1842:
case 1013:
case 1559:
case 3423:
case 652:
case 3469:
case 3727:
case 3167:
case 1655:
case 662:
case 3122:
case 1964:
case 2860:
case 3601:
case 874:
case 618:
case 3297:
case 3661:
case 3378:
case 2540:
case 3251:
case 1188:
case 2891:
case 121:
case 2457:
case 779:
case 829:
case 8:
case 3675:
case 3075:
case 2172:
case 935:
case 2919:
case 3613:
case 3612:
case 3641:
case 2151:
case 3093:
case 4012:
case 310:
case 3869:
case 2108:
case 925:
case 3273:
case 3339:
case 3082:
case 1256:
case 806:
case 196:
case 376:
case 2339:
case 3548:
case 547:
case 1102:
case 1008:
case 1877:
case 198:
case 4019:
case 2370:
case 1493:
case 3770:
case 1858:
case 3892:
case 3829:
case 1322:
case 1323:
case 937:
case 3543:
case 1578:
case 2834:
case 3513:
case 3133:
case 1471:
case 3433:
case 3798:
case 2956:
case 3349:
case 684:
case 2263:
case 789:
case 3590:
case 1385:
case 525:
case 3343:
case 3826:
case 3696:
case 2537:
case 881:
case 815:
case 1670:
case 587:
case 3671:
case 3176:
case 2863:
case 3342:
case 1443:
case 1380:
case 365:
case 3415:
case 326:
case 2437:
case 3135:
case 274:
case 1244:
case 404:
case 3868:
case 357:
case 3324:
case 3915:
case 1527:
case 1435:
case 33:
case 586:
case 3292:
case 236:
case 332:
case 1894:
case 3450:
case 1227:
case 189:
case 3106:
case 3256:
case 3555:
case 2463:
case 3639:
case 1609:
case 1669:
case 564:
case 2291:
case 1629:
case 2680:
case 3626:
case 1920:
case 359:
case 3713:
case 1928:
case 2305:
case 919:
case 456:
case 2126:
case 603:
case 1679:
case 2696:
case 417:
case 734:
case 1317:
case 3902:
case 821:
case 3044:
case 2788:
case 2484:
case 2836:
case 2887:
case 2716:
case 2473:
case 4047:
case 1247:
case 2029:
case 686:
case 1671:
case 1474:
case 778:
case 2003:
case 3937:
case 617:
case 3371:
case 1096:
case 3839:
case 999:
case 844:
case 2091:
case 1321:
case 1566:
case 436:
case 3165:
case 265:
case 2785:
case 2996:
case 3039:
case 432:
case 1055:
case 1250:
case 3828:
case 3946:
case 943:
case 1305:
case 1963:
case 887:
case 1352:
case 651:
case 1789:
case 3536:
case 52:
case 2959:
case 3599:
case 1677:
case 2106:
case 65:
case 1952:
case 3015:
case 653:
case 851:
case 1115:
case 1047:
case 2034:
case 598:
case 3943:
case 307:
case 215:
case 1189:
case 2462:
case 1306:
case 1562:
case 654:
case 1721:
case 2766:
case 1105:
case 396:
case 2417:
case 2932:
case 3485:
case 3060:
case 1325:
case 1771:
case 3922:
case 2230:
case 3600:
case 34:
case 1752:
case 574:
case 1002:
case 386:
case 2737:
case 2297:
case 1803:
case 3882:
case 2482:
case 3832:
case 877:
case 2377:
case 1577:
case 2187:
case 1956:
case 3838:
case 3631:
case 1049:
case 1569:
case 4020:
case 2061:
case 2815:
case 2097:
case 2935:
case 562:
case 2470:
case 26:
case 3022:
case 107:
case 2657:
case 1153:
case 934:
case 4015:
case 2879:
case 2539:
case 3863:
case 802:
case 3332:
case 3503:
case 3799:
case 3709:
case 2553:
case 3232:
case 896:
case 2558:
case 1697:
case 1226:
case 139:
case 3484:
case 155:
case 2682:
case 1414:
case 3500:
case 758:
case 783:
case 2760:
case 3720:
case 2469:
case 317:
case 3653:
case 2200:
case 450:
case 509:
case 1872:
case 3865:
case 3498:
case 2903:
case 1154:
case 698:
case 10:
case 1608:
case 1944:
case 863:
case 757:
case 1100:
case 2112:
case 1109:
case 2031:
case 956:
case 437:
case 3848:
case 3921:
case 92:
case 3699:
case 2748:
case 1275:
case 4094:
case 2606:
case 188:
case 2754:
case 255:
case 3053:
case 2464:
case 2876:
case 3099:
case 2163:
case 1142:
case 3951:
case 2705:
case 1914:
case 3698:
case 58:
case 2901:
case 2341:
case 1161:
case 2020:
case 2678:
case 2017:
case 800:
case 2137:
case 1868:
case 694:
case 3276:
case 3784:
case 2554:
case 358:
case 3733:
case 2404:
case 3326:
case 15:
case 168:
case 1116:
case 1594:
case 1909:
case 3:
case 1930:
case 3866:
case 154:
case 2078:
case 2927:
case 4037:
case 3187:
case 701:
case 1954:
case 807:
case 1338:
case 4029:
case 3595:
case 2047:
case 3749:
case 228:
case 3914:
case 3578:
case 441:
case 637:
case 1259:
case 3913:
case 1110:
case 3341:
case 3169:
case 2060:
case 770:
case 868:
case 1496:
case 3978:
case 206:
case 835:
case 2881:
case 1269:
case 665:
case 2040:
case 2363:
case 602:
case 2645:
case 259:
case 866:
case 361:
case 3950:
case 474:
case 2667:
case 2783:
case 1190:
case 2354:
case 2917:
case 1600:
case 2965:
case 3023:
case 4082:
case 1366:
case 3218:
case 2950:
case 3504:
case 2706:
case 158:
case 3824:
case 2542:
case 2353:
case 4032:
case 2977:
case 43:
case 3827:
case 2871:
case 2892:
case 94:
case 988:
case 501:
case 1017:
case 963:
case 479:
case 245:
case 2709:
case 2275:
case 2111:
case 1052:
case 2311:
case 4003:
case 1498:
case 631:
case 1830:
case 2234:
case 3262:
case 3421:
case 894:
case 667:
case 3711:
case 3567:
case 286:
case 741:
case 25:
case 2295:
case 3929:
case 470:
case 372:
case 2215:
case 3586:
case 141:
case 2064:
case 2492:
case 3475:
case 945:
case 3470:
case 3340:
case 1461:
case 1931:
case 495:
case 3272:
case 505:
case 926:
case 906:
case 2016:
case 324:
case 2123:
case 1860:
case 229:
case 3385:
case 1967:
case 366:
case 4086:
case 582:
case 2267:
case 1691:
case 1833:
case 3530:
case 1707:
case 3383:
case 319:
case 131:
case 3198:
case 3087:
case 3553:
case 1726:
case 1510:
case 1169:
case 177:
case 3393:
case 2837:
case 2576:
case 2095:
case 3904:
case 3802:
case 2993:
case 389:
case 1698:
case 2572:
case 1538:
case 3157:
case 3048:
case 4009:
case 3098:
case 1411:
case 1615:
case 1086:
case 1854:
case 1654:
case 2115:
case 3068:
case 830:
case 1329:
case 3317:
case 3104:
case 823:
case 936:
case 414:
case 2490:
case 476:
case 1762:
case 420:
case 1892:
case 272:
case 892:
case 1881:
case 3979:
case 3011:
case 2236:
case 1927:
case 2101:
case 3697:
case 2607:
case 22:
case 1202:
case 1076:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1722549601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,];
var gg_b = "1722549601/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      subdomainx = String.fromCharCode(97 + gg_m[x]);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
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
