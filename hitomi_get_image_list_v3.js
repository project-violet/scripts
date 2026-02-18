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
case 2879:
case 411:
case 1354:
case 3663:
case 3707:
case 3833:
case 311:
case 3000:
case 151:
case 3974:
case 3286:
case 3562:
case 3205:
case 1162:
case 30:
case 40:
case 52:
case 2657:
case 1503:
case 545:
case 1076:
case 214:
case 3483:
case 3336:
case 1679:
case 1790:
case 937:
case 1097:
case 2719:
case 1857:
case 621:
case 838:
case 1396:
case 1651:
case 2963:
case 3745:
case 4037:
case 2693:
case 3037:
case 3730:
case 1148:
case 1377:
case 909:
case 706:
case 93:
case 665:
case 2414:
case 3957:
case 2674:
case 3401:
case 2592:
case 3247:
case 2518:
case 1415:
case 3181:
case 2715:
case 4022:
case 2546:
case 527:
case 2359:
case 407:
case 3444:
case 1531:
case 25:
case 3309:
case 226:
case 2475:
case 3178:
case 759:
case 138:
case 2420:
case 956:
case 945:
case 2500:
case 1720:
case 1027:
case 3630:
case 3860:
case 2561:
case 1032:
case 1751:
case 537:
case 2259:
case 3087:
case 3372:
case 2793:
case 3844:
case 2176:
case 675:
case 2197:
case 1474:
case 1242:
case 3923:
case 1690:
case 1779:
case 2021:
case 4092:
case 1960:
case 3305:
case 2619:
case 509:
case 2479:
case 2238:
case 2016:
case 585:
case 1254:
case 1823:
case 2537:
case 257:
case 3046:
case 3607:
case 2153:
case 690:
case 3591:
case 1268:
case 3649:
case 4046:
case 2050:
case 1326:
case 3167:
case 3236:
case 1901:
case 1457:
case 4018:
case 1311:
case 2979:
case 1550:
case 1181:
case 2760:
case 3933:
case 2880:
case 829:
case 333:
case 3620:
case 2744:
case 122:
case 107:
case 4053:
case 1022:
case 1680:
case 4082:
case 2312:
case 3651:
case 652:
case 328:
case 1037:
case 2902:
case 508:
case 3148:
case 1548:
case 3377:
case 2445:
case 3121:
case 1521:
case 1957:
case 3116:
case 721:
case 1247:
case 3226:
case 2863:
case 3076:
case 254:
case 3419:
case 2633:
case 1483:
case 2204:
case 3679:
case 3790:
case 903:
case 3097:
case 3211:
case 4076:
case 765:
case 2920:
case 1061:
case 3602:
case 2241:
case 1749:
case 560:
case 2951:
case 1707:
case 2527:
case 1993:
case 832:
case 351:
case 1000:
case 516:
case 1286:
case 1974:
case 139:
case 10:
case 2752:
case 0:
case 2228:
case 1452:
case 1103:
case 3191:
case 1591:
case 2122:
case 1649:
case 2463:
case 1883:
case 3819:
case 3326:
case 1236:
case 3901:
case 3457:
case 3311:
case 3690:
case 3960:
case 1305:
case 1433:
case 2328:
case 2807:
case 2733:
case 1915:
case 908:
case 1092:
case 2341:
case 3254:
case 2582:
case 807:
case 2137:
case 323:
case 4032:
case 811:
case 1860:
case 2298:
case 2161:
case 1645:
case 1087:
case 1372:
case 503:
case 595:
case 2576:
case 3952:
case 3614:
case 404:
case 524:
case 3474:
case 3242:
case 1923:
case 3775:
case 1131:
case 3531:
case 1309:
case 2003:
case 3983:
case 1919:
case 2830:
case 1347:
case 731:
case 3578:
case 1178:
case 2660:
case 613:
case 3296:
case 2212:
case 338:
case 916:
case 2100:
case 3277:
case 494:
case 34:
case 89:
case 1273:
case 425:
case 44:
case 1175:
case 394:
case 3052:
case 593:
case 3892:
case 1987:
case 1120:
case 3400:
case 1294:
case 2193:
case 3927:
case 3180:
case 3551:
case 1151:
case 3461:
case 2850:
case 230:
case 2295:
case 2090:
case 1621:
case 615:
case 1476:
case 3083:
case 1497:
case 2313:
case 4083:
case 3846:
case 2174:
case 1616:
case 700:
case 2014:
case 1827:
case 264:
case 1179:
case 1256:
case 949:
case 2862:
case 3437:
case 550:
case 347:
case 1453:
case 1102:
case 3265:
case 461:
case 4044:
case 3422:
case 2299:
case 3044:
case 1563:
case 3163:
case 1210:
case 2753:
case 184:
case 447:
case 768:
case 1662:
case 679:
case 3603:
case 3767:
case 3060:
case 3234:
case 1356:
case 2270:
case 2020:
case 2653:
case 1961:
case 905:
case 1549:
case 2123:
case 993:
case 763:
case 2462:
case 696:
case 989:
case 778:
case 1762:
case 2225:
case 2978:
case 582:
case 2119:
case 144:
case 2583:
case 3822:
case 3590:
case 1190:
case 1224:
case 2891:
case 19:
case 387:
case 1853:
case 2051:
case 2732:
case 1900:
case 3487:
case 1310:
case 1432:
case 2682:
case 1530:
case 48:
case 3130:
case 1394:
case 672:
case 3953:
case 3145:
case 2676:
case 3514:
case 335:
case 2421:
case 3800:
case 1716:
case 2229:
case 2967:
case 2416:
case 435:
case 2697:
case 4033:
case 2115:
case 2450:
case 1750:
case 2213:
case 3781:
case 2560:
case 2002:
case 1937:
case 1897:
case 3369:
case 2395:
case 1876:
case 2544:
case 147:
case 2948:
case 3102:
case 1265:
case 1502:
case 88:
case 1422:
case 3791:
case 161:
case 277:
case 3563:
case 3210:
case 1163:
case 384:
case 3832:
case 1887:
case 566:
case 3015:
case 4015:
case 2557:
case 1603:
case 1767:
case 835:
case 1234:
case 1060:
case 2240:
case 281:
case 3308:
case 3827:
case 1384:
case 2950:
case 1001:
case 2803:
case 2264:
case 3482:
case 2045:
case 1437:
case 600:
case 1269:
case 1551:
case 3151:
case 1461:
case 3648:
case 2881:
case 3621:
case 655:
case 3019:
case 1083:
case 3497:
case 2389:
case 4019:
case 2962:
case 1846:
case 646:
case 2574:
case 2692:
case 3616:
case 3650:
case 2431:
case 3023:
case 887:
case 125:
case 3175:
case 2239:
case 1052:
case 1932:
case 1343:
case 3987:
case 3120:
case 779:
case 2049:
case 3294:
case 673:
case 1861:
case 2481:
case 910:
case 1678:
case 2289:
case 3057:
case 2718:
case 769:
case 3937:
case 663:
case 3897:
case 796:
case 1369:
case 1446:
case 2063:
case 2600:
case 497:
case 592:
case 1243:
case 847:
case 3394:
case 2661:
case 1953:
case 3545:
case 1145:
case 2792:
case 3716:
case 1800:
case 2101:
case 3721:
case 1492:
case 2339:
case 344:
case 1590:
case 894:
case 4074:
case 3074:
case 2080:
case 2787:
case 3900:
case 1365:
case 1487:
case 2358:
case 2867:
case 3310:
case 3432:
case 171:
case 3691:
case 2364:
case 3961:
case 1107:
case 3427:
case 1149:
case 3549:
case 2523:
case 1703:
case 588:
case 3208:
case 3762:
case 1284:
case 2152:
case 2335:
case 2403:
case 576:
case 2818:
case 3850:
case 2461:
case 841:
case 2551:
case 430:
case 1593:
case 4090:
case 3174:
case 968:
case 1574:
case 1962:
case 676:
case 2052:
case 2575:
case 294:
case 1618:
case 1431:
case 24:
case 3848:
case 955:
case 2892:
case 3816:
case 2520:
case 2343:
case 749:
case 1007:
case 1646:
case 2932:
case 643:
case 3753:
case 3627:
case 177:
case 782:
case 261:
case 2044:
case 2422:
case 1258:
case 692:
case 1722:
case 2502:
case 2265:
case 247:
case 1306:
case 2234:
case 1385:
case 1916:
case 86:
case 464:
case 364:
case 3533:
case 3014:
case 181:
case 2437:
case 3632:
case 3862:
case 3782:
case 1264:
case 3370:
case 1737:
case 1206:
case 1285:
case 750:
case 87:
case 742:
case 3978:
case 474:
case 1358:
case 568:
case 1637:
case 573:
case 1787:
case 1080:
case 1622:
case 271:
case 3270:
case 2976:
case 3552:
case 3075:
case 4075:
case 2667:
case 1340:
case 2703:
case 2837:
case 1523:
case 546:
case 3123:
case 1718:
case 1:
case 2781:
case 2678:
case 1481:
case 2631:
case 2861:
case 3115:
case 2418:
case 1746:
case 1063:
case 3395:
case 420:
case 2446:
case 2369:
case 2982:
case 500:
case 3002:
case 2145:
case 2953:
case 610:
case 1991:
case 1878:
case 2130:
case 683:
case 1339:
case 3416:
case 3501:
case 3079:
case 3229:
case 1101:
case 978:
case 2514:
case 2033:
case 3676:
case 3235:
case 2918:
case 2179:
case 3950:
case 1981:
case 1533:
case 381:
case 1632:
case 788:
case 1862:
case 776:
case 1782:
case 3030:
case 979:
case 4045:
case 2256:
case 3737:
case 3803:
case 1627:
case 377:
case 3258:
case 1491:
case 3948:
case 572:
case 2324:
case 3921:
case 3557:
case 1157:
case 3916:
case 649:
case 962:
case 3478:
case 682:
case 1329:
case 874:
case 3618:
case 2023:
case 2650:
case 1848:
case 1821:
case 915:
case 2120:
case 1816:
case 2987:
case 3646:
case 3007:
case 2648:
case 1850:
case 2580:
case 3593:
case 1193:
case 191:
case 3692:
case 1174:
case 3574:
case 569:
case 3962:
case 2497:
case 2476:
case 2545:
case 1448:
case 650:
case 2394:
case 2922:
case 642:
case 3878:
case 3339:
case 1079:
case 2721:
case 1229:
case 3101:
case 3792:
case 2373:
case 2057:
case 3:
case 1560:
case 46:
case 36:
case 972:
case 1115:
case 1544:
case 3063:
case 120:
case 1395:
case 4063:
case 2937:
case 1002:
case 3622:
case 562:
case 2961:
case 3364:
case 367:
case 1020:
case 441:
case 515:
case 3403:
case 3335:
case 1075:
case 1462:
case 3523:
case 3206:
case 2074:
case 2224:
case 3519:
case 1119:
case 3183:
case 605:
case 1978:
case 2432:
case 4080:
case 2310:
case 783:
case 3358:
case 3867:
case 1399:
case 3637:
case 2900:
case 3787:
case 1732:
case 3080:
case 1783:
case 580:
case 3490:
case 154:
case 1975:
case 314:
case 1863:
case 3132:
case 1187:
case 3587:
case 2000:
case 211:
case 1366:
case 2833:
case 1527:
case 3980:
case 1951:
case 1407:
case 603:
case 2749:
case 1241:
case 906:
case 3338:
case 3723:
case 2103:
case 1228:
case 2452:
case 20:
case 239:
case 3371:
case 2974:
case 624:
case 952:
case 1760:
case 2181:
case 1979:
case 3518:
case 737:
case 1118:
case 2444:
case 3359:
case 1146:
case 207:
case 3091:
case 3217:
case 2730:
case 2037:
case 817:
case 670:
case 3963:
case 1312:
case 2680:
case 1430:
case 3820:
case 3592:
case 1192:
case 2401:
case 3674:
case 2957:
case 1701:
case 2209:
case 2372:
case 2087:
case 3259:
case 2645:
case 1298:
case 2780:
case 3451:
case 2860:
case 3317:
case 3949:
case 1601:
case 913:
case 616:
case 3176:
case 727:
case 3774:
case 2178:
case 4062:
case 2347:
case 45:
case 1003:
case 506:
case 3062:
case 1644:
case 1100:
case 3420:
case 2801:
case 457:
case 3890:
case 1122:
case 3945:
case 357:
case 4050:
case 1914:
case 3388:
case 1304:
case 2236:
case 3050:
case 2092:
case 3016:
case 2915:
case 3479:
case 1733:
case 1683:
case 1849:
case 4016:
case 3271:
case 2386:
case 518:
case 1266:
case 756:
case 1582:
case 959:
case 1341:
case 3445:
case 857:
case 228:
case 2651:
case 3312:
case 1592:
case 136:
case 1674:
case 958:
case 2121:
case 1414:
case 1715:
case 2342:
case 1851:
case 2675:
case 3760:
case 2581:
case 703:
case 63:
case 3067:
case 1518:
case 795:
case 1359:
case 3744:
case 2620:
case 233:
case 2874:
case 724:
case 251:
case 1127:
case 1980:
case 3407:
case 1879:
case 2602:
case 3078:
case 4031:
case 3752:
case 2162:
case 1719:
case 2679:
case 1802:
case 3975:
case 354:
case 114:
case 1355:
case 3920:
case 2368:
case 2857:
case 1479:
case 1238:
case 3807:
case 3733:
case 1619:
case 2779:
case 1021:
case 558:
case 3137:
case 3266:
case 3582:
case 1182:
case 1048:
case 627:
case 1930:
case 3463:
case 1255:
case 1890:
case 2191:
case 1153:
case 3553:
case 317:
case 157:
case 4081:
case 565:
case 2567:
case 2901:
case 3304:
case 1757:
case 1050:
case 2578:
case 1475:
case 3830:
case 2983:
case 3990:
case 126:
case 3003:
case 3845:
case 31:
case 2775:
case 708:
case 1814:
case 3100:
case 2720:
case 521:
case 975:
case 2296:
case 2815:
case 1259:
case 2032:
case 1561:
case 223:
case 2474:
case 656:
case 1197:
case 3597:
case 204:
case 645:
case 1176:
case 2952:
case 62:
case 3332:
case 3943:
case 2765:
case 1465:
case 3824:
case 3799:
case 3670:
case 3253:
case 885:
case 1434:
case 809:
case 2136:
case 2267:
case 1538:
case 701:
case 1606:
case 2440:
case 231:
case 528:
case 1764:
case 3327:
case 290:
case 71:
case 657:
case 904:
case 3598:
case 2769:
case 1559:
case 1469:
case 2643:
case 3629:
case 923:
case 3297:
case 626:
case 2381:
case 65:
case 2439:
case 2278:
case 316:
case 1392:
case 1843:
case 938:
case 3473:
case 1924:
case 1739:
case 12:
case 1200:
case 3494:
case 551:
case 2041:
case 2596:
case 3512:
case 1112:
case 933:
case 1869:
case 1639:
case 2489:
case 3397:
case 3376:
case 1218:
case 265:
case 1036:
case 370:
case 212:
case 1246:
case 3117:
case 1517:
case 3695:
case 827:
case 3873:
case 802:
case 3965:
case 185:
case 2669:
case 2839:
case 2147:
case 928:
case 1292:
case 2109:
case 3934:
case 13:
case 109:
case 424:
case 2406:
case 1588:
case 395:
case 1865:
case 1635:
case 3042:
case 2485:
case 1973:
case 3504:
case 2526:
case 3810:
case 856:
case 324:
case 403:
case 1287:
case 1322:
case 1994:
case 3353:
case 1658:
case 538:
case 1337:
case 221:
case 3969:
case 3077:
case 2995:
case 2665:
case 1141:
case 2203:
case 3856:
case 2864:
case 3725:
case 2784:
case 3408:
case 614:
case 2186:
case 42:
case 1613:
case 3689:
case 4005:
case 4086:
case 116:
case 445:
case 2773:
case 3843:
case 824:
case 2985:
case 456:
case 3086:
case 895:
case 2906:
case 2177:
case 3200:
case 2794:
case 511:
case 1512:
case 3112:
case 3261:
case 3198:
case 1629:
case 2088:
case 3908:
case 1984:
case 280:
case 1026:
case 2350:
case 61:
case 3318:
case 3538:
case 3740:
case 4009:
case 3047:
case 2362:
case 1171:
case 3735:
case 3237:
case 870:
case 3166:
case 929:
case 1327:
case 3764:
case 2154:
case 1282:
case 1808:
case 726:
case 1456:
case 617:
case 522:
case 427:
case 1943:
case 3222:
case 3555:
case 1155:
case 3387:
case 2017:
case 1824:
case 2168:
case 2291:
case 2710:
case 1253:
case 1625:
case 1699:
case 1382:
case 90:
case 2610:
case 1969:
case 1541:
case 206:
case 1856:
case 3484:
case 2262:
case 1408:
case 911:
case 2586:
case 2111:
case 1188:
case 3865:
case 3973:
case 1042:
case 3104:
case 3785:
case 1810:
case 3706:
case 2126:
case 1232:
case 860:
case 103:
case 1353:
case 3664:
case 337:
case 485:
case 3443:
case 3910:
case 409:
case 2547:
case 43:
case 834:
case 2038:
case 3292:
case 2216:
case 1729:
case 2221:
case 33:
case 309:
case 2940:
case 2413:
case 3639:
case 922:
case 2250:
case 1376:
case 3218:
case 2935:
case 2572:
case 240:
case 170:
case 252:
case 3246:
case 3517:
case 1068:
case 3374:
case 383:
case 399:
case 1513:
case 1189:
case 499:
case 483:
case 3215:
case 2938:
case 3717:
case 1244:
case 272:
case 310:
case 142:
case 1954:
case 410:
case 4010:
case 1065:
case 2772:
case 4056:
case 1968:
case 2955:
case 348:
case 2143:
case 898:
case 741:
case 2812:
case 3896:
case 1529:
case 2709:
case 1201:
case 3129:
case 2035:
case 767:
case 3411:
case 3638:
case 3868:
case 2404:
case 296:
case 3426:
case 3219:
case 1283:
case 7:
case 76:
case 1069:
case 1977:
case 1741:
case 3094:
case 2786:
case 4073:
case 1525:
case 2705:
case 2428:
case 2039:
case 1405:
case 1728:
case 2508:
case 3854:
case 2866:
case 3223:
case 105:
case 2636:
case 1158:
case 198:
case 2804:
case 3558:
case 1599:
case 3468:
case 1436:
case 3319:
case 1383:
case 984:
case 3947:
case 3535:
case 1352:
case 279:
case 1140:
case 3738:
case 3540:
case 2466:
case 77:
case 2917:
case 392:
case 3454:
case 2307:
case 3564:
case 597:
case 850:
case 3972:
case 1344:
case 2498:
case 3195:
case 1595:
case 2280:
case 2169:
case 1798:
case 893:
case 3986:
case 2085:
case 2647:
case 805:
case 3905:
case 59:
case 1872:
case 4024:
case 4008:
case 1926:
case 3539:
case 1084:
case 476:
case 1301:
case 488:
case 376:
case 215:
case 1712:
case 3617:
case 262:
case 1847:
case 3496:
case 2330:
case 843:
case 389:
case 2838:
case 3570:
case 2668:
case 493:
case 971:
case 525:
case 3525:
case 2584:
case 3252:
case 54:
case 3333:
case 3405:
case 1854:
case 3942:
case 1223:
case 3486:
case 305:
case 1506:
case 3106:
case 1638:
case 2488:
case 3704:
case 1357:
case 720:
case 1585:
case 2290:
case 888:
case 3996:
case 2095:
case 2654:
case 4069:
case 3836:
case 667:
case 3977:
case 3069:
case 987:
case 3698:
case 3968:
case 935:
case 286:
case 148:
case 2543:
case 1056:
case 2375:
case 1896:
case 1936:
case 6:
case 2642:
case 3409:
case 66:
case 1877:
case 3189:
case 1113:
case 3034:
case 1215:
case 774:
case 1717:
case 4065:
case 3244:
case 2099:
case 547:
case 110:
case 2677:
case 2351:
case 2696:
case 3612:
case 450:
case 3065:
case 2417:
case 892:
case 561:
case 2025:
case 2275:
case 1539:
case 3139:
case 3084:
case 246:
case 3301:
case 188:
case 176:
case 255:
case 4084:
case 94:
case 2796:
case 3712:
case 3809:
case 925:
case 764:
case 2220:
case 3847:
case 2777:
case 2941:
case 3344:
case 273:
case 1195:
case 3595:
case 1759:
case 268:
case 1986:
case 1274:
case 1442:
case 3360:
case 382:
case 1905:
case 2928:
case 587:
case 1315:
case 449:
case 2611:
case 883:
case 3233:
case 3604:
case 3140:
case 4043:
case 677:
case 3886:
case 192:
case 1564:
case 2754:
case 1972:
case 3043:
case 200:
case 1826:
case 3158:
case 1558:
case 2455:
case 2768:
case 3641:
case 498:
case 947:
case 3628:
case 3436:
case 681:
case 791:
case 3230:
case 163:
case 1543:
case 2056:
case 800:
case 1320:
case 178:
case 2659:
case 4064:
case 1214:
case 4035:
case 3040:
case 4040:
case 581:
case 2129:
case 2936:
case 3709:
case 1375:
case 3938:
case 1859:
case 2113:
case 2589:
case 299:
case 1966:
case 2842:
case 3772:
case 3380:
case 472:
case 1696:
case 9:
case 577:
case 96:
case 2717:
case 68:
case 2170:
case 3441:
case 1838:
case 3207:
case 3959:
case 1871:
case 941:
case 3866:
case 57:
case 2854:
case 3508:
case 4039:
case 3184:
case 3705:
case 2125:
case 3786:
case 797:
case 1711:
case 846:
case 2426:
case 1855:
case 2671:
case 2357:
case 2638:
case 1488:
case 2506:
case 1726:
case 671:
case 1654:
case 1095:
case 1912:
case 2323:
case 2540:
case 2738:
case 379:
case 2535:
case 1029:
case 2771:
case 1438:
case 1279:
case 3556:
case 1156:
case 1754:
case 3828:
case 292:
case 3917:
case 3349:
case 981:
case 2811:
case 878:
case 3165:
case 2199:
case 1768:
case 3804:
case 100:
case 2826:
case 3510:
case 886:
case 977:
case 2319:
case 1390:
case 56:
case 3134:
case 1013:
case 1534:
case 1314:
case 155:
case 415:
case 146:
case 2539:
case 1275:
case 1025:
case 2496:
case 1777:
case 3412:
case 97:
case 362:
case 541:
case 2617:
case 1194:
case 3594:
case 462:
case 567:
case 2293:
case 243:
case 2759:
case 3280:
case 2195:
case 1941:
case 1742:
case 2315:
case 64:
case 3609:
case 4006:
case 625:
case 3006:
case 2024:
case 2274:
case 1817:
case 2283:
case 3711:
case 169:
case 3855:
case 2185:
case 3124:
case 1524:
case 2704:
case 3488:
case 815:
case 2106:
case 530:
case 4095:
case 2977:
case 3302:
case 591:
case 1363:
case 2996:
case 735:
case 1207:
case 205:
case 1636:
case 2486:
case 644:
case 2942:
case 1508:
case 2333:
case 1039:
case 1184:
case 1428:
case 1705:
case 69:
case 78:
case 1938:
case 1898:
case 2034:
case 2189:
case 2513:
case 1971:
case 3966:
case 3417:
case 1772:
case 2612:
case 3696:
case 3677:
case 250:
case 2244:
case 2472:
case 1058:
case 1064:
case 1143:
case 363:
case 386:
case 1955:
case 463:
case 1245:
case 1747:
case 771:
case 2201:
case 2529:
case 1709:
case 3375:
case 473:
case 1280:
case 1169:
case 3459:
case 1498:
case 468:
case 3941:
case 747:
case 3742:
case 2872:
case 1085:
case 3817:
case 4025:
case 3314:
case 3904:
case 869:
case 346:
case 2139:
case 3275:
case 1412:
case 162:
case 3194:
case 1672:
case 2712:
case 1345:
case 400:
case 2641:
case 1165:
case 3202:
case 3565:
case 3768:
case 1804:
case 1263:
case 2383:
case 2436:
case 1686:
case 1736:
case 3013:
case 1089:
case 3471:
case 2604:
case 2233:
case 3626:
case 3611:
case 179:
case 1841:
case 3279:
case 2043:
case 3754:
case 1307:
case 725:
case 2164:
case 964:
case 2805:
case 1349:
case 159:
case 1989:
case 3913:
case 419:
case 2138:
case 1624:
case 1825:
case 2282:
case 2808:
case 1154:
case 2327:
case 852:
case 2253:
case 1710:
case 3568:
case 2670:
case 1168:
case 2824:
case 704:
case 1017:
case 2155:
case 2943:
case 3765:
case 818:
case 2332:
case 3734:
case 3136:
case 629:
case 2625:
case 3231:
case 1906:
case 4028:
case 1321:
case 2473:
case 475:
case 375:
case 1316:
case 3028:
case 3278:
case 2613:
case 2512:
case 3041:
case 632:
case 2494:
case 4041:
case 1348:
case 3577:
case 260:
case 113:
case 3643:
case 2795:
case 1813:
case 1495:
case 2159:
case 2598:
case 3970:
case 1350:
case 806:
case 3381:
case 2984:
case 554:
case 1142:
case 3839:
case 607:
case 358:
case 2894:
case 1221:
case 2729:
case 1071:
case 751:
case 2376:
case 2397:
case 1413:
case 312:
case 270:
case 152:
case 517:
case 1694:
case 1572:
case 501:
case 3835:
case 421:
case 2096:
case 3995:
case 2077:
case 2227:
case 1610:
case 321:
case 2699:
case 3840:
case 3186:
case 1586:
case 2725:
case 1262:
case 2528:
case 51:
case 3864:
case 2856:
case 3203:
case 733:
case 224:
case 1126:
case 2810:
case 1899:
case 2504:
case 3858:
case 60:
case 3485:
case 295:
case 3511:
case 3406:
case 203:
case 1391:
case 2232:
case 611:
case 1643:
case 821:
case 2469:
case 2346:
case 3495:
case 2559:
case 413:
case 1970:
case 4088:
case 2318:
case 3350:
case 1381:
case 480:
case 2908:
case 3142:
case 1542:
case 1231:
case 2739:
case 3906:
case 245:
case 3321:
case 604:
case 175:
case 256:
case 3773:
case 3316:
case 2689:
case 2112:
case 1596:
case 926:
case 1041:
case 2200:
case 95:
case 1806:
case 3168:
case 2758:
case 2465:
case 3499:
case 1765:
case 858:
case 1136:
case 3536:
case 732:
case 1684:
case 957:
case 2735:
case 2009:
case 2571:
case 1440:
case 119:
case 459:
case 2047:
case 1435:
case 2685:
case 3870:
case 2538:
case 2884:
case 3825:
case 1554:
case 812:
case 2166:
case 131:
case 1526:
case 2706:
case 3899:
case 707:
case 2104:
case 2640:
case 1367:
case 1858:
case 2834:
case 237:
case 3656:
case 2287:
case 3059:
case 1098:
case 3470:
case 1835:
case 1012:
case 1995:
case 2337:
case 1840:
case 1186:
case 1784:
case 1105:
case 2128:
case 1634:
case 1864:
case 1203:
case 3673:
case 3895:
case 2789:
case 3250:
case 1489:
case 3413:
case 2639:
case 3940:
case 2517:
case 4055:
case 628:
case 352:
case 831:
case 3964:
case 2361:
case 452:
case 890:
case 3572:
case 633:
case 1669:
case 2443:
case 70:
case 2300:
case 1331:
case 4038:
case 1109:
case 3221:
case 3071:
case 4071:
case 3038:
case 3429:
case 1378:
case 3547:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1771398001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,];
var gg_b = "1771398001/";

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
