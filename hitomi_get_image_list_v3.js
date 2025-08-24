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
case 2051:
case 2663:
case 1691:
case 812:
case 3093:
case 1126:
case 2334:
case 4040:
case 2503:
case 1738:
case 2964:
case 2055:
case 3152:
case 3080:
case 2420:
case 1162:
case 654:
case 1757:
case 526:
case 1778:
case 2854:
case 1154:
case 4016:
case 3164:
case 551:
case 2862:
case 1312:
case 2786:
case 246:
case 3869:
case 3046:
case 3736:
case 165:
case 3620:
case 3128:
case 2740:
case 47:
case 2159:
case 415:
case 350:
case 1197:
case 558:
case 1339:
case 645:
case 4086:
case 2070:
case 2514:
case 3792:
case 2716:
case 1453:
case 859:
case 1596:
case 1700:
case 585:
case 2897:
case 2349:
case 971:
case 801:
case 3088:
case 1662:
case 3652:
case 1016:
case 3504:
case 3590:
case 3333:
case 79:
case 695:
case 1502:
case 2000:
case 2094:
case 686:
case 3373:
case 1309:
case 3583:
case 1626:
case 2163:
case 338:
case 862:
case 2220:
case 2542:
case 2891:
case 1040:
case 1730:
case 1863:
case 1195:
case 546:
case 732:
case 2078:
case 1708:
case 2920:
case 3018:
case 808:
case 3761:
case 3263:
case 115:
case 2383:
case 237:
case 2573:
case 2464:
case 465:
case 3765:
case 982:
case 3342:
case 2748:
case 3513:
case 3120:
case 3240:
case 1480:
case 1630:
case 2301:
case 2305:
case 4059:
case 872:
case 2967:
case 2838:
case 169:
case 3566:
case 2461:
case 855:
case 2186:
case 1754:
case 2878:
case 3764:
case 589:
case 2587:
case 3329:
case 3606:
case 3167:
case 920:
case 1288:
case 3752:
case 1886:
case 3448:
case 888:
case 1762:
case 2292:
case 3537:
case 2648:
case 2140:
case 3136:
case 1651:
case 990:
case 3661:
case 2992:
case 3940:
case 1100:
case 1194:
case 2517:
case 844:
case 3888:
case 968:
case 943:
case 1816:
case 1446:
case 2366:
case 58:
case 64:
case 1568:
case 2116:
case 3577:
case 2800:
case 2894:
case 3387:
case 69:
case 2686:
case 3507:
case 911:
case 3535:
case 1280:
case 2350:
case 3440:
case 1678:
case 469:
case 940:
case 2699:
case 1910:
case 3416:
case 3846:
case 3385:
case 289:
case 1488:
case 1638:
case 997:
case 786:
case 119:
case 2830:
case 1293:
case 2763:
case 1791:
case 152:
case 918:
case 1323:
case 927:
case 2054:
case 1694:
case 3499:
case 2961:
case 2808:
case 1560:
case 2062:
case 3692:
case 2335:
case 2616:
case 2851:
case 3165:
case 2640:
case 3893:
case 2148:
case 1155:
case 3720:
case 2585:
case 2467:
case 1347:
case 2375:
case 28:
case 11:
case 2026:
case 1246:
case 1848:
case 1418:
case 824:
case 3315:
case 2581:
case 376:
case 3636:
case 3486:
case 1926:
case 1864:
case 1372:
case 1297:
case 1582:
case 557:
case 3420:
case 1718:
case 3374:
case 1852:
case 839:
case 3584:
case 4092:
case 2164:
case 1962:
case 3663:
case 3051:
case 2093:
case 3228:
case 3826:
case 1332:
case 1954:
case 330:
case 4036:
case 425:
case 1389:
case 2259:
case 3252:
case 1495:
case 970:
case 3514:
case 516:
case 1006:
case 531:
case 2776:
case 3928:
case 3897:
case 2384:
case 2463:
case 1512:
case 2574:
case 1828:
case 1226:
case 266:
case 2046:
case 1319:
case 2534:
case 486:
case 3159:
case 250:
case 1327:
case 3740:
case 769:
case 1153:
case 874:
case 803:
case 973:
case 1544:
case 1497:
case 775:
case 67:
case 3891:
case 3542:
case 351:
case 1325:
case 2504:
case 3428:
case 2652:
case 1991:
case 2963:
case 445:
case 807:
case 2664:
case 3000:
case 2333:
case 253:
case 3464:
case 3573:
case 2263:
case 1793:
case 1291:
case 1509:
case 2765:
case 186:
case 1295:
case 3038:
case 2120:
case 2342:
case 385:
case 1462:
case 3748:
case 1669:
case 679:
case 3659:
case 396:
case 3057:
case 195:
case 3304:
case 1780:
case 4006:
case 3533:
case 2018:
case 550:
case 1426:
case 2317:
case 1867:
case 3878:
case 2764:
case 1294:
case 3461:
case 1610:
case 2999:
case 3377:
case 3465:
case 2752:
case 3358:
case 3292:
case 1368:
case 1455:
case 2216:
case 3199:
case 2986:
case 3337:
case 1020:
case 2522:
case 106:
case 3967:
case 1978:
case 3838:
case 1957:
case 305:
case 963:
case 1408:
case 4028:
case 1356:
case 149:
case 2888:
case 1541:
case 49:
case 2940:
case 2176:
case 887:
case 3267:
case 910:
case 3936:
case 576:
case 3894:
case 3116:
case 1680:
case 1430:
case 1545:
case 4064:
case 3095:
case 941:
case 3648:
case 883:
case 2665:
case 1900:
case 3322:
case 1470:
case 3406:
case 2299:
case 2537:
case 2916:
case 3992:
case 3091:
case 2053:
case 61:
case 1028:
case 2385:
case 1255:
case 715:
case 2846:
case 3265:
case 2575:
case 675:
case 1547:
case 2069:
case 3699:
case 1400:
case 4020:
case 12:
case 2381:
case 3906:
case 3261:
case 3763:
case 1523:
case 1110:
case 2531:
case 1618:
case 880:
case 2667:
case 3097:
case 3350:
case 2810:
case 1478:
case 38:
case 3640:
case 3851:
case 2311:
case 2720:
case 3148:
case 1193:
case 3855:
case 2161:
case 3026:
case 2486:
case 2636:
case 276:
case 1865:
case 3581:
case 129:
case 2948:
case 3965:
case 2880:
case 3331:
case 1438:
case 3062:
case 3616:
case 2550:
case 921:
case 1052:
case 3335:
case 19:
case 2692:
case 1951:
case 2499:
case 3808:
case 449:
case 3206:
case 2700:
case 2794:
case 1897:
case 354:
case 4057:
case 2453:
case 496:
case 3512:
case 57:
case 3262:
case 1252:
case 901:
case 2382:
case 515:
case 2339:
case 2197:
case 2572:
case 458:
case 2379:
case 437:
case 1030:
case 2532:
case 3226:
case 3997:
case 109:
case 485:
case 4038:
case 3319:
case 2859:
case 3396:
case 2312:
case 1862:
case 878:
case 345:
case 1374:
case 234:
case 3852:
case 146:
case 1584:
case 2778:
case 3539:
case 4094:
case 3582:
case 1420:
case 1964:
case 3332:
case 3954:
case 3065:
case 666:
case 2527:
case 3389:
case 426:
case 1334:
case 451:
case 1952:
case 2519:
case 1663:
case 3061:
case 2126:
case 386:
case 3295:
case 657:
case 2755:
case 3462:
case 185:
case 409:
case 3669:
case 638:
case 1659:
case 4030:
case 27:
case 1464:
case 3793:
case 3820:
case 3509:
case 1383:
case 912:
case 2253:
case 2521:
case 3302:
case 95:
case 565:
case 1390:
case 1304:
case 2730:
case 2040:
case 40:
case 126:
case 279:
case 2309:
case 3036:
case 1163:
case 325:
case 4055:
case 3710:
case 2662:
case 3325:
case 4008:
case 3092:
case 3991:
case 1349:
case 2469:
case 893:
case 1529:
case 2797:
case 1936:
case 3257:
case 3876:
case 3278:
case 1800:
case 4054:
case 2568:
case 51:
case 3680:
case 811:
case 3356:
case 3541:
case 2608:
case 1992:
case 26:
case 2063:
case 2651:
case 1648:
case 3994:
case 1322:
case 3470:
case 1406:
case 3769:
case 4026:
case 1358:
case 2762:
case 519:
case 34:
case 1857:
case 1276:
case 1878:
case 3294:
case 2493:
case 3118:
case 2556:
case 3610:
case 3451:
case 1186:
case 306:
case 3646:
case 823:
case 2726:
case 1838:
case 1236:
case 3957:
case 3408:
case 2899:
case 1199:
case 1337:
case 1301:
case 3020:
case 2480:
case 3193:
case 1855:
case 275:
case 2848:
case 2246:
case 2151:
case 1581:
case 329:
case 2980:
case 3457:
case 3478:
case 1375:
case 1467:
case 1585:
case 3861:
case 3908:
case 738:
case 3438:
case 1062:
case 988:
case 1616:
case 39:
case 3180:
case 3951:
case 820:
case 1808:
case 2993:
case 1961:
case 2108:
case 3955:
case 1965:
case 2600:
case 2694:
case 252:
case 1307:
case 2323:
case 955:
case 32:
case 847:
case 731:
case 219:
case 890:
case 3753:
case 3251:
case 2791:
case 1906:
case 1261:
case 1830:
case 1492:
case 3028:
case 9:
case 2130:
case 3255:
case 2488:
case 2795:
case 189:
case 405:
case 3547:
case 676:
case 2946:
case 1097:
case 2678:
case 1350:
case 3360:
case 332:
case 944:
case 3930:
case 3208:
case 1620:
case 705:
case 1303:
case 3589:
case 2327:
case 2169:
case 150:
case 1869:
case 3859:
case 1534:
case 1046:
case 630:
case 2226:
case 2828:
case 1736:
case 974:
case 903:
case 873:
case 365:
case 595:
case 3969:
case 254:
case 1010:
case 2491:
case 3596:
case 586:
case 877:
case 3197:
case 2006:
case 1792:
case 2788:
case 438:
case 3126:
case 2061:
case 2962:
case 1164:
case 4088:
case 245:
case 2718:
case 3543:
case 334:
case 1152:
case 1080:
case 3162:
case 3757:
case 1314:
case 2864:
case 2372:
case 2926:
case 525:
case 2302:
case 939:
case 1018:
case 2780:
case 2067:
case 1549:
case 4010:
case 3697:
case 626:
case 554:
case 4046:
case 3099:
case 1628:
case 2295:
case 286:
case 2462:
case 3755:
case 1120:
case 2820:
case 1761:
case 450:
case 2291:
case 1263:
case 3253:
case 116:
case 651:
case 1333:
case 2710:
case 153:
case 93:
case 3502:
case 4080:
case 2076:
case 3770:
case 1963:
case 1706:
case 2991:
case 3469:
case 3953:
case 870:
case 900:
case 2325:
case 3662:
case 1504:
case 637:
case 1373:
case 2544:
case 157:
case 78:
case 3309:
case 2153:
case 3191:
case 3840:
case 3410:
case 3063:
case 3651:
case 1136:
case 914:
case 1053:
case 1661:
case 730:
case 891:
case 36:
case 1916:
case 2324:
case 2470:
case 1299:
case 2769:
case 70:
case 3655:
case 2994:
case 1192:
case 2430:
case 2680:
case 3568:
case 2545:
case 2188:
case 1577:
case 3797:
case 2257:
case 1940:
case 3194:
case 3608:
case 980:
case 1286:
case 3816:
case 3446:
case 2541:
case 828:
case 3218:
case 3524:
case 3899:
case 2646:
case 2978:
case 369:
case 1522:
case 709:
case 3630:
case 1986:
case 898:
case 3178:
case 860:
case 1606:
case 1167:
case 3288:
case 3345:
case 1752:
case 821:
case 3886:
case 2455:
case 3762:
case 1448:
case 52:
case 3493:
case 2451:
case 2610:
case 2867:
case 1317:
case 2294:
case 1499:
case 3993:
case 2270:
case 3560:
case 2438:
case 2688:
case 1692:
case 29:
case 2180:
case 1550:
case 352:
case 867:
case 3108:
case 2064:
case 1676:
case 964:
case 3246:
case 375:
case 848:
case 3418:
case 2193:
case 863:
case 229:
case 176:
case 2865:
case 1636:
case 3151:
case 1486:
case 726:
case 1165:
case 3155:
case 1720:
case 1311:
case 549:
case 4053:
case 2360:
case 1440:
case 1810:
case 3170:
case 1106:
case 506:
case 3657:
case 3678:
case 810:
case 935:
case 2110:
case 2523:
case 2618:
case 3293:
case 68:
case 2970:
case 785:
case 3791:
case 1069:
case 3910:
case 2255:
case 884:
case 3488:
case 3795:
case 4083:
case 2487:
case 2601:
case 192:
case 3275:
case 2565:
case 781:
case 744:
case 407:
case 2211:
case 3466:
case 2561:
case 139:
case 2215:
case 3181:
case 1456:
case 3019:
case 3950:
case 1960:
case 3773:
case 2985:
case 1424:
case 4004:
case 4090:
case 1641:
case 3207:
case 1850:
case 3733:
case 3860:
case 7:
case 1098:
case 2658:
case 2150:
case 382:
case 2082:
case 1580:
case 2039:
case 2749:
case 2981:
case 3306:
case 3111:
case 2348:
case 1355:
case 3458:
case 2429:
case 1147:
case 3907:
case 100:
case 3089:
case 2171:
case 2417:
case 2847:
case 13:
case 1875:
case 3115:
case 788:
case 3361:
case 938:
case 1510:
case 4049:
case 273:
case 3975:
case 204:
case 957:
case 2911:
case 1308:
case 3401:
case 1807:
case 772:
case 3250:
case 2704:
case 1260:
case 2845:
case 1858:
case 1256:
case 1141:
case 3266:
case 3868:
case 3367:
case 3129:
case 3714:
case 3516:
case 2592:
case 2411:
case 1004:
case 1090:
case 2841:
case 1145:
case 3685:
case 2917:
case 3540:
case 1338:
case 2101:
case 608:
case 2137:
case 2399:
case 2105:
case 2734:
case 1224:
case 2044:
case 3431:
case 2217:
case 3784:
case 1300:
case 1394:
case 3376:
case 2607:
case 1518:
case 3025:
case 3856:
case 1924:
case 1866:
case 2798:
case 577:
case 2485:
case 3392:
case 2635:
case 422:
case 2567:
case 662:
case 1739:
case 3237:
case 1956:
case 2675:
case 504:
case 43:
case 1460:
case 1779:
case 3450:
case 2009:
case 142:
case 3336:
case 400:
case 1822:
case 601:
case 794:
case 2634:
case 327:
case 1925:
case 541:
case 584:
case 2363:
case 3949:
case 1109:
case 3781:
case 759:
case 221:
case 4071:
case 1022:
case 1921:
case 414:
case 3290:
case 3204:
case 806:
case 323:
case 1612:
case 510:
case 3133:
case 1066:
case 1202:
case 3913:
case 4035:
case 1849:
case 6:
case 1419:
case 1553:
case 336:
case 849:
case 2183:
case 3474:
case 3563:
case 3904:
case 3990:
case 2273:
case 1144:
case 2771:
case 1005:
case 217:
case 1037:
case 563:
case 2775:
case 548:
case 3603:
case 655:
case 75:
case 1747:
case 1001:
case 2844:
case 1472:
case 3711:
case 1679:
case 1902:
case 3213:
case 1225:
case 2735:
case 397:
case 567:
case 1682:
case 340:
case 3983:
case 4050:
case 1890:
case 2233:
case 1221:
case 213:
case 3298:
case 3934:
case 1874:
case 2777:
case 1035:
case 3352:
case 284:
case 464:
case 3114:
case 556:
case 3872:
case 1354:
case 3633:
case 114:
case 1741:
case 1031:
case 1243:
case 2174:
case 1972:
case 1326:
case 2914:
case 1609:
case 598:
case 368:
case 2705:
case 4022:
case 1071:
case 2701:
case 1834:
case 2047:
case 899:
case 1569:
case 1227:
case 1075:
case 3787:
case 528:
case 1397:
case 1139:
case 1050:
case 762:
case 2198:
case 1898:
case 248:
case 3274:
case 2882:
case 1927:
case 3184:
case 4058:
case 267:
case 3998:
case 3234:
case 1644:
case 2879:
case 2683:
case 487:
case 361:
case 591:
case 4005:
case 2722:
case 1179:
case 3642:
case 2984:
case 89:
case 320:
case 435:
case 513:
case 3103:
case 783:
case 112:
case 2207:
case 2733:
case 1310:
case 958:
case 2617:
case 3985:
case 3981:
case 3658:
case 985:
case 3082:
case 2235:
case 1668:
case 1881:
case 3565:
case 1555:
case 2548:
case 3211:
case 3713:
case 1003:
case 3487:
case 2275:
case 1247:
case 996:
case 2773:
case 401:
case 1346:
case 600:
case 933:
case 2181:
case 2405:
case 1702:
case 2096:
case 3012:
case 1656:
case 3131:
case 1947:
case 3107:
case 2975:
case 3135:
case 2971:
case 3823:
case 3790:
case 3704:
case 2401:
case 1570:
case 1014:
case 408:
case 639:
case 1530:
case 2032:
case 2477:
case 3622:
case 2365:
case 1445:
case 2458:
case 3281:
case 692:
case 1811:
case 3171:
case 377:
case 3847:
case 3417:
case 3101:
case 3399:
case 3137:
case 3917:
case 2435:
case 1732:
case 2540:
case 45:
case 1423:
case 2407:
case 1945:
case 2977:
case 582:
case 3734:
case 3576:
case 1594:
case 2002:
case 2471:
case 2117:
case 1829:
case 3386:
case 879:
case 909:
case 2901:
case 162:
case 1796:
case 2266:
case 4084:
case 3411:
case 3650:
case 1660:
case 3177:
case 2475:
case 578:
case 1447:
case 1817:
case 412:
case 2714:
case 1772:
case 1538:
case 607:
case 3122:
case 2450:
case 459:
case 2966:
case 2824:
case 3675:
case 2703:
case 1124:
case 1073:
case 1719:
case 2205:
case 946:
case 3009:
case 2615:
case 3987:
case 3166:
case 1241:
case 3607:
case 2021:
case 1743:
case 2586:
case 3481:
case 4014:
case 1156:
case 2784:
case 3217:
case 1887:
case 2376:
case 571:
case 674:
case 1578:
case 930:
case 2025:
case 1245:
case 2258:
case 3798:
case 2392:
case 2290:
case 1125:
case 3750:
case 3149:
case 3674:
case 2056:
case 1696:
case 2133:
case 869:
case 1121:
case 218:
case 3363:
case 494:
case 2781:
case 356:
case 2283:
case 4011:
case 2024:
case 360:
case 590:
case 1873:
case 635:
case 1689:
case 1632:
case 3520:
case 3242:
case 3113:
case 2498:
case 2785:
case 2802:
case 240:
case 664:
case 2249:
case 3698:
case 297:
case 3735:
case 1:
case 3190:
case 1944:
case 520:
case 313:
case 561:
case 1017:
case 2684:
case 3942:
case 2434:
case 86:
case 3771:
case 1619:
case 3273:
case 2904:
case 317:
case 792:
case 4085:
case 3183:
case 181:
case 236:
case 1209:
case 2563:
case 2474:
case 328:
case 1412:
case 2213:
case 2142:
case 2711:
case 1595:
case 2603:
case 3414:
case 502:
case 4081:
case 3134:
case 243:
case 742:
case 3613:
case 2559:
case 523:
case 3203:
case 1912:
case 3737:
case 518:
case 1597:
case 1239:
case 472:
case 2114:
case 1625:
case 3442:
case 1768:
case 1282:
case 2352:
case 3758:
case 384:
case 819:
case 2633:
case 4087:
case 3023:
case 1814:
case 2872:
case 247:
case 3284:
case 3879:
case 540:
case 3433:
case 1526:
case 367:
case 1803:
case 1982:
case 1127:
case 220:
case 707:
case 2819:
case 481:
case 3722:
case 680:
case 3552:
case 703:
case 774:
case 3690:
case 3604:
case 3198:
case 4017:
case 2843:
case 2060:
case 536:
case 2787:
case 2184:
case 1602:
case 1979:
case 4:
case 3839:
case 511:
case 3473:
case 4029:
case 3766:
case 2274:
case 593:
case 363:
case 348:
case 875:
case 124:
case 1409:
case 723:
case 1135:
case 2807:
case 2831:
case 2260:
case 542:
case 3570:
case 1506:
case 1915:
case 3702:
case 682:
case 1911:
case 866:
case 1012:
case 925:
case 3656:
case 1131:
case 1666:
case 3947:
case 222:
case 359:
case 1281:
case 3393:
case 2034:
case 177:
case 2875:
case 3624:
case 200:
case 2147:
case 678:
case 1429:
case 4009:
case 2871:
case 2355:
case 718:
case 1285:
case 3530:
case 1622:
case 3445:
case 1981:
case 1749:
case 2370:
case 2645:
case 1658:
case 2098:
case 1677:
case 2580:
case 986:
case 1150:
case 797:
case 2850:
case 2641:
case 3721:
case 3508:
case 2424:
case 671:
case 470:
case 3346:
case 1215:
case 736:
case 1079:
case 3881:
case 1565:
case 1211:
case 1713:
case 503:
case 1637:
case 574:
case 2822:
case 945:
case 308:
case 2013:
case 2460:
case 1340:
case 2779:
case 3727:
case 522:
case 1675:
case 473:
case 404:
case 3578:
case 1567:
case 2049:
case 2782:
case 2268:
case 53:
case 1485:
case 2866:
case 2924:
case 2518:
case 1607:
case 3743:
case 1217:
case 2394:
case 2300:
case 3423:
case 761:
case 1929:
case 2083:
case 853:
case 3945:
case 207:
case 2801:
case 1044:
case 2224:
case 4079:
case 3789:
case 1917:
case 301:
case 3732:
case 3042:
case 1841:
case 2004:
case 2090:
case 1411:
case 2588:
case 3447:
case 1287:
case 2378:
case 3500:
case 3829:
case 2877:
case 1415:
case 1845:
case 2858:
case 4039:
case 3318:
case 2712:
case 592:
case 2221:
case 2890:
case 1041:
case 1707:
case 113:
case 3643:
case 92:
case 3017:
case 191:
case 2639:
case 2489:
case 1698:
case 2058:
case 1104:
case 1190:
case 2682:
case 2902:
case 2679:
case 2747:
case 1775:
case 618:
case 2037:
case 1414:
case 2472:
case 3619:
case 1273:
case 2005:
case 1183:
case 344:
case 2553:
case 235:
case 3842:
case 3412:
case 697:
case 2419:
case 1674:
case 640:
case 3760:
case 3833:
case 3909:
case 3672:
case 2427:
case 1403:
case 160:
case 636:
case 3689:
case 3439:
case 3482:
case 2395:
case 3632:
case 99:
case 1809:
case 1242:
case 693:
case 2813:
case 2443:
case 355:
case 2391:
case 771:
case 1484:
case 611:
case 428:
case 3127:
case 643:
case 1722:
case 3085:
case 2179:
case 2425:
case 1879:
case 3939:
case 3081:
case 1683:
case 1433:
case 167:
case 3724:
case 3119:
case 94:
case 3602:
case 3979:
case 4045:
case 1564:
case 1473:
case 2296:
case 163:
case 3143:
case 3212:
case 148:
case 1903:
case 2898:
case 324:
case 3409:
case 2050:
case 1552:
case 1604:
case 491:
case 1198:
case 647:
case 413:
case 3884:
case 4041:
case 3132:
case 3912:
case 2834:
case 3189:
case 2569:
case 564:
case 1705:
case 1134:
case 2071:
case 1914:
case 2326:
case 460:
case 949:
case 3621:
case 1023:
case 2112:
case 2031:
case 3196:
case 2989:
case 2932:
case 3814:
case 3444:
case 2354:
case 3597:
case 3172:
case 3625:
case 1442:
case 1812:
case 141:
case 1758:
case 2745:
case 2035:
case 3744:
case 3034:
case 33:
case 3875:
case 3546:
case 2811:
case 1361:
case 1365:
case 171:
case 1477:
case 300:
case 1907:
case 3871:
case 1089:
case 508:
case 1687:
case 4021:
case 1437:
case 3123:
case 3835:
case 322:
case 809:
case 2947:
case 1405:
case 2702:
case 3308:
case 1466:
case 3593:
case 2885:
case 846:
case 339:
case 3709:
case 25:
case 3960:
case 2003:
case 1027:
case 1185:
case 2555:
case 1548:
case 3098:
case 2160:
case 1235:
case 713:
case 4002:
case 2725:
case 1306:
case 3424:
case 97:
case 2084:
case 2310:
case 1733:
case 1860:
case 2223:
case 1043:
case 1231:
case 3782:
case 1277:
case 1856:
case 885:
case 3268:
case 2578:
case 1187:
case 559:
case 2557:
case 3049:
case 3739:
case 1784:
case 837:
case 3394:
case 2887:
case 2743:
case 2033:
case 4072:
case 784:
case 833:
case 934:
case 1336:
case 3822:
case 471:
case 4032:
case 2719:
case 3956:
case 1237:
case 896:
case 1599:
case 2727:
case 1201:
case 3460:
case 3779:
case 1450:
case 2447:
case 4043:
case 1129:
case 1475:
case 3378:
case 3357:
case 2168:
case 748:
case 55:
case 3004:
case 3090:
case 851:
case 1905:
case 2660:
case 374:
case 965:
case 3256:
case 303:
case 3141:
case 262:
case 1117:
case 1977:
case 3968:
case 3801:
case 2423:
case 4027:
case 1431:
case 3083:
case 201:
case 3338:
case 2732:
case 2789:
case 3805:
case 387:
case 3472:
case 3001:
case 1711:
case 1320:
case 1213:
case 2595:
case 2209:
case 244:
case 281:
case 2591:
case 2412:
case 1474:
case 2842:
case 3496:
case 1904:
case 2619:
case 461:
case 2017:
case 4060:
case 1684:
case 3077:
case 2944:
case 3682:
case 3432:
case 2:
case 1068:
case 1802:
case 3489:
case 3639:
case 1249:
case 2029:
case 2632:
case 3395:
case 2482:
case 288:
case 3022:
case 617:
case 443:
case 2873:
case 468:
case 2689:
case 2244:
case 1173:
case 1024:
case 118:
case 3813:
case 1283:
case 2353:
case 3109:
case 1781:
case 2696:
case 1825:
case 594:
case 3066:
case 805:
case 1913:
case 3202:
case 3419:
case 1614:
case 613:
case 490:
case 691:
case 1290:
case 2143:
case 1274:
case 969:
case 3296:
case 2756:
case 102:
case 3927:
case 2979:
case 2554:
case 1184:
case 684:
case 3272:
case 3182:
case 3050:
case 1060:
case 2562:
case 1843:
case 161:
case 3232:
case 2085:
case 1642:
case 1449:
case 2369:
case 436:
case 3289:
case 2803:
case 1234:
case 1998:
case 411:
case 1827:
case 2119:
case 5:
case 2081:
case 2526:
case 493:
case 610:
case 1364:
case 3354:
case 147:
case 588:
case 1717:
case 3007:
case 2196:
case 3243:
case 1934:
case 1298:
case 3874:
case 1896:
case 2625:
case 3745:
case 889:
case 555:
case 2239:
case 663:
case 423:
case 4056:
case 2172:
case 2189:
case 572:
case 2912:
case 1974:
case 4024:
case 2279:
case 1404:
case 1490:
case 427:
case 3326:
case 3972:
case 1832:
case 3609:
case 3402:
case 3071:
case 1889:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756058401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,];
var gg_b = "1756058401/";

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
