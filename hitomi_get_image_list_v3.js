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
var o = 1;
switch (g) {
case 2732:
case 1215:
case 3635:
case 3328:
case 2697:
case 3815:
case 2436:
case 1006:
case 3700:
case 1694:
case 1693:
case 3170:
case 1489:
case 222:
case 2481:
case 48:
case 2920:
case 805:
case 1374:
case 1977:
case 3392:
case 1645:
case 1550:
case 2614:
case 2764:
case 2322:
case 1880:
case 3449:
case 2175:
case 2848:
case 2681:
case 687:
case 2448:
case 3055:
case 157:
case 2214:
case 1879:
case 3905:
case 414:
case 1683:
case 2878:
case 3785:
case 3804:
case 3226:
case 2990:
case 2156:
case 976:
case 822:
case 2228:
case 3357:
case 4083:
case 354:
case 4046:
case 2392:
case 1714:
case 546:
case 3564:
case 1822:
case 2678:
case 988:
case 3695:
case 662:
case 724:
case 2482:
case 2160:
case 314:
case 3212:
case 2796:
case 1258:
case 3480:
case 771:
case 961:
case 144:
case 1862:
case 3724:
case 2254:
case 1396:
case 3103:
case 2284:
case 3433:
case 3114:
case 2289:
case 119:
case 502:
case 2361:
case 3198:
case 3705:
case 291:
case 2181:
case 158:
case 3989:
case 2470:
case 3721:
case 1421:
case 454:
case 228:
case 1270:
case 1127:
case 3867:
case 117:
case 706:
case 2475:
case 2504:
case 3314:
case 2104:
case 3937:
case 984:
case 538:
case 2069:
case 3045:
case 2056:
case 1644:
case 4092:
case 1053:
case 3220:
case 1579:
case 3654:
case 3185:
case 135:
case 3412:
case 370:
case 500:
case 3722:
case 2221:
case 712:
case 748:
case 3671:
case 1511:
case 441:
case 1183:
case 3618:
case 4017:
case 901:
case 3896:
case 3753:
case 1244:
case 2079:
case 2691:
case 309:
case 3572:
case 488:
case 2445:
case 312:
case 346:
case 3644:
case 716:
case 3068:
case 3111:
case 3624:
case 1711:
case 1730:
case 1273:
case 2933:
case 259:
case 485:
case 1485:
case 1031:
case 3238:
case 689:
case 333:
case 1039:
case 1052:
case 1130:
case 2447:
case 2761:
case 916:
case 1928:
case 2408:
case 1047:
case 2430:
case 505:
case 773:
case 1088:
case 129:
case 713:
case 1970:
case 2969:
case 415:
case 1467:
case 2152:
case 3704:
case 2719:
case 2532:
case 519:
case 2145:
case 366:
case 1139:
case 571:
case 2266:
case 4006:
case 1303:
case 2016:
case 861:
case 746:
case 1370:
case 2948:
case 1092:
case 2242:
case 1732:
case 653:
case 2560:
case 171:
case 1025:
case 3948:
case 2736:
case 4007:
case 758:
case 2919:
case 1412:
case 1248:
case 745:
case 407:
case 834:
case 3174:
case 518:
case 2177:
case 552:
case 3318:
case 611:
case 1471:
case 1858:
case 624:
case 3652:
case 1528:
case 2959:
case 18:
case 2521:
case 1686:
case 902:
case 551:
case 3525:
case 2358:
case 597:
case 2889:
case 3971:
case 3110:
case 3569:
case 673:
case 3508:
case 4023:
case 187:
case 383:
case 365:
case 290:
case 1761:
case 345:
case 2988:
case 8:
case 2590:
case 1664:
case 3821:
case 161:
case 2713:
case 777:
case 3317:
case 371:
case 1532:
case 2856:
case 2876:
case 2211:
case 2774:
case 2570:
case 2490:
case 2375:
case 3782:
case 2002:
case 4000:
case 525:
case 1225:
case 1782:
case 2845:
case 105:
case 3680:
case 2986:
case 2582:
case 1475:
case 2429:
case 442:
case 2558:
case 1961:
case 3988:
case 907:
case 2816:
case 1881:
case 1477:
case 501:
case 1235:
case 3873:
case 2454:
case 2754:
case 1321:
case 3797:
case 1797:
case 539:
case 3755:
case 2202:
case 3144:
case 408:
case 1667:
case 682:
case 3887:
case 3550:
case 1105:
case 1750:
case 1184:
case 1861:
case 1463:
case 3600:
case 3549:
case 2828:
case 1199:
case 701:
case 3181:
case 1476:
case 83:
case 3590:
case 2943:
case 470:
case 1692:
case 1774:
case 3466:
case 148:
case 3803:
case 3041:
case 1923:
case 2217:
case 583:
case 580:
case 2288:
case 3066:
case 3861:
case 2699:
case 1586:
case 2015:
case 2314:
case 3732:
case 3810:
case 2388:
case 3539:
case 2167:
case 849:
case 2449:
case 2291:
case 3117:
case 436:
case 2037:
case 2718:
case 3752:
case 2092:
case 55:
case 1351:
case 1737:
case 3239:
case 1592:
case 2074:
case 3520:
case 300:
case 1447:
case 2721:
case 798:
case 2835:
case 44:
case 1269:
case 1251:
case 2077:
case 3352:
case 3421:
case 647:
case 1205:
case 3529:
case 1598:
case 2208:
case 2951:
case 2061:
case 3284:
case 3707:
case 1331:
case 2561:
case 4033:
case 3026:
case 107:
case 2783:
case 1631:
case 3380:
case 3184:
case 2103:
case 2473:
case 1023:
case 405:
case 1980:
case 3958:
case 1849:
case 1002:
case 2333:
case 3371:
case 21:
case 1724:
case 2419:
case 1860:
case 3000:
case 1903:
case 862:
case 1769:
case 1794:
case 497:
case 1147:
case 1657:
case 3485:
case 2670:
case 1180:
case 1043:
case 5:
case 3995:
case 3398:
case 2748:
case 2810:
case 1246:
case 2367:
case 1073:
case 4028:
case 3463:
case 3443:
case 3030:
case 3047:
case 2962:
case 1441:
case 1588:
case 3280:
case 3777:
case 4087:
case 1167:
case 14:
case 596:
case 3518:
case 3717:
case 742:
case 432:
case 1111:
case 3760:
case 341:
case 727:
case 1495:
case 975:
case 2075:
case 446:
case 3089:
case 2896:
case 3146:
case 1029:
case 2749:
case 3594:
case 3247:
case 2063:
case 27:
case 508:
case 1900:
case 413:
case 1001:
case 3139:
case 708:
case 4045:
case 598:
case 283:
case 3825:
case 461:
case 2369:
case 836:
case 1918:
case 4018:
case 439:
case 430:
case 1754:
case 1011:
case 951:
case 3779:
case 1188:
case 928:
case 1150:
case 367:
case 1007:
case 1156:
case 241:
case 1327:
case 866:
case 3605:
case 3395:
case 846:
case 1228:
case 1438:
case 1439:
case 3102:
case 1626:
case 2794:
case 483:
case 3393:
case 2259:
case 992:
case 2057:
case 2686:
case 1231:
case 820:
case 734:
case 3691:
case 3134:
case 285:
case 2897:
case 3399:
case 472:
case 1161:
case 1285:
case 287:
case 2737:
case 2113:
case 1065:
case 1378:
case 3271:
case 584:
case 1136:
case 1486:
case 2489:
case 896:
case 3675:
case 2010:
case 123:
case 3716:
case 3442:
case 1999:
case 1991:
case 130:
case 640:
case 1275:
case 2805:
case 1882:
case 3270:
case 905:
case 881:
case 3578:
case 3767:
case 1988:
case 1339:
case 3599:
case 1049:
case 3846:
case 1917:
case 1442:
case 3262:
case 2530:
case 2543:
case 3269:
case 3056:
case 2261:
case 2270:
case 4054:
case 2551:
case 3733:
case 523:
case 1483:
case 2601:
case 3190:
case 1307:
case 3830:
case 3051:
case 99:
case 3985:
case 3099:
case 1596:
case 2825:
case 3350:
case 830:
case 2867:
case 566:
case 426:
case 1142:
case 3845:
case 3427:
case 2631:
case 1437:
case 3620:
case 2679:
case 2318:
case 93:
case 2547:
case 1518:
case 282:
case 3984:
case 3378:
case 2593:
case 3370:
case 1453:
case 2198:
case 1388:
case 213:
case 2846:
case 1242:
case 382:
case 2235:
case 378:
case 3034:
case 249:
case 1993:
case 2671:
case 111:
case 3376:
case 1393:
case 265:
case 2328:
case 1128:
case 362:
case 3422:
case 419:
case 2204:
case 1323:
case 3823:
case 2111:
case 3916:
case 1910:
case 2531:
case 2931:
case 2644:
case 2717:
case 2667:
case 3737:
case 2163:
case 1802:
case 334:
case 2706:
case 3403:
case 3807:
case 1892:
case 295:
case 1911:
case 524:
case 3149:
case 150:
case 3162:
case 3093:
case 2323:
case 1365:
case 2372:
case 4066:
case 217:
case 1818:
case 567:
case 2640:
case 3613:
case 2469:
case 2136:
case 2478:
case 1159:
case 2864:
case 1468:
case 1581:
case 172:
case 3292:
case 2672:
case 1487:
case 281:
case 3164:
case 2443:
case 2311:
case 475:
case 3491:
case 2899:
case 1237:
case 3217:
case 3895:
case 2967:
case 1027:
case 3152:
case 1451:
case 3780:
case 3090:
case 1681:
case 2437:
case 3740:
case 3831:
case 3046:
case 1313:
case 1212:
case 2925:
case 1662:
case 942:
case 2834:
case 1375:
case 4048:
case 403:
case 2916:
case 29:
case 1198:
case 3880:
case 2432:
case 3341:
case 2666:
case 2939:
case 240:
case 578:
case 768:
case 1207:
case 218:
case 320:
case 1743:
case 2872:
case 1949:
case 1558:
case 2391:
case 2001:
case 3175:
case 1036:
case 3798:
case 2765:
case 3674:
case 2317:
case 2129:
case 1182:
case 412:
case 3234:
case 1887:
case 3285:
case 2993:
case 1210:
case 1767:
case 2507:
case 1673:
case 3928:
case 3648:
case 330:
case 1019:
case 3361:
case 2621:
case 2692:
case 350:
case 2219:
case 2157:
case 1777:
case 1924:
case 1343:
case 3064:
case 4095:
case 473:
case 3122:
case 1989:
case 3610:
case 696:
case 428:
case 3227:
case 3579:
case 799:
case 2818:
case 3166:
case 2934:
case 723:
case 3743:
case 3302:
case 2654:
case 424:
case 3416:
case 3634:
case 3906:
case 1848:
case 384:
case 1055:
case 672:
case 2539:
case 188:
case 499:
case 2121:
case 3330:
case 1187:
case 1361:
case 2073:
case 2424:
case 2811:
case 2829:
case 3778:
case 3998:
case 63:
case 1290:
case 1742:
case 2964:
case 981:
case 913:
case 3129:
case 1281:
case 1589:
case 2637:
case 605:
case 2767:
case 711:
case 2894:
case 548:
case 911:
case 374:
case 2035:
case 1847:
case 1762:
case 1834:
case 592:
case 1342:
case 1430:
case 2758:
case 2265:
case 77:
case 3646:
case 493:
case 56:
case 2096:
case 2638:
case 3726:
case 1465:
case 2315:
case 2078:
case 2451:
case 1386:
case 1957:
case 715:
case 3483:
case 3512:
case 1973:
case 1350:
case 1703:
case 232:
case 59:
case 1428:
case 1817:
case 1054:
case 1756:
case 3911:
case 151:
case 445:
case 510:
case 2676:
case 205:
case 4055:
case 2629:
case 2190:
case 1243:
case 2957:
case 3772:
case 1233:
case 2494:
case 1624:
case 3333:
case 2292:
case 3566:
case 1595:
case 1617:
case 3793:
case 2089:
case 3126:
case 1042:
case 141:
case 2731:
case 787:
case 2179:
case 2118:
case 3835:
case 996:
case 1597:
case 256:
case 203:
case 817:
case 3385:
case 972:
case 2026:
case 2106:
case 2687:
case 3987:
case 1328:
case 169:
case 1185:
case 2599:
case 3436:
case 3586:
case 3921:
case 3335:
case 1770:
case 936:
case 3747:
case 1671:
case 2923:
case 2662:
case 3430:
case 3057:
case 433:
case 1690:
case 1938:
case 4082:
case 1856:
case 391:
case 1433:
case 2668:
case 1490:
case 2417:
case 1104:
case 3019:
case 1510:
case 3847:
case 1020:
case 1796:
case 116:
case 974:
case 1966:
case 156:
case 3612:
case 2409:
case 231:
case 3011:
case 3417:
case 1432:
case 2906:
case 803:
case 1461:
case 660:
case 2900:
case 818:
case 3723:
case 576:
case 3983:
case 3805:
case 2935:
case 1594:
case 1701:
case 227:
case 3451:
case 839:
case 2341:
case 1695:
case 2577:
case 3254:
case 1778:
case 1048:
case 2450:
case 1719:
case 1811:
case 4027:
case 1330:
case 863:
case 2961:
case 2485:
case 1519:
case 726:
case 2552:
case 2222:
case 2689:
case 338:
case 3536:
case 3481:
case 3140:
case 477:
case 3981:
case 2185:
case 2086:
case 4063:
case 3472:
case 2248:
case 3967:
case 3308:
case 1915:
case 2040:
case 808:
case 1158:
case 894:
case 417:
case 2195:
case 1397:
case 1445:
case 1912:
case 1440:
case 1934:
case 1026:
case 310:
case 229:
case 3521:
case 1219:
case 3833:
case 667:
case 2753:
case 751:
case 3365:
case 1479:
case 3397:
case 2412:
case 692:
case 3570:
case 125:
case 363:
case 2442:
case 308:
case 2022:
case 221:
case 1466:
case 480:
case 1164:
case 298:
case 457:
case 1547:
case 1249:
case 868:
case 621:
case 1675:
case 3736:
case 2301:
case 1170:
case 1780:
case 1670:
case 1408:
case 900:
case 2223:
case 2572:
case 2641:
case 2523:
case 967:
case 1710:
case 2861:
case 999:
case 2787:
case 440:
case 2613:
case 1515:
case 2518:
case 3855:
case 1334:
case 2502:
case 258:
case 929:
case 1843:
case 1647:
case 174:
case 1790:
case 864:
case 3698:
case 549:
case 3195:
case 1276:
case 3616:
case 3773:
case 2881:
case 1368:
case 2535:
case 2746:
case 1004:
case 3267:
case 331:
case 492:
case 3137:
case 2196:
case 556:
case 529:
case 1226:
case 3565:
case 2209:
case 189:
case 3541:
case 1382:
case 2493:
case 2215:
case 3297:
case 2047:
case 82:
case 2174:
case 3608:
case 3150:
case 2617:
case 2886:
case 1174:
case 2252:
case 1715:
case 3279:
case 932:
case 1329:
case 3053:
case 608:
case 2187:
case 1457:
case 574:
case 1569:
case 569:
case 2733:
case 1678:
case 3060:
case 2673:
case 775:
case 3411:
case 361:
case 2908:
case 1795:
case 3348:
case 337:
case 1109:
case 2533:
case 2740:
case 72:
case 3008:
case 3591:
case 3084:
case 2285:
case 2690:
case 760:
case 2882:
case 2411:
case 1944:
case 1936:
case 3278:
case 534:
case 2351:
case 106:
case 1637:
case 3972:
case 133:
case 897:
case 3156:
case 2674:
case 2722:
case 1190:
case 132:
case 418:
case 1114:
case 2023:
case 33:
case 210:
case 323:
case 1058:
case 3315:
case 3944:
case 995:
case 3875:
case 2664:
case 2130:
case 3952:
case 1224:
case 1165:
case 3692:
case 4031:
case 3351:
case 2382:
case 317:
case 2041:
case 3763:
case 1291:
case 2669:
case 2371:
case 3574:
case 1955:
case 2133:
case 3108:
case 1394:
case 2584:
case 179:
case 1245:
case 1969:
case 459:
case 296:
case 3523:
case 1144:
case 2418:
case 2286:
case 638:
case 3842:
case 1492:
case 1431:
case 3551:
case 2680:
case 1106:
case 1110:
case 1752:
case 2149:
case 2360:
case 2336:
case 127:
case 663:
case 1898:
case 809:
case 3556:
case 3526:
case 3147:
case 3:
case 1202:
case 1099:
case 109:
case 319:
case 2337:
case 1540:
case 193:
case 664:
case 2698:
case 694:
case 1409:
case 2407:
case 1552:
case 2567:
case 3820:
case 2604:
case 3886:
case 1287:
case 416:
case 3275:
case 933:
case 1120:
case 3457:
case 2715:
case 3960:
case 1859:
case 1639:
case 1411:
case 2513:
case 2776:
case 668:
case 2114:
case 953:
case 2433:
case 273:
case 2024:
case 1507:
case 3367:
case 1326:
case 3210:
case 225:
case 1901:
case 1137:
case 4091:
case 2536:
case 1704:
case 527:
case 3237:
case 263:
case 3665:
case 1344:
case 3796:
case 1122:
case 871:
case 2414:
case 2347:
case 2734:
case 2100:
case 3812:
case 3651:
case 2812:
case 1649:
case 1075:
case 3104:
case 3456:
case 2510:
case 2714:
case 3829:
case 2879:
case 3641:
case 3493:
case 2945:
case 2745:
case 1171:
case 3661:
case 858:
case 2995:
case 2468:
case 3289:
case 2348:
case 3576:
case 3211:
case 4032:
case 3696:
case 1078:
case 1358:
case 2815:
case 1967:
case 3415:
case 2051:
case 2569:
case 2484:
case 1454:
case 2303:
case 3426:
case 2571:
case 3897:
case 3728:
case 3547:
case 268:
case 2241:
case 2559:
case 377:
case 796:
case 1729:
case 3834:
case 2913:
case 464:
case 2357:
case 3248:
case 2528:
case 4010:
case 1363:
case 1193:
case 3976:
case 3542:
case 1089:
case 903:
case 3656:
case 219:
case 2162:
case 3776:
case 316:
case 2642:
case 3933:
case 1266:
case 1740:
case 2806:
case 1864:
case 3617:
case 1101:
case 425:
case 3499:
case 1141:
case 1316:
case 406:
case 3945:
case 3310:
case 178:
case 3474:
case 1107:
case 990:
case 2888:
case 2385:
case 3986:
case 2055:
case 3257:
case 754:
case 136:
case 589:
case 2334:
case 4026:
case 2062:
case 1755:
case 3881:
case 404:
case 2624:
case 2355:
case 2471:
case 1304:
case 1377:
case 2140:
case 2137:
case 2520:
case 645:
case 1315:
case 2151:
case 599:
case 884:
case 1839:
case 3241:
case 2892:
case 1018:
case 1311:
case 2244:
case 2926:
case 2381:
case 969:
case 1513:
case 112:
case 1160:
case 813:
case 478:
case 3067:
case 2841:
case 1873:
case 4069:
case 34:
case 1131:
case 1587:
case 1506:
case 479:
case 372:
case 3229:
case 145:
case 1271:
case 3086:
case 786:
case 2820:
case 2868:
case 411:
case 1500:
case 962:
case 3339:
case 35:
case 340:
case 1939:
case 2066:
case 4052:
case 521:
case 2877:
case 2298:
case 2970:
case 3762:
case 898:
case 2302:
case 2224:
case 3941:
case 49:
case 2501:
case 2843:
case 1176:
case 3453:
case 2887:
case 659:
case 2903:
case 1279:
case 1263:
case 1082:
case 895:
case 458:
case 1577:
case 4065:
case 1478:
case 115:
case 1503:
case 1763:
case 2509:
case 24:
case 434:
case 3076:
case 3009:
case 435:
case 3002:
case 4034:
case 146:
case 2762:
case 3936:
case 2865:
case 388:
case 1884:
case 2595:
case 2279:
case 1257:
case 2305:
case 10:
case 811:
case 3384:
case 938:
case 284:
case 163:
case 833:
case 4085:
case 2474:
case 3619:
case 1612:
case 1748:
case 3585:
case 1852:
case 1545:
case 351:
case 1927:
case 3819:
case 1044:
case 3946:
case 4072:
case 1348:
case 1272:
case 1789:
case 2218:
case 3629:
case 1947:
case 1591:
case 2804:
case 2232:
case 1229:
case 537:
case 2583:
case 260:
case 2170:
case 1935:
case 2191:
case 4076:
case 615:
case 835:
case 1526:
case 2144:
case 3359:
case 819:
case 1236:
case 865:
case 1829:
case 949:
case 2727:
case 1227:
case 1844:
case 633:
case 2101:
case 575:
case 3324:
case 3583:
case 2585:
case 4036:
case 394:
case 31:
case 850:
case 3388:
case 325:
case 847:
case 2568:
case 2028:
case 2307:
case 3193:
case 680:
case 2981:
case 1996:
case 3568:
case 2486:
case 102:
case 2282:
case 2354:
case 3898:
case 3405:
case 2251:
case 2014:
case 489:
case 1841:
case 1108:
case 1429:
case 683:
case 2775:
case 606:
case 306:
case 2540:
case 2603:
case 4022:
case 3261:
case 2548:
case 794:
case 2238:
case 2607:
case 854:
case 1427:
case 1674:
case 3342:
case 512:
case 3982:
case 3374:
case 4074:
case 4003:
case 607:
case 3673:
case 944:
case 1636:
case 3049:
case 3179:
case 875:
case 1974:
case 2832:
case 3775:
case 1125:
case 1925:
case 3431:
case 3701:
case 3934:
case 392:
case 2020:
case 3183:
case 3363:
case 3750:
case 2554:
case 3587:
case 2823:
case 198:
case 3205:
case 2564:
case 2131:
case 3703:
case 669:
case 2366:
case 616:
case 1508:
case 53:
case 481:
case 3633:
case 2704:
case 3246:
case 2927:
case 3188:
case 1493:
case 1619:
case 3877:
case 2661:
case 3672:
case 3715:
case 2769:
case 3225:
case 1557:
case 1013:
case 2009:
case 737:
case 2134:
case 242:
case 3997:
case 3199:
case 824:
case 577:
case 2402:
case 1530:
case 710:
case 3306:
case 1679:
case 3345:
case 1760:
case 926:
case 332:
case 3337:
case 1217:
case 3850:
case 1572:
case 1398:
case 3966:
case 3396:
case 3699:
case 910:
case 2019:
case 852:
case 2688:
case 147:
case 1981:
case 2965:
case 3932:
case 2645:
case 3968:
case 960:
case 3336:
case 2549:
case 3919:
case 516:
case 121:
case 1148:
case 1851:
case 655:
case 75:
case 2801:
case 3761:
case 1959:
case 280:
case 2109:
case 1151:
case 828:
case 923:
case 71:
case 364:
case 1264:
case 3628:
case 2660:
case 2930:
case 3863:
case 560:
case 1064:
case 2031:
case 134:
case 945:
case 733:
case 532:
case 1995:
case 1074:
case 1038:
case 9:
case 3313:
case 3869:
case 890:
case 3857:
case 1149:
case 626:
case 3061:
case 239:
case 307:
case 495:
case 490:
case 1435:
case 2271:
case 3840:
case 348:
case 643:
case 1684:
case 3870:
case 3249:
case 785:
case 1565:
case 2712:
case 3764:
case 3128:
case 1603:
case 3571:
case 3888:
case 1140:
case 3331:
case 70:
case 2809:
case 3377:
case 3423:
case 196:
case 1744:
case 2262:
case 1525:
case 1017:
case 804:
case 3003:
case 2194:
case 3439:
case 3362:
case 2936:
case 1444:
case 2615:
case 3402:
case 3307:
case 1788:
case 646:
case 1813:
case 1574:
case 688:
case 3097:
case 2201:
case 3477:
case 3101:
case 349:
case 1682:
case 2331:
case 3790:
case 513:
case 3153:
case 4051:
case 1837:
case 1102:
case 2008:
case 2364:
case 400:
case 1937:
case 2922:
case 601:
case 2515:
case 1806:
case 3676:
case 2126:
case 570:
case 2802:
case 3625:
case 2150:
case 266:
case 180:
case 3032:
case 2975:
case 2998:
case 2596:
case 952:
case 1423:
case 3868:
case 3366:
case 959:
case 1885:
case 3923:
case 3192:
case 1501:
case 2500:
case 2439:
case 2779:
case 2042:
case 3243:
case 2602:
case 1325:
case 1061:
case 3048:
case 1169:
case 3501:
case 3838:
case 1982:
case 3581:
case 843:
case 420:
case 651:
case 3413:
case 2600:
case 2952:
case 2427:
case 2463:
case 1546:
case 1798:
case 814:
case 2512:
case 977:
case 3751:
case 3503:
case 987:
case 279:
case 200:
case 3582:
case 3252:
case 1284:
case 98:
case 1135:
case 2465:
case 2937:
case 3201:
case 1119:
case 3924:
case 3312:
case 181:
case 2730:
case 1066:
case 795:
case 380:
case 2071:
case 3165:
case 45:
case 2401:
case 1021:
case 2853:
case 1809:
case 1211:
case 65:
case 2756:
case 176:
case 1458:
case 1173:
case 80:
case 2459:
case 1499:
case 2895:
case 1951:
case 1971:
case 3073:
case 738:
case 3534:
case 859:
case 3347:
case 1305:
case 36:
case 2741:
case 2239:
case 3382:
case 3876:
case 2400:
case 3950:
case 2060:
case 1622:
case 3360:
case 3014:
case 1253:
case 1068:
case 90:
case 3428:
case 506:
case 4089:
case 1056:
case 1766:
case 826:
case 2044:
case 1192:
case 1975:
case 587:
case 215:
case 2229:
case 3734:
case 3299:
case 3902:
case 1919:
case 3597:
case 3789:
case 545:
case 2188:
case 3095:
case 2011:
case 95:
case 2120:
case 1415:
case 3091:
case 1354:
case 3273:
case 3364:
case 3781:
case 1904:
case 2325:
case 2425:
case 1602:
case 2545:
case 3606:
case 2119:
case 1239:
case 765:
case 2747:
case 968:
case 3059:
case 1593:
case 1523:
case 783:
case 632:
case 2389:
case 2838:
case 2950:
case 1831:
case 867:
case 1067:
case 1941:
case 2646:
case 1093:
case 3167:
case 3161:
case 2309:
case 657:
case 73:
case 939:
case 4053:
case 335:
case 3970:
case 1728:
case 437:
case 3216:
case 1651:
case 1779:
case 1629:
case 294:
case 1317:
case 173:
case 1607:
case 930:
case 1753:
case 1625:
case 1355:
case 1091:
case 3643:
case 85:
case 767:
case 1417:
case 1296:
case 1516:
case 2154:
case 2029:
case 375:
case 978:
case 4062:
case 3486:
case 3537:
case 1293:
case 2338:
case 892:
case 1502:
case 1725:
case 3631:
case 1155:
case 3386:
case 2855:
case 3087:
case 1353:
case 4004:
case 2792:
case 2226:
case 3510:
case 958:
case 1404:
case 917:
case 3710:
case 1680:
case 3650:
case 2021:
case 3077:
case 2362:
case 3694:
case 1758:
case 175:
case 3401:
case 2550:
case 486:
case 1895:
case 909:
case 1997:
case 3429:
case 3630:
case 2135:
case 2984:
case 1933:
case 2455:
case 3408:
case 2836:
case 2122:
case 3138:
case 1716:
case 253:
case 270:
case 3927:
case 3132:
case 1893:
case 1152:
case 2330:
case 3264:
case 3469:
case 2958:
case 1529:
case 2396:
case 757:
case 206:
case 451:
case 4037:
case 610:
case 1926:
case 3105:
case 511:
case 3602:
case 1784:
case 3321:
case 2068:
case 3180:
case 3667:
case 2537:
case 1590:
case 230:
case 2799:
case 3949:
case 3640:
case 2866:
case 3209:
case 2955:
case 3598:
case 644:
case 3969:
case 336:
case 3806:
case 3939:
case 3116:
case 1380:
case 1853:
case 88:
case 2709:
case 2461:
case 3287:
case 1866:
case 1646:
case 878:
case 919:
case 3584:
case 86:
case 2233:
case 118:
case 1583:
case 167:
case 3233:
case 3560:
case 26:
case 1057:
case 591:
case 3121:
case 3223:
case 1385:
case 3154:
case 1823:
case 948:
case 69:
case 1162:
case 2831:
case 3615:
case 3458:
case 3092:
case 3006:
case 2065:
case 528:
case 3954:
case 293:
case 603:
case 3757:
case 2105:
case 313:
case 2791:
case 3938:
case 1556:
case 791:
case 1132:
case 800:
case 593:
case 197:
case 3471:
case 1805:
case 2953:
case 2563:
case 246:
case 581:
case 3186:
case 1610:
case 769:
case 3343:
case 1751:
case 3554:
case 1195:
case 1706:
case 3974:
case 3816:
case 2777:
case 2231:
case 438:
case 2027:
case 3052:
case 379:
case 3864:
case 1867:
case 52:
case 3890:
case 339:
case 39:
case 3712:
case 2742:
case 3670:
case 4042:
case 1828:
case 2997:
case 3323:
case 3786:
case 3774:
case 1954:
case 2049:
case 860:
case 207:
case 3075:
case 691:
case 3749:
case 2700:
case 573:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1717905601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,];
var gg_b = "1717905601/";

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
