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
case 86:
case 1137:
case 3844:
case 3820:
case 250:
case 111:
case 3283:
case 93:
case 1174:
case 2700:
case 2951:
case 641:
case 1917:
case 3691:
case 1396:
case 2093:
case 3452:
case 3256:
case 4076:
case 2606:
case 2290:
case 723:
case 1530:
case 173:
case 1657:
case 2173:
case 2611:
case 504:
case 1695:
case 2572:
case 2751:
case 3080:
case 2308:
case 2749:
case 2488:
case 1868:
case 2900:
case 1190:
case 463:
case 3447:
case 329:
case 2689:
case 1896:
case 422:
case 3551:
case 1365:
case 390:
case 208:
case 512:
case 98:
case 4039:
case 3320:
case 221:
case 370:
case 3062:
case 3500:
case 1597:
case 1070:
case 2331:
case 3046:
case 1368:
case 3361:
case 1555:
case 3267:
case 2032:
case 525:
case 135:
case 1499:
case 3276:
case 3585:
case 1240:
case 3428:
case 314:
case 4056:
case 1224:
case 1169:
case 2044:
case 1814:
case 338:
case 1799:
case 2153:
case 2771:
case 2552:
case 1421:
case 3332:
case 2648:
case 57:
case 3663:
case 2061:
case 4083:
case 659:
case 26:
case 3031:
case 2813:
case 850:
case 2186:
case 3425:
case 3472:
case 2547:
case 143:
case 3393:
case 3952:
case 613:
case 1417:
case 821:
case 2449:
case 4067:
case 1522:
case 2985:
case 3687:
case 137:
case 3008:
case 2124:
case 2988:
case 2400:
case 2846:
case 808:
case 2785:
case 1302:
case 3571:
case 3752:
case 3832:
case 3239:
case 1001:
case 2864:
case 194:
case 746:
case 2119:
case 2523:
case 3288:
case 3969:
case 2122:
case 1387:
case 3877:
case 2456:
case 3834:
case 1147:
case 498:
case 3490:
case 3602:
case 2841:
case 2859:
case 3954:
case 2252:
case 503:
case 879:
case 1540:
case 953:
case 724:
case 2694:
case 3285:
case 2178:
case 3769:
case 670:
case 1524:
case 2483:
case 1863:
case 1329:
case 3271:
case 976:
case 3377:
case 4049:
case 4051:
case 1553:
case 3539:
case 1804:
case 2364:
case 1426:
case 919:
case 1278:
case 3437:
case 2042:
case 1275:
case 2803:
case 2066:
case 1632:
case 557:
case 907:
case 2359:
case 3036:
case 4000:
case 1027:
case 2181:
case 705:
case 216:
case 2635:
case 3937:
case 3974:
case 1045:
case 2272:
case 2225:
case 1891:
case 391:
case 3064:
case 3898:
case 480:
case 3117:
case 2158:
case 1644:
case 753:
case 279:
case 3668:
case 10:
case 2643:
case 299:
case 4088:
case 2767:
case 3041:
case 3182:
case 3737:
case 2818:
case 3857:
case 3583:
case 1661:
case 849:
case 430:
case 7:
case 448:
case 3990:
case 1092:
case 2956:
case 555:
case 251:
case 2574:
case 3696:
case 3469:
case 638:
case 1128:
case 1984:
case 1391:
case 144:
case 1297:
case 614:
case 3251:
case 3357:
case 3003:
case 1573:
case 776:
case 536:
case 3842:
case 2130:
case 3454:
case 2756:
case 3395:
case 1258:
case 2836:
case 452:
case 1707:
case 712:
case 1968:
case 2800:
case 1289:
case 2106:
case 3744:
case 2462:
case 3325:
case 459:
case 1765:
case 1157:
case 3432:
case 2673:
case 74:
case 1195:
case 3961:
case 4003:
case 81:
case 1227:
case 1674:
case 2047:
case 3761:
case 842:
case 2849:
case 2731:
case 3328:
case 1965:
case 330:
case 1075:
case 609:
case 2298:
case 1796:
case 465:
case 1081:
case 1860:
case 2908:
case 4041:
case 1142:
case 2413:
case 800:
case 292:
case 2705:
case 3215:
case 1382:
case 1543:
case 3531:
case 1402:
case 1206:
case 3828:
case 2349:
case 2351:
case 413:
case 617:
case 3085:
case 2189:
case 3607:
case 704:
case 2905:
case 1996:
case 523:
case 562:
case 1535:
case 3684:
case 177:
case 2148:
case 1570:
case 3546:
case 2980:
case 3000:
case 4036:
case 1654:
case 925:
case 3562:
case 21:
case 1292:
case 2686:
case 1134:
case 1058:
case 364:
case 1496:
case 1177:
case 441:
case 58:
case 106:
case 1702:
case 1914:
case 2385:
case 2405:
case 197:
case 3049:
case 2780:
case 3051:
case 3461:
case 904:
case 1030:
case 3932:
case 2640:
case 2234:
case 615:
case 3513:
case 3129:
case 2962:
case 3580:
case 2072:
case 2946:
case 1468:
case 872:
case 2885:
case 1465:
case 663:
case 681:
case 2746:
case 2028:
case 3104:
case 4079:
case 1233:
case 3259:
case 53:
case 12:
case 4015:
case 2609:
case 1623:
case 77:
case 3466:
case 1963:
case 3102:
case 2764:
case 3442:
case 402:
case 3734:
case 2194:
case 2678:
case 3854:
case 2959:
case 2436:
case 2941:
case 936:
case 505:
case 2619:
case 4005:
case 1592:
case 889:
case 2675:
case 3977:
case 2741:
case 2759:
case 2622:
case 3323:
case 680:
case 317:
case 3246:
case 3114:
case 2037:
case 1270:
case 757:
case 2074:
case 1533:
case 15:
case 4031:
case 3495:
case 1787:
case 3010:
case 2418:
case 3457:
case 3083:
case 2681:
case 1548:
case 546:
case 1912:
case 1704:
case 1652:
case 2703:
case 2479:
case 3564:
case 118:
case 630:
case 648:
case 524:
case 2415:
case 438:
case 2090:
case 1294:
case 2534:
case 3056:
case 3168:
case 507:
case 596:
case 2143:
case 2566:
case 1791:
case 678:
case 2918:
case 2383:
case 1429:
case 2403:
case 2779:
case 801:
case 3682:
case 4046:
case 315:
case 3995:
case 755:
case 470:
case 2138:
case 3536:
case 1201:
case 1053:
case 3039:
case 519:
case 3998:
case 3390:
case 576:
case 1120:
case 2915:
case 736:
case 3874:
case 322:
case 3617:
case 1144:
case 1216:
case 2979:
case 3837:
case 363:
case 1672:
case 239:
case 2459:
case 553:
case 1511:
case 3660:
case 1235:
case 1506:
case 2557:
case 2883:
case 1463:
case 1040:
case 903:
case 3076:
case 2464:
case 1884:
case 1326:
case 3515:
case 1009:
case 2023:
case 3337:
case 3766:
case 1243:
case 2598:
case 1238:
case 2856:
case 160:
case 3477:
case 2736:
case 2367:
case 2261:
case 1628:
case 3434:
case 3708:
case 3257:
case 4077:
case 3544:
case 878:
case 2607:
case 2085:
case 1656:
case 3520:
case 526:
case 3052:
case 2493:
case 2684:
case 416:
case 1358:
case 1701:
case 1950:
case 1610:
case 420:
case 1750:
case 1916:
case 510:
case 3413:
case 2088:
case 3300:
case 628:
case 3908:
case 499:
case 3480:
case 1397:
case 392:
case 2626:
case 1935:
case 2761:
case 3047:
case 1858:
case 2236:
case 451:
case 3266:
case 3731:
case 2328:
case 3849:
case 1115:
case 3242:
case 186:
case 2944:
case 230:
case 1179:
case 3800:
case 252:
case 1470:
case 2372:
case 2508:
case 2325:
case 1897:
case 2744:
case 1735:
case 864:
case 918:
case 3111:
case 3673:
case 2432:
case 1938:
case 1330:
case 2961:
case 298:
case 3762:
case 1375:
case 3885:
case 784:
case 1770:
case 2420:
case 3746:
case 2241:
case 1021:
case 2852:
case 3371:
case 1438:
case 4057:
case 2461:
case 1881:
case 689:
case 2932:
case 1103:
case 2129:
case 3962:
case 3025:
case 278:
case 1060:
case 3888:
case 880:
case 1502:
case 2112:
case 1017:
case 2847:
case 2352:
case 2993:
case 3405:
case 852:
case 3653:
case 1819:
case 718:
case 2051:
case 3780:
case 2049:
case 358:
case 1164:
case 2203:
case 594:
case 1082:
case 1204:
case 3148:
case 342:
case 2562:
case 848:
case 1878:
case 3980:
case 449:
case 1381:
case 1994:
case 75:
case 3532:
case 1401:
case 1141:
case 3133:
case 1159:
case 3686:
case 639:
case 4042:
case 2369:
case 2280:
case 2213:
case 3703:
case 995:
case 3415:
case 1202:
case 3090:
case 3577:
case 4044:
case 2498:
case 3339:
case 3534:
case 2541:
case 543:
case 3293:
case 1411:
case 2495:
case 975:
case 2083:
case 2457:
case 4061:
case 3876:
case 1563:
case 1146:
case 961:
case 3681:
case 537:
case 1824:
case 72:
case 2934:
case 17:
case 815:
case 3759:
case 1733:
case 3741:
case 672:
case 2323:
case 1489:
case 2869:
case 301:
case 2262:
case 3074:
case 3376:
case 822:
case 933:
case 2102:
case 2699:
case 881:
case 692:
case 1886:
case 863:
case 1745:
case 1324:
case 1180:
case 587:
case 2503:
case 1113:
case 2854:
case 19:
case 2777:
case 1427:
case 3941:
case 3959:
case 209:
case 947:
case 3464:
case 2579:
case 2374:
case 1445:
case 2766:
case 1591:
case 1989:
case 3261:
case 977:
case 2196:
case 3598:
case 2434:
case 339:
case 1433:
case 997:
case 14:
case 795:
case 2660:
case 432:
case 3557:
case 2518:
case 1108:
case 1265:
case 3116:
case 1448:
case 1789:
case 112:
case 3883:
case 642:
case 556:
case 2795:
case 2039:
case 3135:
case 1711:
case 408:
case 2390:
case 733:
case 1651:
case 222:
case 2874:
case 3915:
case 747:
case 104:
case 263:
case 3718:
case 2837:
case 3979:
case 1131:
case 3143:
case 817:
case 4032:
case 2205:
case 2168:
case 3403:
case 3542:
case 92:
case 1906:
case 3918:
case 1873:
case 3655:
case 3310:
case 389:
case 1911:
case 2995:
case 215:
case 3697:
case 593:
case 1296:
case 2798:
case 3054:
case 2500:
case 2972:
case 2062:
case 270:
case 489:
case 3331:
case 1343:
case 1338:
case 560:
case 2361:
case 229:
case 153:
case 2447:
case 1517:
case 3689:
case 1156:
case 308:
case 2772:
case 2549:
case 466:
case 2184:
case 1207:
case 2256:
case 1618:
case 119:
case 3290:
case 649:
case 3606:
case 176:
case 1002:
case 3611:
case 726:
case 1560:
case 1843:
case 840:
case 3749:
case 439:
case 3751:
case 3572:
case 744:
case 3485:
case 2126:
case 2844:
case 196:
case 1014:
case 710:
case 2283:
case 2691:
case 1615:
case 1679:
case 1755:
case 3093:
case 1:
case 518:
case 1870:
case 3400:
case 3124:
case 3380:
case 3269:
case 534:
case 1176:
case 3785:
case 774:
case 202:
case 829:
case 2832:
case 2752:
case 1603:
case 428:
case 699:
case 3254:
case 4074:
case 1096:
case 3788:
case 3449:
case 870:
case 90:
case 794:
case 3692:
case 616:
case 3985:
case 105:
case 910:
case 3648:
case 2332:
case 3061:
case 1719:
case 3880:
case 1068:
case 3223:
case 2031:
case 1370:
case 2588:
case 1659:
case 1722:
case 3633:
case 2472:
case 3362:
case 3020:
case 1778:
case 2276:
case 1975:
case 2947:
case 3645:
case 1664:
case 926:
case 3771:
case 3042:
case 1348:
case 1473:
case 3066:
case 41:
case 632:
case 1662:
case 3554:
case 3341:
case 2036:
case 349:
case 3359:
case 3247:
case 52:
case 859:
case 1892:
case 3467:
case 458:
case 2377:
case 2271:
case 545:
case 1299:
case 241:
case 3364:
case 787:
case 1345:
case 650:
case 154:
case 985:
case 1909:
case 2923:
case 973:
case 0:
case 3859:
case 1833:
case 3841:
case 2199:
case 4072:
case 1171:
case 18:
case 956:
case 4025:
case 3252:
case 2954:
case 3178:
case 506:
case 2285:
case 3694:
case 682:
case 891:
case 1986:
case 3483:
case 3057:
case 2018:
case 3410:
case 1848:
case 2769:
case 577:
case 3119:
case 737:
case 3864:
case 3122:
case 2288:
case 3456:
case 3939:
case 2614:
case 1392:
case 743:
case 2834:
case 2866:
case 1486:
case 3983:
case 547:
case 2160:
case 259:
case 2790:
case 1217:
case 1827:
case 3756:
case 793:
case 2121:
case 2567:
case 1453:
case 1087:
case 3710:
case 4047:
case 711:
case 2200:
case 2696:
case 3783:
case 351:
case 3315:
case 3537:
case 2668:
case 492:
case 1221:
case 561:
case 399:
case 3476:
case 3818:
case 943:
case 1973:
case 1063:
case 3228:
case 2182:
case 3197:
case 2366:
case 3638:
case 271:
case 2937:
case 3879:
case 1584:
case 2423:
case 1389:
case 3225:
case 3815:
case 1151:
case 3272:
case 1149:
case 2974:
case 3158:
case 472:
case 1507:
case 3034:
case 595:
case 2898:
case 379:
case 2665:
case 3077:
case 3802:
case 2775:
case 1472:
case 2641:
case 896:
case 45:
case 2894:
case 8:
case 3154:
case 1332:
case 951:
case 205:
case 418:
case 2664:
case 819:
case 1947:
case 3799:
case 3035:
case 434:
case 1893:
case 610:
case 3224:
case 387:
case 2065:
case 3169:
case 2975:
case 1276:
case 2919:
case 3240:
case 2778:
case 1428:
case 1612:
case 1239:
case 60:
case 3001:
case 4073:
case 2981:
case 1629:
case 2455:
case 979:
case 2176:
case 224:
case 1008:
case 2870:
case 188:
case 246:
case 3519:
case 3123:
case 999:
case 337:
case 1005:
case 3575:
case 3050:
case 2458:
case 1604:
case 1393:
case 484:
case 1013:
case 2843:
case 3982:
case 3695:
case 3530:
case 373:
case 4024:
case 3657:
case 566:
case 2838:
case 2758:
case 2301:
case 3094:
case 393:
case 2615:
case 4009:
case 1691:
case 805:
case 460:
case 311:
case 751:
case 1210:
case 2014:
case 3137:
case 2797:
case 1126:
case 3865:
case 207:
case 3666:
case 1267:
case 3642:
case 2930:
case 4086:
case 3721:
case 2343:
case 846:
case 2582:
case 3597:
case 2478:
case 1728:
case 3960:
case 2226:
case 1925:
case 170:
case 1062:
case 1972:
case 2636:
case 720:
case 3760:
case 3273:
case 694:
case 824:
case 356:
case 4053:
case 1320:
case 1549:
case 1551:
case 190:
case 2335:
case 1107:
case 3558:
case 2517:
case 3190:
case 779:
case 539:
case 1447:
case 253:
case 129:
case 2850:
case 171:
case 782:
case 3661:
case 721:
case 2100:
case 2424:
case 1366:
case 1182:
case 2806:
case 2063:
case 4081:
case 3726:
case 3048:
case 1059:
case 2221:
case 1668:
case 30:
case 88:
case 3230:
case 1665:
case 1556:
case 2507:
case 447:
case 1117:
case 1974:
case 2149:
case 433:
case 3891:
case 191:
case 2260:
case 3926:
case 2773:
case 1423:
case 2827:
case 262:
case 3258:
case 2217:
case 2608:
case 3573:
case 572:
case 1160:
case 732:
case 854:
case 495:
case 1251:
case 3172:
case 1357:
case 1003:
case 2486:
case 3128:
case 475:
case 3984:
case 3391:
case 2004:
case 344:
case 3297:
case 483:
case 461:
case 750:
case 3907:
case 2087:
case 3092:
case 2605:
case 83:
case 2453:
case 1567:
case 3255:
case 1121:
case 1990:
case 1018:
case 3524:
case 3006:
case 4030:
case 3863:
case 558:
case 2986:
case 374:
case 3312:
case 2613:
case 1954:
case 28:
case 2680:
case 908:
case 1602:
case 2833:
case 1834:
case 3147:
case 3281:
case 167:
case 51:
case 1877:
case 921:
case 2091:
case 3484:
case 42:
case 394:
case 3304:
case 1015:
case 2845:
case 477:
case 23:
case 2646:
case 685:
case 673:
case 2662:
case 2940:
case 1723:
case 2348:
case 3219:
case 500:
case 3275:
case 4055:
case 2188:
case 2924:
case 3089:
case 3426:
case 1923:
case 2909:
case 1437:
case 3804:
case 141:
case 3553:
case 406:
case 1334:
case 1377:
case 368:
case 1203:
case 2164:
case 1049:
case 2819:
case 306:
case 3702:
case 2822:
case 397:
case 1993:
case 3134:
case 2017:
case 3899:
case 1793:
case 2159:
case 3055:
case 3292:
case 3654:
case 2416:
case 377:
case 2082:
case 1163:
case 1546:
case 494:
case 1732:
case 1187:
case 1241:
case 1347:
case 3248:
case 257:
case 2263:
case 2770:
case 989:
case 2322:
case 701:
case 1444:
case 836:
case 1112:
case 2378:
case 2060:
case 4011:
case 178:
case 966:
case 2103:
case 3245:
case 1932:
case 3594:
case 2676:
case 474:
case 3399:
case 345:
case 1461:
case 2881:
case 3030:
case 4006:
case 2667:
case 3965:
case 618:
case 3022:
case 3075:
case 1944:
case 148:
case 520:
case 2115:
case 1191:
case 2743:
case 410:
case 361:
case 1761:
case 375:
case 444:
case 1626:
case 1961:
case 1071:
case 2938:
case 3501:
case 1432:
case 2855:
case 3195:
case 3516:
case 1744:
case 3882:
case 1325:
case 269:
case 2118:
case 1720:
case 2470:
case 2943:
case 3968:
case 766:
case 3535:
case 1684:
case 3996:
case 1493:
case 2656:
case 180:
case 1085:
case 1607:
case 3206:
case 3690:
case 684:
case 2565:
case 1825:
case 1531:
case 2291:
case 4033:
case 2916:
case 1279:
case 551:
case 255:
case 2830:
case 2494:
case 4048:
case 3081:
case 3538:
case 2355:
case 2136:
case 1208:
case 3826:
case 163:
case 1165:
case 3384:
case 3991:
case 181:
case 204:
case 772:
case 3404:
case 3589:
case 532:
case 1874:
case 1617:
case 2649:
case 2651:
case 2711:
case 2492:
case 3201:
case 89:
case 1795:
case 3527:
case 3161:
case 2600:
case 4070:
case 900:
case 3250:
case 1957:
case 2906:
case 550:
case 1168:
case 225:
case 3628:
case 3238:
case 360:
case 1477:
case 411:
case 2989:
case 606:
case 827:
case 3009:
case 1231:
case 3243:
case 1374:
case 493:
case 1621:
case 521:
case 1742:
case 677:
case 1966:
case 3463:
case 212:
case 2448:
case 485:
case 1942:
case 1660:
case 24:
case 2433:
case 3672:
case 384:
case 1262:
case 2748:
case 2026:
case 1323:
case 3763:
case 56:
case 2504:
case 2853:
case 1977:
case 1067:
case 2733:
case 3193:
case 992:
case 1934:
case 2587:
case 2427:
case 4016:
case 1854:
case 2113:
case 1503:
case 2324:
case 2745:
case 1466:
case 804:
case 1102:
case 1699:
case 2340:
case 2948:
case 2685:
case 2992:
case 3987:
case 2353:
case 1056:
case 661:
case 4035:
case 2202:
case 3491:
case 2084:
case 3904:
case 3712:
case 3652:
case 3545:
case 2809:
case 1280:
case 758:
case 1369:
case 3548:
case 3704:
case 2563:
case 3929:
case 2386:
case 825:
case 3787:
case 71:
case 2411:
case 695:
case 1559:
case 3060:
case 3970:
case 2245:
case 1072:
case 3103:
case 1962:
case 1025:
case 245:
case 2399:
case 3676:
case 963:
case 3438:
case 981:
case 1277:
case 833:
case 922:
case 3881:
case 3435:
case 2233:
case 1593:
case 3770:
case 717:
case 357:
case 604:
case 2248:
case 3322:
case 3141:
case 3159:
case 567:
case 3994:
case 883:
case 3401:
case 875:
case 931:
case 11:
case 1913:
case 3878:
case 2902:
case 2570:
case 43:
case 612:
case 1148:
case 142:
case 3819:
case 1145:
case 3164:
case 3229:
case 297:
case 1385:
case 2702:
case 2177:
case 303:
case 2496:
case 3017:
case 3450:
case 2134:
case 625:
case 2402:
case 3397:
case 2382:
case 3916:
case 1413:
case 2142:
case 1908:
case 3750:
case 2081:
case 69:
case 3901:
case 3830:
case 355:
case 2796:
case 1561:
case 3610:
case 3355:
case 1298:
case 3683:
case 1127:
case 2821:
case 845:
case 2535:
case 3950:
case 2211:
case 559:
case 247:
case 1905:
case 1520:
case 3656:
case 336:
case 2414:
case 1351:
case 1708:
case 763:
case 2206:
case 3938:
case 3330:
case 513:
case 4012:
case 3855:
case 2501:
case 369:
case 2765:
case 591:
case 1462:
case 3897:
case 2516:
case 897:
case 2360:
case 462:
case 1800:
case 3943:
case 3470:
case 627:
case 571:
case 2075:
case 2022:
case 2965:
case 731:
case 3667:
case 1266:
case 1731:
case 877:
case 2019:
case 3115:
case 2817:
case 3858:
case 2674:
case 2227:
case 2321:
case 3738:
case 4004:
case 275:
case 3935:
case 1810:
case 3448:
case 3789:
case 3373:
case 1883:
case 2024:
case 419:
case 818:
case 1630:
case 2506:
case 1595:
case 476:
case 3927:
case 2672:
case 3433:
case 2628:
case 325:
case 496:
case 1261:
case 3727:
case 1856:
case 1598:
case 2009:
case 3989:
case 1464:
case 730:
case 3600:
case 2527:
case 1054:
case 3911:
case 1697:
case 998:
case 2086:
case 1403:
case 1542:
case 3906:
case 1383:
case 1918:
case 3873:
case 1655:
case 3131:
case 2791:
case 1566:
case 2412:
case 1069:
case 1718:
case 3706:
case 2589:
case 2120:
case 2404:
case 1135:
case 2053:
case 2487:
case 1867:
case 2307:
case 3563:
case 3214:
case 405:
case 1170:
case 588:
case 1681:
case 327:
case 3824:
case 1903:
case 3162:
case 3406:
case 3840:
case 1876:
case 3792:
case 4068:
case 930:
case 948:
case 3688:
case 2533:
case 1339:
case 2987:
case 3992:
case 1534:
case 2294:
case 3685:
case 952:
case 1415:
case 234:
case 2904:
case 2712:
case 3809:
case 2545:
case 218:
case 1703:
case 2652:
case 980:
case 1436:
case 1959:
case 3933:
case 424:
case 655:
case 3324:
case 778:
case 3671:
case 3529:
case 1764:
case 128:
case 3948:
case 2073:
case 514:
case 2963:
case 3512:
case 101:
case 1964:
case 284:
case 2647:
case 2270:
case 3504:
case 2763:
case 3309:
case 3026:
case 3748:
case 636:
case 3489:
case 1759:
case 3733:
case 1741:
case 1839:
case 3853:
case 1232:
case 3587:
case 1619:
case 37:
case 446:
case 1109:
case 2314:
case 346:
case 2522:
case 1451:
case 2286:
case 767:
case 2417:
case 3458:
case 3781:
case 2050:
case 4026:
case 1254:
case 3096:
case 3981:
case 3394:
case 3599:
case 2253:
case 991:
case 3603:
case 2302:
case 2482:
case 49:
case 2016:
case 1380:
case 1645:
case 3664:
case 885:
case 1552:
case 1153:
case 2799:
case 4084:
case 2814:
case 3975:
case 1044:
case 2169:
case 3065:
case 287:
case 1020:
case 3778:
case 4007:
case 3641:
case 1362:
case 1186:
case 517:
case 1880:
case 2460:
case 3068:
case 1223:
case 1813:
case 1346:
case 16:
case 2038:
case 2154:
case 3430:
case 893:
case 1061:
case 2999:
case 662:
case 1648:
case 108:
case 3475:
case 1805:
case 2896:
case 1689:
case 404:
case 2666:
case 1032:
case 3930:
case 2642:
case 765:
case 3226:
case 837:
case 2368:
case 1331:
case 2070:
case 2597:
case 182:
case 771:
case 3110:
case 967:
case 3183:
case 3679:
case 3755:
case 293:
case 1093:
case 3167:
case 2396:
case 515:
case 2917:
case 2174:
case 1949:
case 211:
case 150:
case 1305:
case 3797:
case 2782:
case 425:
case 3843:
case 1525:
case 1308:
case 1572:
case 1751:
case 2695:
case 3002:
case 581:
case 3997:
case 1611:
case 3560:
case 1173:
case 2657:
case 2530:
case 1290:
case 1606:
case 3207:
case 2094:
case 3301:
case 3758:
case 412:
case 3838:
case 941:
case 3526:
case 1650:
case 1315:
case 2297:
case 2984:
case 2128:
case 1574:
case 1379:
case 210:
case 1956:
case 1439:
case 3087:
case 2907:
case 486:
case 2707:
case 3311:
case 605:
case 2258:
case 940:
case 1756:
case 938:
case 1616:
case 914:
case 1130:
case 226:
case 3486:
case 1967:
case 2230:
case 1077:
case 1590:
case 1034:
case 3151:
case 3149:
case 1879:
case 116:
case 1635:
case 3409:
case 3773:
case 3389:
case 3260:
case 770:
case 2661:
case 120:
case 1638:
case 2726:
case 1476:
case 1818:
case 3440:
case 3973:
case 3806:
case 894:
case 988:
case 3327:
case 1336:
case 3811:
case 1155:
case 20:
case 607:
case 2089:
case 2804:
case 578:
case 738:
case 1569:
case 403:
case 3345:
case 740:
case 3299:
case 3892:
case 6:
case 2152:
case 3646:
case 33:
case 3662:
case 619:
case 2027:
case 2219:
case 1976:
case 3709:
case 3940:
case 2632:
case 3473:
case 3924:
case 2275:
case 810:
case 1098:
case 2147:
case 1939:
case 970:
case 3392:
case 2407:
case 2693:
case 4021:
case 1175:
case 788:
case 1119:
case 294:
case 2484:
case 3091:
case 2329:
case 3986:
case 2006:
case 1178:
case 274:
case 702:
case 2540:
case 3680:
case 3171:
case 3613:
case 2011:
case 1095:
case 564:
case 990:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750564802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,];
var gg_b = "1750564802/";

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
