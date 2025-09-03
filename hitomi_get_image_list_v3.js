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
var o = 1;
switch (g) {
case 3778:
case 3758:
case 569:
case 1392:
case 1640:
case 3914:
case 3856:
case 345:
case 1129:
case 3371:
case 1574:
case 2204:
case 2224:
case 1485:
case 3351:
case 2930:
case 837:
case 3364:
case 2449:
case 2800:
case 2820:
case 1561:
case 287:
case 474:
case 30:
case 4077:
case 1265:
case 835:
case 14:
case 3919:
case 3716:
case 1104:
case 644:
case 768:
case 3085:
case 3211:
case 169:
case 3431:
case 398:
case 2167:
case 1196:
case 2993:
case 3517:
case 3240:
case 2165:
case 3515:
case 2444:
case 1957:
case 333:
case 1955:
case 105:
case 1975:
case 426:
case 1747:
case 107:
case 1977:
case 1000:
case 1232:
case 2986:
case 1412:
case 2238:
case 753:
case 2418:
case 2209:
case 990:
case 992:
case 1559:
case 1308:
case 2302:
case 735:
case 2322:
case 4023:
case 1339:
case 3113:
case 2563:
case 3059:
case 2199:
case 1793:
case 2033:
case 1635:
case 3520:
case 3500:
case 2775:
case 584:
case 1585:
case 1294:
case 1454:
case 2777:
case 204:
case 2613:
case 1587:
case 1721:
case 1017:
case 3395:
case 191:
case 2755:
case 1015:
case 1206:
case 1226:
case 1890:
case 1786:
case 1989:
case 2549:
case 4084:
case 654:
case 3061:
case 3952:
case 15:
case 1833:
case 463:
case 853:
case 2650:
case 3074:
case 2126:
case 1923:
case 536:
case 3237:
case 1662:
case 3417:
case 1334:
case 2670:
case 918:
case 1991:
case 1730:
case 3681:
case 2090:
case 619:
case 310:
case 1082:
case 312:
case 2088:
case 2817:
case 3170:
case 591:
case 868:
case 458:
case 3150:
case 401:
case 721:
case 3606:
case 3626:
case 1512:
case 1173:
case 924:
case 2746:
case 429:
case 447:
case 1153:
case 2956:
case 2759:
case 2241:
case 2210:
case 3102:
case 3695:
case 1985:
case 3122:
case 40:
case 59:
case 3057:
case 681:
case 395:
case 1335:
case 3055:
case 765:
case 2622:
case 1628:
case 3830:
case 1639:
case 767:
case 166:
case 2918:
case 508:
case 2486:
case 1912:
case 288:
case 942:
case 940:
case 4087:
case 3893:
case 498:
case 551:
case 2042:
case 4085:
case 2774:
case 976:
case 1584:
case 1295:
case 2266:
case 2944:
case 1457:
case 2421:
case 1477:
case 2754:
case 1591:
case 1475:
case 1362:
case 2273:
case 348:
case 2350:
case 2368:
case 3886:
case 1634:
case 882:
case 230:
case 232:
case 675:
case 3572:
case 19:
case 3419:
case 326:
case 1110:
case 3552:
case 3228:
case 1072:
case 3664:
case 867:
case 2078:
case 3180:
case 1961:
case 865:
case 2058:
case 1489:
case 2712:
case 1052:
case 2445:
case 4059:
case 2447:
case 3671:
case 1954:
case 3023:
case 1816:
case 3651:
case 4046:
case 3003:
case 4079:
case 1269:
case 1744:
case 3084:
case 2164:
case 2680:
case 1243:
case 3514:
case 2151:
case 3847:
case 3548:
case 2698:
case 809:
case 4054:
case 541:
case 3365:
case 1756:
case 950:
case 2016:
case 2586:
case 1264:
case 4074:
case 1749:
case 2143:
case 2852:
case 780:
case 782:
case 1575:
case 1491:
case 2521:
case 1577:
case 2501:
case 1878:
case 2205:
case 3136:
case 1557:
case 1271:
case 1484:
case 2872:
case 4061:
case 2227:
case 3917:
case 2593:
case 3915:
case 301:
case 1403:
case 412:
case 738:
case 2169:
case 3472:
case 2389:
case 1120:
case 3811:
case 716:
case 117:
case 3218:
case 1649:
case 3409:
case 3840:
case 3429:
case 115:
case 2687:
case 3966:
case 3769:
case 881:
case 1083:
case 2411:
case 1004:
case 3973:
case 1024:
case 2838:
case 2537:
case 2440:
case 941:
case 296:
case 2067:
case 552:
case 550:
case 3316:
case 2928:
case 486:
case 3187:
case 1663:
case 2908:
case 3249:
case 3764:
case 877:
case 1131:
case 3496:
case 434:
case 3256:
case 693:
case 939:
case 1618:
case 2384:
case 682:
case 3941:
case 3404:
case 3424:
case 3910:
case 3751:
case 2562:
case 1550:
case 227:
case 4022:
case 2323:
case 2780:
case 249:
case 4002:
case 152:
case 3263:
case 1038:
case 3360:
case 2804:
case 638:
case 26:
case 1792:
case 609:
case 3835:
case 3529:
case 3837:
case 2661:
case 2190:
case 411:
case 3068:
case 2674:
case 1413:
case 300:
case 3925:
case 1182:
case 1233:
case 3905:
case 302:
case 2435:
case 576:
case 2215:
case 3690:
case 2437:
case 2217:
case 4036:
case 2094:
case 2511:
case 1734:
case 3688:
case 908:
case 2992:
case 542:
case 667:
case 540:
case 2006:
case 951:
case 2026:
case 1115:
case 3596:
case 2679:
case 1117:
case 1386:
case 2659:
case 2375:
case 3504:
case 2377:
case 3797:
case 2357:
case 3013:
case 142:
case 259:
case 3179:
case 1728:
case 1894:
case 4080:
case 2702:
case 775:
case 794:
case 2282:
case 2099:
case 1936:
case 2133:
case 635:
case 246:
case 991:
case 473:
case 1422:
case 1762:
case 3390:
case 2911:
case 2750:
case 2768:
case 2770:
case 2940:
case 272:
case 3453:
case 3507:
case 2142:
case 3781:
case 2374:
case 3527:
case 1148:
case 3221:
case 3794:
case 3808:
case 2354:
case 518:
case 878:
case 2873:
case 820:
case 3726:
case 3929:
case 3706:
case 1242:
case 3155:
case 1536:
case 2:
case 3157:
case 3177:
case 984:
case 2214:
case 489:
case 3983:
case 334:
case 1693:
case 2097:
case 2095:
case 1621:
case 1053:
case 1119:
case 95:
case 3441:
case 1601:
case 3333:
case 2675:
case 3230:
case 2379:
case 844:
case 3834:
case 118:
case 78:
case 1686:
case 2359:
case 621:
case 3996:
case 402:
case 722:
case 720:
case 1851:
case 3616:
case 2528:
case 400:
case 1498:
case 1502:
case 1258:
case 1522:
case 4070:
case 2825:
case 256:
case 311:
case 4050:
case 2805:
case 2539:
case 590:
case 2272:
case 2807:
case 1363:
case 3553:
case 583:
case 2937:
case 1480:
case 2935:
case 3573:
case 1864:
case 2385:
case 3892:
case 2387:
case 3566:
case 2116:
case 1647:
case 3407:
case 3036:
case 3767:
case 1376:
case 1349:
case 2064:
case 1216:
case 183:
case 3184:
case 905:
case 1869:
case 3658:
case 1970:
case 1027:
case 819:
case 2962:
case 2051:
case 2534:
case 2603:
case 1950:
case 1968:
case 1711:
case 3245:
case 1152:
case 2684:
case 2160:
case 2158:
case 94:
case 3123:
case 3103:
case 969:
case 854:
case 3732:
case 2312:
case 3044:
case 1723:
case 2611:
case 3590:
case 1283:
case 1132:
case 3885:
case 3752:
case 4093:
case 3887:
case 1398:
case 3588:
case 1463:
case 3772:
case 571:
case 903:
case 2265:
case 1456:
case 3140:
case 185:
case 2267:
case 1296:
case 1476:
case 187:
case 786:
case 1820:
case 2561:
case 3111:
case 3609:
case 1449:
case 1800:
case 1791:
case 3325:
case 1784:
case 2574:
case 811:
case 3683:
case 2196:
case 1167:
case 354:
case 269:
case 3812:
case 3049:
case 3076:
case 2124:
case 2104:
case 3056:
case 1336:
case 24:
case 2559:
case 4030:
case 319:
case 2546:
case 1789:
case 3696:
case 1831:
case 2232:
case 2000:
case 1921:
case 2020:
case 1901:
case 38:
case 205:
case 171:
case 2955:
case 93:
case 585:
case 1444:
case 2957:
case 322:
case 1033:
case 3353:
case 320:
case 1563:
case 2339:
case 3874:
case 886:
case 3719:
case 3916:
case 3488:
case 1322:
case 1302:
case 560:
case 2328:
case 2308:
case 3854:
case 562:
case 2461:
case 928:
case 3137:
case 970:
case 2206:
case 2015:
case 2474:
case 946:
case 291:
case 2888:
case 1757:
case 481:
case 2701:
case 1777:
case 1613:
case 2587:
case 104:
case 1947:
case 1775:
case 2294:
case 2585:
case 1670:
case 2334:
case 3879:
case 2923:
case 1668:
case 1650:
case 1106:
case 3748:
case 25:
case 1194:
case 3958:
case 3960:
case 2512:
case 2479:
case 834:
case 3162:
case 284:
case 2446:
case 477:
case 1817:
case 1088:
case 4045:
case 494:
case 2299:
case 2082:
case 9:
case 3341:
case 1544:
case 2984:
case 1090:
case 3310:
case 2991:
case 3128:
case 588:
case 3108:
case 2985:
case 1430:
case 1547:
case 251:
case 3093:
case 2842:
case 1313:
case 2019:
case 1759:
case 1956:
case 1949:
case 1746:
case 4044:
case 1814:
case 2589:
case 266:
case 2639:
case 3516:
case 2628:
case 2608:
case 532:
case 802:
case 1197:
case 2166:
case 1622:
case 1195:
case 3442:
case 3715:
case 3717:
case 2337:
case 3001:
case 3021:
case 2475:
case 2591:
case 2014:
case 2477:
case 789:
case 4056:
case 1421:
case 1944:
case 2457:
case 4076:
case 2297:
case 1042:
case 454:
case 663:
case 2912:
case 3134:
case 1918:
case 3222:
case 3560:
case 3877:
case 3857:
case 601:
case 1493:
case 2634:
case 2523:
case 914:
case 4063:
case 1273:
case 2744:
case 2269:
case 241:
case 996:
case 223:
case 2816:
case 3627:
case 3607:
case 420:
case 700:
case 702:
case 1712:
case 2489:
case 1060:
case 2718:
case 3338:
case 478:
case 3988:
case 2127:
case 3542:
case 1171:
case 931:
case 2107:
case 873:
case 17:
case 2125:
case 2692:
case 2105:
case 3236:
case 695:
case 381:
case 697:
case 674:
case 3889:
case 1680:
case 3731:
case 2311:
case 2484:
case 2271:
case 1872:
case 2557:
case 1225:
case 2878:
case 1521:
case 3304:
case 2860:
case 1852:
case 2946:
case 2749:
case 2264:
case 927:
case 1586:
case 2776:
case 444:
case 1016:
case 2756:
case 3396:
case 925:
case 3884:
case 2763:
case 3478:
case 764:
case 3383:
case 3720:
case 3700:
case 3047:
case 2403:
case 239:
case 1593:
case 889:
case 3995:
case 3997:
case 3163:
case 3599:
case 602:
case 2649:
case 600:
case 2656:
case 1389:
case 795:
case 527:
case 1908:
case 1928:
case 774:
case 2096:
case 1067:
case 549:
case 525:
case 367:
case 3600:
case 1809:
case 1440:
case 3156:
case 3620:
case 2024:
case 1838:
case 2832:
case 365:
case 1231:
case 3149:
case 3594:
case 3011:
case 2644:
case 3040:
case 3705:
case 3725:
case 3581:
case 3707:
case 1384:
case 2618:
case 3465:
case 3506:
case 801:
case 3467:
case 2131:
case 1883:
case 3352:
case 2792:
case 1032:
case 1798:
case 453:
case 863:
case 2038:
case 3372:
case 2865:
case 250:
case 4028:
case 3631:
case 1303:
case 2867:
case 125:
case 1323:
case 149:
case 596:
case 726:
case 127:
case 1934:
case 3118:
case 2568:
case 2550:
case 1200:
case 4039:
case 1562:
case 2233:
case 2182:
case 3741:
case 1654:
case 3971:
case 1188:
case 1674:
case 514:
case 3532:
case 1661:
case 437:
case 673:
case 3259:
case 3813:
case 559:
case 1006:
case 3682:
case 2998:
case 2734:
case 1511:
case 1217:
case 1437:
case 1215:
case 2899:
case 2980:
case 1435:
case 689:
case 393:
case 826:
case 1355:
case 1357:
case 3254:
case 1375:
case 3494:
case 1659:
case 3868:
case 114:
case 1679:
case 2117:
case 932:
case 763:
case 2115:
case 61:
case 1646:
case 3565:
case 1133:
case 2936:
case 1282:
case 1099:
case 2881:
case 1702:
case 443:
case 1722:
case 1462:
case 338:
case 159:
case 4092:
case 3753:
case 240:
case 5:
case 170:
case 611:
case 1940:
case 2580:
case 3614:
case 1768:
case 1750:
case 128:
case 1408:
case 3130:
case 2422:
case 2598:
case 1866:
case 146:
case 599:
case 2895:
case 1219:
case 3382:
case 1853:
case 465:
case 3932:
case 1873:
case 857:
case 3564:
case 1354:
case 3034:
case 42:
case 3802:
case 3822:
case 3257:
case 3497:
case 2630:
case 1374:
case 1142:
case 3315:
case 546:
case 2735:
case 1095:
case 368:
case 3317:
case 810:
case 2066:
case 812:
case 3186:
case 3543:
case 1434:
case 528:
case 3619:
case 3101:
case 3121:
case 4040:
case 2536:
case 4011:
case 3967:
case 3039:
case 3965:
case 733:
case 960:
case 1379:
case 962:
case 1675:
case 2119:
case 2601:
case 1677:
case 2621:
case 2053:
case 987:
case 2864:
case 3300:
case 3783:
case 3203:
case 1935:
case 80:
case 985:
case 53:
case 1937:
case 4062:
case 1807:
case 1539:
case 2278:
case 156:
case 2522:
case 2258:
case 2498:
case 3147:
case 2502:
case 1528:
case 1252:
case 1508:
case 1492:
case 3145:
case 2376:
case 3999:
case 1689:
case 3471:
case 3595:
case 2647:
case 2913:
case 1116:
case 3597:
case 3704:
case 161:
case 1385:
case 3331:
case 482:
case 1603:
case 3443:
case 2711:
case 480:
case 1623:
case 1962:
case 2025:
case 2005:
case 556:
case 2027:
case 1071:
case 833:
case 503:
case 283:
case 13:
case 3672:
case 4035:
case 1312:
case 3092:
case 3738:
case 3906:
case 3926:
case 3469:
case 2344:
case 3836:
case 1178:
case 1160:
case 2152:
case 712:
case 1342:
case 564:
case 2682:
case 1688:
case 3998:
case 1154:
case 2314:
case 1161:
case 324:
case 77:
case 696:
case 3980:
case 1690:
case 1925:
case 3182:
case 2741:
case 3233:
case 1927:
case 1907:
case 2951:
case 2710:
case 2062:
case 2279:
case 1538:
case 2964:
case 1509:
case 3739:
case 2319:
case 3288:
case 3894:
case 3708:
case 1179:
case 2773:
case 2943:
case 238:
case 3468:
case 2615:
case 3470:
case 1013:
case 3826:
case 3806:
case 3393:
case 342:
case 926:
case 2274:
case 2766:
case 1797:
case 1504:
case 3321:
case 483:
case 1633:
case 1524:
case 2254:
case 4027:
case 1862:
case 490:
case 4025:
case 4005:
case 2868:
case 502:
case 1596:
case 832:
case 2870:
case 3117:
case 500:
case 2565:
case 2406:
case 282:
case 3115:
case 2426:
case 3922:
case 3902:
case 1187:
case 3663:
case 22:
case 1316:
case 267:
case 2620:
case 2600:
case 2156:
case 2176:
case 1973:
case 3024:
case 1743:
case 2149:
case 3832:
case 2995:
case 173:
case 589:
case 3513:
case 2599:
case 1840:
case 1409:
case 315:
case 1429:
case 1438:
case 317:
case 1218:
case 4041:
case 3120:
case 2212:
case 3100:
case 1811:
case 3656:
case 2352:
case 730:
case 963:
case 3009:
case 1378:
case 3029:
case 1263:
case 350:
case 352:
case 3865:
case 3570:
case 2631:
case 3568:
case 1751:
case 3644:
case 1424:
case 2725:
case 788:
case 11:
case 2040:
case 2581:
case 813:
case 573:
case 1496:
case 2467:
case 189:
case 1256:
case 1276:
case 1764:
case 947:
case 704:
case 3356:
case 424:
case 1767:
case 3647:
case 2595:
case 1566:
case 2597:
case 3645:
case 1405:
case 2724:
case 2291:
case 2320:
case 2783:
case 1189:
case 3864:
case 887:
case 3480:
case 235:
case 646:
case 3871:
case 3363:
case 672:
case 3498:
case 3502:
case 3522:
case 628:
case 3851:
case 2092:
case 1732:
case 440:
case 1098:
case 2738:
case 2926:
case 1123:
case 2906:
case 2709:
case 2469:
case 3344:
case 1541:
case 1080:
case 1510:
case 3152:
case 3950:
case 3711:
case 3740:
case 3005:
case 390:
case 6:
case 511:
case 3007:
case 3970:
case 1184:
case 1658:
case 871:
case 3216:
case 699:
case 760:
case 2652:
case 2672:
case 1678:
case 4004:
case 2932:
case 2564:
case 957:
case 2034:
case 1794:
case 1808:
case 1201:
case 785:
case 2497:
case 1466:
case 2257:
case 1525:
case 2571:
case 1781:
case 2255:
case 1839:
case 3630:
case 656:
case 3041:
case 1293:
case 417:
case 3580:
case 1473:
case 2648:
case 534:
case 804:
case 1642:
case 2130:
case 3422:
case 1388:
case 3897:
case 2382:
case 603:
case 3686:
case 2039:
case 2967:
case 2193:
case 1996:
case 771:
case 862:
case 2008:
case 4029:
case 1230:
case 253:
case 2569:
case 3119:
case 1441:
case 3601:
case 268:
case 63:
case 2315:
case 3066:
case 912:
case 2317:
case 3737:
case 134:
case 3693:
case 2543:
case 2619:
case 2101:
case 3536:
case 1157:
case 3242:
case 1155:
case 828:
case 3461:
case 1699:
case 2135:
case 3226:
case 685:
case 846:
case 3281:
case 3017:
case 3888:
case 3701:
case 3637:
case 2373:
case 1520:
case 2250:
case 2268:
case 2270:
case 155:
case 3793:
case 4052:
case 2353:
case 222:
case 3339:
case 1113:
case 1482:
case 2719:
case 986:
case 2488:
case 441:
case 1046:
case 703:
case 3308:
case 3328:
case 1079:
case 2162:
case 934:
case 1168:
case 3446:
case 439:
case 384:
case 1170:
case 899:
case 671:
case 3082:
case 112:
case 2213:
case 2341:
case 1694:
case 3991:
case 2714:
case 2879:
case 1531:
case 244:
case 1237:
case 1235:
case 2859:
case 3923:
case 2978:
case 555:
case 1742:
case 2748:
case 1952:
case 2960:
case 2638:
case 803:
case 1632:
case 2140:
case 2111:
case 1364:
case 2609:
case 3561:
case 1351:
case 1863:
case 911:
case 856:
case 129:
case 3611:
case 3109:
case 3129:
case 145:
case 1914:
case 2590:
case 147:
case 1420:
case 3640:
case 1400:
case 2752:
case 3392:
case 2885:
case 1012:
case 861:
case 598:
case 451:
case 1760:
case 2588:
case 728:
case 2942:
case 3559:
case 3546:
case 2696:
case 3977:
case 49:
case 3000:
case 3975:
case 307:
case 133:
case 28:
case 305:
case 2604:
case 1369:
case 3957:
case 83:
case 2624:
case 3196:
case 254:
case 7:
case 4048:
case 1085:
case 1211:
case 1431:
case 198:
case 547:
case 2049:
case 3104:
case 2076:
case 34:
case 1919:
case 545:
case 1844:
case 3107:
case 501:
case 973:
case 2988:
case 3127:
case 3105:
case 3692:
case 2236:
case 1548:
case 1982:
case 4017:
case 491:
case 3311:
case 1091:
case 1084:
case 3269:
case 1023:
case 3974:
case 896:
case 1003:
case 2627:
case 2192:
case 2605:
case 2625:
case 1332:
case 2309:
case 2329:
case 1180:
case 3072:
case 2884:
case 1519:
case 759:
case 2460:
case 1089:
case 2045:
case 158:
case 277:
case 1915:
case 275:
case 484:
case 339:
case 989:
case 3878:
case 1136:
case 3557:
case 714:
case 2304:
case 3858:
case 3860:
case 45:
case 2324:
case 3577:
case 163:
case 3575:
case 3491:
case 3264:
case 3749:
case 3946:
case 3979:
case 3756:
case 2803:
case 2396:
case 849:
case 548:
case 1830:
case 2086:
case 902:
case 900:
case 3628:
case 2442:
case 3335:
case 526:
case 67:
case 2717:
case 3337:
case 1057:
case 796:
case 197:
case 1075:
case 2108:
case 1697:
case 2666:
case 2128:
case 1102:
case 3985:
case 1122:
case 216:
case 351:
case 2139:
case 2093:
case 3019:
case 3589:
case 1228:
case 725:
case 2877:
case 3110:
case 2202:
case 2558:
case 2222:
case 749:
case 1821:
case 126:
case 2857:
case 2578:
case 1239:
case 1572:
case 3141:
case 4020:
case 613:
case 76:
case 3503:
case 1790:
case 148:
case 2030:
case 3362:
case 1394:
case 3014:
case 2641:
case 44:
case 3584:
case 1381:
case 3455:
case 1893:
case 1326:
case 469:
case 3048:
case 2690:
case 3215:
case 3081:
case 3217:
case 1314:
case 2161:
case 3094:
case 3511:
case 2154:
case 2688:
case 3992:
case 1348:
case 1259:
case 403:
case 2538:
case 4069:
case 1532:
case 617:
case 1062:
case 1710:
case 456:
case 1951:
case 3674:
case 866:
case 2050:
case 582:
case 1971:
case 2907:
case 2927:
case 2905:
case 202:
case 2925:
case 1753:
case 2159:
case 2013:
case 359:
case 1615:
case 1943:
case 138:
case 1773:
case 2179:
case 1617:
case 3462:
case 3702:
case 739:
case 3722:
case 652:
case 650:
case 1426:
case 1406:
case 1565:
case 1870:
case 1567:
case 1850:
case 4071:
case 1261:
case 3377:
case 2633:
case 2524:
case 1766:
case 3357:
case 2795:
case 4064:
case 1274:
case 3355:
case 1481:
case 165:
case 1176:
case 2973:
case 3838:
case 1600:
case 3440:
case 3537:
case 167:
case 766:
case 3535:
case 823:
case 841:
case 12:
case 3067:
case 3908:
case 3928:
case 624:
case 1432:
case 3389:
case 2218:
case 751:
case 428:
case 2429:
case 2840:
case 1599:
case 2769:
case 1163:
case 2966:
case 1997:
case 2244:
case 331:
case 3685:
case 446:
case 3200:
case 2483:
case 79:
case 327:
case 1118:
case 1631:
case 3303:
case 3896:
case 3323:
case 349:
case 52:
case 676:
case 2263:
case 642:
case 3798:
case 2358:
case 3804:
case 3824:
case 1352:
case 3032:
case 36:
case 3883:
case 499:
case 994:
case 3612:
case 2496:
case 1526:
case 839:
case 1506:
case 2771:
case 3384:
case 1727:
case 1725:
case 2941:
case 2424:
case 2404:
case 2751:
case 3391:
case 1011:
case 1285:
case 1291:
case 3043:
case 1451:
case 3385:
case 1898:
case 1704:
case 3116:
case 1597:
case 2566:
case 2427:
case 2407:
case 2765:
case 543:
case 4094:
case 2767:
case 1999:
case 2036:
case 3689:
case 791:
case 2616:
case 3528:
case 3252:
case 3508:
case 1147:
case 3825:
case 3807:
case 3937:
case 3069:
case 2553:
case 135:
case 3935:
case 303:
case 1783:
case 1320:
case 2573:
case 618:
case 2245:
case 3160:
case 3684:
case 1836:
case 121:
case 1981:
case 2541:
case 1709:
case 2103:
case 1926:
case 869:
case 1738:
case 2098:
case 2732:
case 954:
case 1289:
case 1092:
case 807:
case 3064:
case 1672:
case 33:
case 2658:
case 805:
case 75:
case 3603:
case 1443:
case 3534:
case 3623:
case 3374:
case 2839:
case 836:
case 1255:
case 2527:
case 3142:
case 1571:
case 2507:
case 2781:
case 1257:
case 1497:
case 2505:
case 4067:
case 1822:
case 4065:
case 1275:
case 2808:
case 2828:
case 1551:
case 1034:
case 3873:
case 978:
case 920:
case 553:
case 2726:
case 3219:
case 3439:
case 3866:
case 346:
case 2388:
case 1130:
case 3592:
case 3408:
case 2473:
case 3768:
case 3750:
case 328:
case 3770:
case 370:
case 2293:
case 3940:
case 2453:
case 46:
case 2333:
case 1569:
case 2230:
case 2410:
case 2924:
case 1028:
case 3379:
case 1008:
case 449:
case 3346:
case 707:
case 427:
case 1193:
case 2996:
case 1967:
case 1039:
case 2155:
case 690:
case 3841:
case 3248:
case 3:
case 1619:
case 3810:
case 1101:
case 2175:
case 1543:
case 74:
case 2983:
case 234:
case 3097:
case 683:
case 3947:
case 3945:
case 3777:
case 3613:
case 304:
case 1366:
case 3882:
case 2395:
case 1135:
case 1137:
case 3576:
case 2699:
case 3549:
case 2079:
case 3322:
case 3302:
case 2046:
case 2059:
case 1874:
case 1719:
case 1916:
case 122:
case 3033:
case 1353:
case 255:
case 4060:
case 1270:
case 178:
case 1250:
case 1268:
case 4078:
case 2500:
case 1373:
case 2681:
case 413:
case 1310:
case 1433:
case 1213:
case 605:
case 210:
case 3088:
case 3817:
case 2170:
case 2168:
case 2150:
case 2606:
case 607:
case 792:
case 669:
case 522:
case 953:
case 2415:
case 3126:
case 1859:
case 2235:
case 64:
case 3106:
case 2237:
case 362:
case 1846:
case 4016:
case 360:
case 144:
case 2531:
case 2054:
case 1714:
case 1879:
case 2863:
case 1305:
case 3791:
case 3930:
case 3820:
case 1111:
case 3800:
case 387:
case 1140:
case 385:
case 691:
case 3296:
case 1638:
case 58:
case 879:
case 935:
case 3463:
case 1942:
case 1588:
case 1887:
case 1018:
case 3398:
case 2758:
case 1885:
case 2849:
case 3283:
case 2420:
case 3132:
case 1590:
case 2914:
case 245:
case 3380:
case 3703:
case 1533:
case 883:
case 1604:
case 18:
case 718:
case 371:
case 684:
case 430:
case 3986:
case 1696:
case 432:
case 3418:
case 2665:
case 3238:
case 3229:
case 3209:
case 890:
case 2716:
case 1049:
case 2343:
case 4042:
case 298:
case 2085:
case 2211:
case 1812:
case 2087:
case 2818:
case 2240:
case 2517:
case 1683:
case 65:
case 666:
case 2514:
case 1889:
case 3164:
case 2847:
case 2982:
case 1236:
case 1988:
case 909:
case 575:
case 3698:
case 651:
case 3078:
case 2180:
case 2664:
case 967:
case 965:
case 1338:
case 4033:
case 608:
case 3447:
case 2198:
case 2003:
case 2023:
case 2651:
case 92:
case 581:
case 3593:
case 2917:
case 201:
case 1280:
case 69:
case 177:
case 1383:
case 1720:
case 1700:
case 740:
case 742:
case 1891:
case 2089:
case 1458:
case 4090:
case 2519:
case 3169:
case 460:
case 1823:
case 3016:
case 852:
case 3143:
case 3852:
case 1324:
case 3501:
case 2669:
case 1304:
case 3225:
case 2136:
case 3227:
case 2077:
case 1001:
case 274:
case 1021:
case 2900:
case 1717:
case 1673:
case 2055:
case 1715:
case 295:
case 3622:
case 1086:
case 641:
case 3759:
case 623:
case 3313:
case 3848:
case 3547:
case 3545:
case 3273:
case 2886:
case 2931:
case 982:
case 3370:
case 980:
case 330:
case 3253:
case 2419:
case 1782:
case 993:
case 1857:
case 226:
case 1560:
case 1877:
case 1202:
case 2552:
case 2208:
case 1875:
case 938:
case 3761:
case 1134:
case 3486:
case 516:
case 2326:
case 2381:
case 1610:
case 3819:
case 1641:
case 3421:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756875601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,];
var gg_b = "1756875601/";

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
