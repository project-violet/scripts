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
case 1686:
case 2533:
case 3444:
case 1143:
case 4022:
case 1360:
case 2123:
case 2173:
case 2610:
case 2882:
case 3143:
case 3791:
case 1444:
case 1185:
case 3686:
case 2953:
case 3758:
case 3258:
case 4017:
case 1660:
case 3407:
case 886:
case 3291:
case 1499:
case 3499:
case 1111:
case 1386:
case 1407:
case 908:
case 3660:
case 1258:
case 318:
case 4050:
case 2967:
case 2942:
case 1105:
case 3641:
case 352:
case 3336:
case 1152:
case 2663:
case 3105:
case 1972:
case 313:
case 1922:
case 1120:
case 509:
case 1170:
case 2456:
case 1636:
case 1525:
case 209:
case 1487:
case 310:
case 585:
case 3917:
case 2864:
case 3135:
case 1341:
case 1950:
case 2832:
case 1135:
case 3341:
case 110:
case 1917:
case 2371:
case 3487:
case 3636:
case 976:
case 3575:
case 2140:
case 3120:
case 2427:
case 3462:
case 3447:
case 3296:
case 3116:
case 266:
case 1523:
case 1573:
case 131:
case 1615:
case 896:
case 2543:
case 331:
case 1116:
case 1296:
case 1462:
case 1381:
case 3315:
case 2511:
case 2412:
case 3404:
case 2093:
case 1404:
case 2982:
case 536:
case 1315:
case 295:
case 1346:
case 1090:
case 865:
case 512:
case 595:
case 2451:
case 2964:
case 2932:
case 3850:
case 114:
case 2100:
case 253:
case 3346:
case 2505:
case 2867:
case 3872:
case 3601:
case 1484:
case 550:
case 2842:
case 3183:
case 2676:
case 775:
case 2626:
case 959:
case 1646:
case 835:
case 2520:
case 2570:
case 3145:
case 3540:
case 1822:
case 1872:
case 2125:
case 2059:
case 1977:
case 705:
case 2934:
case 1157:
case 3515:
case 3673:
case 3110:
case 789:
case 256:
case 1290:
case 1623:
case 1673:
case 1515:
case 2685:
case 3157:
case 3927:
case 3977:
case 556:
case 4051:
case 2807:
case 924:
case 974:
case 1323:
case 2837:
case 1824:
case 1874:
case 1790:
case 1912:
case 3361:
case 3482:
case 2611:
case 2844:
case 1581:
case 3912:
case 2904:
case 1361:
case 3790:
case 351:
case 3323:
case 2343:
case 841:
case 1171:
case 230:
case 939:
case 145:
case 1856:
case 3531:
case 1464:
case 530:
case 1096:
case 3096:
case 2106:
case 1432:
case 1163:
case 2141:
case 345:
case 2293:
case 1402:
case 1501:
case 2670:
case 1546:
case 2576:
case 2526:
case 2635:
case 260:
case 233:
case 1640:
case 4012:
case 3501:
case 533:
case 3453:
case 279:
case 1974:
case 116:
case 2115:
case 579:
case 2944:
case 3812:
case 906:
case 3680:
case 3974:
case 316:
case 1453:
case 1366:
case 2633:
case 3380:
case 3560:
case 1877:
case 2999:
case 2333:
case 2603:
case 2181:
case 3666:
case 973:
case 4056:
case 2795:
case 3877:
case 229:
case 1380:
case 211:
case 2907:
case 2884:
case 1442:
case 605:
case 1375:
case 689:
case 1506:
case 46:
case 2563:
case 162:
case 167:
case 894:
case 367:
case 880:
case 3325:
case 3506:
case 978:
case 3375:
case 264:
case 4074:
case 1600:
case 1330:
case 2521:
case 2472:
case 3467:
case 564:
case 3541:
case 234:
case 337:
case 2645:
case 1091:
case 1176:
case 1630:
case 1300:
case 1851:
case 2987:
case 3851:
case 3630:
case 2417:
case 3176:
case 3898:
case 3956:
case 1513:
case 2101:
case 1625:
case 1536:
case 43:
case 1939:
case 1393:
case 3559:
case 1054:
case 1720:
case 1894:
case 1770:
case 2015:
case 3205:
case 3894:
case 1205:
case 3770:
case 3720:
case 306:
case 916:
case 170:
case 60:
case 1559:
case 3939:
case 3065:
case 3909:
case 3849:
case 2081:
case 1705:
case 782:
case 4078:
case 1270:
case 1693:
case 4089:
case 1909:
case 1220:
case 1065:
case 3235:
case 320:
case 1285:
case 3243:
case 2690:
case 2223:
case 178:
case 2838:
case 697:
case 2031:
case 2469:
case 967:
case 2596:
case 496:
case 1243:
case 1978:
case 1191:
case 937:
case 932:
case 1211:
case 4009:
case 1026:
case 2761:
case 328:
case 1158:
case 2390:
case 3158:
case 3076:
case 3026:
case 2001:
case 2948:
case 3191:
case 3928:
case 2773:
case 2730:
case 2086:
case 34:
case 2159:
case 85:
case 1745:
case 3809:
case 3783:
case 1057:
case 3010:
case 522:
case 2725:
case 3057:
case 1783:
case 2418:
case 227:
case 442:
case 447:
case 14:
case 272:
case 1468:
case 277:
case 577:
case 572:
case 1994:
case 3994:
case 2700:
case 951:
case 174:
case 3839:
case 339:
case 1878:
case 2766:
case 1703:
case 4049:
case 3695:
case 3063:
case 1216:
case 3216:
case 3233:
case 1063:
case 1695:
case 945:
case 2041:
case 2848:
case 3878:
case 3021:
case 3828:
case 139:
case 70:
case 3203:
case 2013:
case 2780:
case 169:
case 682:
case 2938:
case 3733:
case 1733:
case 486:
case 4094:
case 2591:
case 2492:
case 494:
case 1429:
case 2736:
case 1479:
case 1488:
case 2713:
case 59:
case 2449:
case 931:
case 3479:
case 1016:
case 3263:
case 86:
case 1033:
case 961:
case 648:
case 2968:
case 4092:
case 483:
case 2741:
case 2193:
case 691:
case 1595:
case 4018:
case 643:
case 1210:
case 1190:
case 507:
case 202:
case 2391:
case 488:
case 2358:
case 3190:
case 3210:
case 2000:
case 3710:
case 1757:
case 1438:
case 1869:
case 2786:
case 159:
case 3438:
case 3045:
case 1083:
case 2025:
case 1710:
case 1776:
case 1043:
case 493:
case 2023:
case 1085:
case 3043:
case 4069:
case 3776:
case 2746:
case 681:
case 3226:
case 2731:
case 2497:
case 3359:
case 3011:
case 1593:
case 3593:
case 1011:
case 1359:
case 740:
case 28:
case 1226:
case 1276:
case 326:
case 103:
case 3892:
case 957:
case 3765:
case 2696:
case 62:
case 3254:
case 644:
case 1052:
case 3969:
case 1892:
case 303:
case 2590:
case 1070:
case 3448:
case 1020:
case 1754:
case 221:
case 300:
case 441:
case 910:
case 1265:
case 100:
case 2040:
case 2396:
case 2281:
case 3070:
case 420:
case 2946:
case 2806:
case 1655:
case 240:
case 949:
case 2435:
case 3976:
case 1584:
case 2048:
case 2841:
case 3089:
case 1440:
case 3078:
case 3028:
case 473:
case 1821:
case 1078:
case 3364:
case 1332:
case 1602:
case 1976:
case 3655:
case 2187:
case 3664:
case 1302:
case 1632:
case 4054:
case 2551:
case 2598:
case 2405:
case 2836:
case 602:
case 2314:
case 3302:
case 607:
case 1810:
case 93:
case 3857:
case 4026:
case 1965:
case 3097:
case 291:
case 2886:
case 3682:
case 2219:
case 3009:
case 721:
case 3810:
case 2485:
case 2719:
case 3124:
case 396:
case 3174:
case 1423:
case 3547:
case 69:
case 3954:
case 2577:
case 3039:
case 3461:
case 2527:
case 1039:
case 1461:
case 1562:
case 1382:
case 3269:
case 1547:
case 1954:
case 2860:
case 196:
case 3423:
case 2137:
case 2443:
case 2915:
case 831:
case 2268:
case 2617:
case 1367:
case 1425:
case 1718:
case 2556:
case 57:
case 2483:
case 3475:
case 3367:
case 619:
case 1430:
case 2650:
case 857:
case 2846:
case 347:
case 3826:
case 4057:
case 2008:
case 3218:
case 2941:
case 2350:
case 3667:
case 2672:
case 3921:
case 2622:
case 3400:
case 1921:
case 1198:
case 1642:
case 1826:
case 1876:
case 1151:
case 22:
case 3094:
case 2104:
case 3353:
case 68:
case 3507:
case 1854:
case 1507:
case 1466:
case 186:
case 1353:
case 1112:
case 1292:
case 1094:
case 2815:
case 3480:
case 2574:
case 4071:
case 1537:
case 1910:
case 2524:
case 3544:
case 581:
case 1049:
case 2162:
case 3653:
case 1177:
case 4063:
case 3865:
case 2881:
case 707:
case 3049:
case 702:
case 2029:
case 439:
case 2079:
case 1114:
case 6:
case 1749:
case 4003:
case 3945:
case 1294:
case 3413:
case 832:
case 3436:
case 2779:
case 3294:
case 772:
case 777:
case 3749:
case 2102:
case 1835:
case 2132:
case 2463:
case 194:
case 180:
case 2900:
case 1567:
case 2288:
case 722:
case 3870:
case 1441:
case 1794:
case 3542:
case 215:
case 1249:
case 1820:
case 3387:
case 3567:
case 592:
case 867:
case 4016:
case 380:
case 862:
case 4033:
case 292:
case 3835:
case 2873:
case 1885:
case 4045:
case 3843:
case 3699:
case 2182:
case 3344:
case 1607:
case 459:
case 3337:
case 1843:
case 3885:
case 2966:
case 50:
case 2410:
case 388:
case 3553:
case 2738:
case 3933:
case 1553:
case 404:
case 2674:
case 2208:
case 2457:
case 816:
case 3150:
case 2398:
case 1117:
case 190:
case 408:
case 1297:
case 701:
case 2800:
case 2019:
case 1502:
case 3502:
case 2514:
case 4011:
case 3297:
case 3446:
case 1555:
case 384:
case 3117:
case 2426:
case 3935:
case 2476:
case 1739:
case 282:
case 1239:
case 3532:
case 3431:
case 3905:
case 155:
case 1172:
case 1122:
case 2167:
case 3709:
case 355:
case 1845:
case 1905:
case 4085:
case 3384:
case 3564:
case 1431:
case 2651:
case 2830:
case 3582:
case 4020:
case 3362:
case 1911:
case 1334:
case 1604:
case 3481:
case 2327:
case 476:
case 1278:
case 398:
case 2465:
case 1833:
case 7:
case 4035:
case 672:
case 3816:
case 1347:
case 3228:
case 1481:
case 3604:
case 3334:
case 1362:
case 2248:
case 3289:
case 2973:
case 3778:
case 2748:
case 3803:
case 3415:
case 3304:
case 627:
case 2153:
case 95:
case 3647:
case 2454:
case 2677:
case 1304:
case 1634:
case 3985:
case 1789:
case 1943:
case 1415:
case 426:
case 246:
case 3638:
case 418:
case 729:
case 3774:
case 2119:
case 2491:
case 2737:
case 1724:
case 3017:
case 2458:
case 299:
case 869:
case 1638:
case 2707:
case 839:
case 1224:
case 2237:
case 1274:
case 3072:
case 3274:
case 2067:
case 779:
case 630:
case 2799:
case 3338:
case 955:
case 2244:
case 2042:
case 1169:
case 1256:
case 998:
case 2349:
case 3329:
case 734:
case 3379:
case 656:
case 3679:
case 413:
case 2893:
case 3688:
case 84:
case 35:
case 2787:
case 457:
case 1679:
case 2747:
case 2055:
case 3777:
case 2895:
case 983:
case 768:
case 2628:
case 2002:
case 2689:
case 2734:
case 1727:
case 1227:
case 1277:
case 3348:
case 2569:
case 756:
case 738:
case 2704:
case 1712:
case 589:
case 994:
case 505:
case 2496:
case 3277:
case 878:
case 2082:
case 2993:
case 3798:
case 1751:
case 820:
case 2168:
case 873:
case 51:
case 2397:
case 4090:
case 3459:
case 21:
case 2639:
case 414:
case 730:
case 679:
case 3298:
case 800:
case 451:
case 2589:
case 2282:
case 2084:
case 1548:
case 3619:
case 3996:
case 942:
case 826:
case 803:
case 1098:
case 1996:
case 654:
case 766:
case 1858:
case 1493:
case 3012:
case 3194:
case 986:
case 2597:
case 2732:
case 2255:
case 1194:
case 2509:
case 1214:
case 1714:
case 225:
case 445:
case 2062:
case 2264:
case 3027:
case 753:
case 525:
case 2047:
case 2034:
case 2232:
case 712:
case 717:
case 3149:
case 2188:
case 2179:
case 2129:
case 2753:
case 3958:
case 859:
case 1538:
case 3189:
case 3991:
case 1178:
case 1056:
case 3538:
case 935:
case 1958:
case 149:
case 1896:
case 804:
case 653:
case 965:
case 3508:
case 3495:
case 2253:
case 617:
case 1772:
case 1722:
case 1109:
case 3668:
case 1250:
case 2007:
case 636:
case 3197:
case 1197:
case 2859:
case 1217:
case 1668:
case 2742:
case 432:
case 13:
case 2242:
case 1368:
case 1579:
case 3024:
case 1717:
case 3139:
case 1750:
case 1139:
case 3717:
case 1024:
case 2037:
case 1074:
case 1272:
case 666:
case 754:
case 3273:
case 3690:
case 3223:
case 2243:
case 2711:
case 3838:
case 1596:
case 680:
case 3596:
case 278:
case 3261:
case 2285:
case 1690:
case 2419:
case 1808:
case 1948:
case 528:
case 1723:
case 741:
case 934:
case 228:
case 1390:
case 3761:
case 1761:
case 2076:
case 2026:
case 2158:
case 2978:
case 3808:
case 2989:
case 2191:
case 979:
case 523:
case 2205:
case 1740:
case 223:
case 3740:
case 2894:
case 2770:
case 2720:
case 506:
case 101:
case 3240:
case 3829:
case 784:
case 2693:
case 2849:
case 2220:
case 2270:
case 2705:
case 520:
case 1879:
case 1829:
case 273:
case 1240:
case 2997:
case 1280:
case 4029:
case 1006:
case 539:
case 2216:
case 2196:
case 788:
case 693:
case 2071:
case 2021:
case 2889:
case 1266:
case 3013:
case 3938:
case 684:
case 690:
case 2716:
case 1558:
case 269:
case 899:
case 2395:
case 3591:
case 3492:
case 1013:
case 3266:
case 1036:
case 3730:
case 3086:
case 780:
case 1725:
case 3979:
case 3200:
case 2010:
case 2949:
case 54:
case 2057:
case 3775:
case 1200:
case 3725:
case 444:
case 1730:
case 1159:
case 327:
case 322:
case 1230:
case 641:
case 3060:
case 372:
case 4038:
case 574:
case 3225:
case 1700:
case 1275:
case 3700:
case 172:
case 2839:
case 2468:
case 1060:
case 3230:
case 1000:
case 1819:
case 2257:
case 995:
case 912:
case 917:
case 1391:
case 302:
case 3760:
case 204:
case 1286:
case 3286:
case 1760:
case 3391:
case 3819:
case 3358:
case 2190:
case 3691:
case 1075:
case 2710:
case 1025:
case 259:
case 3030:
case 635:
case 786:
case 1658:
case 3075:
case 2045:
case 2757:
case 492:
case 2033:
case 497:
case 1449:
case 2918:
case 966:
case 3080:
case 3736:
case 1736:
case 1080:
case 696:
case 2429:
case 742:
case 747:
case 3449:
case 39:
case 3968:
case 2763:
case 1706:
case 3494:
case 3741:
case 1494:
case 3213:
case 3193:
case 3236:
case 3706:
case 1968:
case 2892:
case 1215:
case 3781:
case 1195:
case 226:
case 171:
case 2254:
case 954:
case 526:
case 647:
case 642:
case 371:
case 796:
case 203:
case 3195:
case 2005:
case 1396:
case 3478:
case 985:
case 3715:
case 500:
case 1281:
case 2035:
case 321:
case 119:
case 2754:
case 2265:
case 2070:
case 1428:
case 3061:
case 3868:
case 1231:
case 1023:
case 3701:
case 3023:
case 3231:
case 765:
case 2726:
case 18:
case 3246:
case 2276:
case 487:
case 482:
case 3731:
case 2011:
case 2818:
case 3201:
case 875:
case 686:
case 2593:
case 508:
case 4019:
case 1731:
case 208:
case 1246:
case 38:
case 1095:
case 3942:
case 3802:
case 2641:
case 552:
case 3967:
case 2972:
case 2606:
case 2336:
case 1855:
case 354:
case 1663:
case 252:
case 513:
case 82:
case 3855:
case 213:
case 2500:
case 2105:
case 3363:
case 3456:
case 3864:
case 1832:
case 309:
case 919:
case 2530:
case 2917:
case 2487:
case 3321:
case 73:
case 2950:
case 2341:
case 2613:
case 1456:
case 1583:
case 1363:
case 2525:
case 2636:
case 2575:
case 3140:
case 3533:
case 3161:
case 3516:
case 4067:
case 3474:
case 2580:
case 3657:
case 1882:
case 4042:
case 3882:
case 2143:
case 1657:
case 1474:
case 1424:
case 1516:
case 2758:
case 2258:
case 499:
case 1357:
case 2291:
case 2111:
case 2386:
case 749:
case 518:
case 2499:
case 3503:
case 3357:
case 98:
case 1326:
case 1376:
case 514:
case 395:
case 312:
case 907:
case 1932:
case 902:
case 317:
case 3552:
case 2817:
case 3451:
case 1451:
case 3259:
case 2301:
case 2850:
case 3376:
case 195:
case 3326:
case 2090:
case 2346:
case 1570:
case 1520:
case 3902:
case 3867:
case 1175:
case 3130:
case 3759:
case 2646:
case 1955:
case 1626:
case 3955:
case 1130:
case 1759:
case 150:
case 3175:
case 1867:
case 4082:
case 1902:
case 3570:
case 2145:
case 2447:
case 2296:
case 66:
case 489:
case 2561:
case 2381:
case 4064:
case 2462:
case 366:
case 2573:
case 231:
case 166:
case 3543:
case 2615:
case 531:
case 1427:
case 1665:
case 891:
case 158:
case 2681:
case 1412:
case 2103:
case 1511:
case 3982:
case 3354:
case 358:
case 2796:
case 1793:
case 3605:
case 1106:
case 1652:
case 2531:
case 4034:
case 1370:
case 1320:
case 2432:
case 3320:
case 4062:
case 2464:
case 2340:
case 545:
case 4047:
case 2121:
case 130:
case 163:
case 425:
case 3141:
case 1335:
case 3793:
case 245:
case 2998:
case 2640:
case 1305:
case 1635:
case 133:
case 160:
case 887:
case 333:
case 360:
case 3576:
case 3635:
case 1670:
case 1293:
case 2402:
case 1620:
case 1136:
case 1352:
case 1962:
case 3311:
case 1947:
case 3059:
case 3186:
case 1807:
case 2673:
case 138:
case 2623:
case 3643:
case 1643:
case 846:
case 3685:
case 2157:
case 356:
case 1059:
case 3554:
case 1186:
case 2661:
case 922:
case 1311:
case 3160:
case 1343:
case 3385:
case 4084:
case 2581:
case 3837:
case 3611:
case 551:
case 3904:
case 2373:
case 251:
case 1160:
case 1521:
case 1472:
case 1571:
case 3563:
case 3131:
case 164:
case 2506:
case 364:
case 2375:
case 267:
case 1131:
case 1383:
case 1563:
case 2442:
case 2541:
case 562:
case 815:
case 2467:
case 75:
case 2536:
case 2625:
case 2675:
case 1417:
case 3987:
case 2058:
case 2851:
case 2300:
case 134:
case 2091:
case 3101:
case 2956:
case 2366:
case 2453:
case 379:
case 3115:
case 1944:
case 3937:
case 216:
case 1295:
case 3944:
case 3557:
case 2812:
case 3804:
case 3633:
case 179:
case 2154:
case 2165:
case 1862:
case 111:
case 4087:
case 129:
case 2560:
case 3316:
case 3603:
case 3999:
case 3181:
case 1181:
case 1603:
case 1316:
case 901:
case 3847:
case 2827:
case 877:
case 651:
case 2329:
case 409:
case 2379:
case 2388:
case 737:
case 3349:
case 732:
case 2256:
case 3893:
case 3649:
case 55:
case 2688:
case 762:
case 1518:
case 2629:
case 1787:
case 3053:
case 3394:
case 1394:
case 827:
case 454:
case 3787:
case 946:
case 3518:
case 1649:
case 199:
case 1207:
case 2308:
case 2638:
case 3119:
case 3744:
case 1592:
case 3299:
case 2724:
case 2774:
case 3737:
case 3592:
case 3491:
case 2017:
case 3207:
case 3458:
case 399:
case 2169:
case 3707:
case 1067:
case 3995:
case 1244:
case 1799:
case 3799:
case 2338:
case 3042:
case 1995:
case 1237:
case 2224:
case 3082:
case 3609:
case 3339:
case 1697:
case 1168:
case 3168:
case 3697:
case 1082:
case 1284:
case 453:
case 616:
case 745:
case 2459:
case 31:
case 90:
case 11:
case 2298:
case 1734:
case 3762:
case 2777:
case 458:
case 436:
case 3747:
case 3055:
case 3895:
case 1204:
case 1895:
case 3002:
case 2212:
case 2192:
case 3628:
case 8:
case 1055:
case 1762:
case 3734:
case 3378:
case 662:
case 3032:
case 3234:
case 667:
case 2348:
case 3389:
case 2712:
case 1704:
case 305:
case 2277:
case 992:
case 1389:
case 997:
case 1032:
case 2227:
case 1328:
case 389:
case 1378:
case 175:
case 2214:
case 3202:
case 2012:
case 1764:
case 3732:
case 3597:
case 433:
case 1597:
case 3255:
case 3509:
case 1702:
case 1188:
case 1179:
case 981:
case 3755:
case 2077:
case 3062:
case 3264:
case 1034:
case 2027:
case 3034:
case 430:
case 3179:
case 3129:
case 2149:
case 3188:
case 125:
case 97:
case 1282:
case 1084:
case 3369:
case 3589:
case 761:
case 1578:
case 3282:
case 1589:
case 1369:
case 2619:
case 3138:
case 610:
case 468:
case 2051:
case 944:
case 613:
case 456:
case 2891:
case 3108:
case 1108:
case 4059:
case 871:
case 657:
case 3669:
case 3594:
case 1099:
case 1767:
case 23:
case 1859:
case 2217:
case 53:
case 661:
case 434:
case 3767:
case 2109:
case 3742:
case 2272:
case 1037:
case 2222:
case 3618:
case 3242:
case 1549:
case 2750:
case 464:
case 26:
case 2717:
case 89:
case 2368:
case 1618:
case 752:
case 3037:
case 1267:
case 2579:
case 429:
case 3753:
case 1087:
case 2958:
case 2128:
case 2178:
case 2056:
case 2991:
case 1692:
case 3087:
case 802:
case 2508:
case 943:
case 2495:
case 3392:
case 479:
case 1219:
case 2504:
case 1199:
case 3411:
case 4046:
case 391:
case 2769:
case 836:
case 191:
case 348:
case 700:
case 2810:
case 3199:
case 2009:
case 3219:
case 3981:
case 1512:
case 2124:
case 1137:
case 296:
case 866:
case 3485:
case 3144:
case 2562:
case 596:
case 2039:
case 2461:
case 1860:
case 2547:
case 726:
case 2269:
case 3443:
case 1144:
case 1719:
case 3137:
case 2473:
case 3435:
case 2926:
case 2976:
case 401:
case 3806:
case 340:
case 2871:
case 2078:
case 1420:
case 2332:
case 2602:
case 3901:
case 3048:
case 3841:
case 2584:
case 2364:
case 1841:
case 140:
case 1806:
case 2863:
case 1435:
case 812:
case 3551:
case 3452:
case 817:
case 2664:
case 1314:
case 265:
case 143:
case 1836:
case 2355:
case 343:
case 3813:
case 853:
case 2302:
case 2632:
case 3931:
case 1452:
case 1551:
case 3104:
case 586:
case 2507:
case 608:
case 1960:
case 3960:
case 4013:
case 3815:
case 975:
case 2599:
case 3403:
case 925:
case 3574:
case 1079:
case 3524:
case 1986:
case 3147:
case 3416:
case 2127:
case 1134:
case 3162:
case 1433:
case 2865:
case 1416:
case 3986:
case 1524:
case 2537:
case 2910:
case 704:
case 3881:
case 3088:
case 37:
case 1322:
case 1372:
case 1831:
case 1184:
case 1913:
case 1936:
case 2475:
case 1483:
case 3913:
case 1556:
case 2718:
case 3038:
case 2342:
case 477:
case 2587:
case 2367:
case 17:
case 600:
case 2826:
case 344:
case 12:
case 3906:
case 2151:
case 2667:
case 3672:
case 2921:
case 3008:
case 3941:
case 2642:
case 1350:
case 1801:
case 2400:
case 1622:
case 1672:
case 2843:
case 2699:
case 2903:
case 4075:
case 1068:
case 3861:
case 811:
case 2607:
case 2337:
case 4030:
case 3966:
case 1873:
case 1708:
case 2885:
case 3410:
case 1980:
case 4000:
case 606:
case 588:
case 2486:
case 30:
case 670:
case 10:
case 2916:
case 407:
case 2018:
case 2644:
case 3980:
case 3624:
case 623:
case 1410:
case 583:
case 3155:
case 2687:
case 1517:
case 3975:
case 1729:
case 283:
case 1779:
case 2436:
case 1102:
case 2945:
case 834:
case 2983:
case 3102:
case 2114:
case 3788:
case 774:
case 4066:
case 1925:
case 1975:
case 1155:
case 197:
case 3356:
case 2249:
case 1522:
case 1572:
case 1421:
case 2387:
case 3421:
case 74:
case 1900:
case 905:
case 2542:
case 315:
case 580:
case 594:
case 1288:
case 392:
case 864:
case 397:
case 3164:
case 294:
case 280:
case 2406:
case 1880:
case 2347:
case 2582:
case 3377:
case 2362:
case 598:
case 1612:
case 3465:
case 298:
case 2816:
case 419:
case 541:
case 3612:
case 2604:
case 2911:
case 1377:
case 728:
case 2943:
case 2789:
case 2803:
case 2415:
case 2728:
case 778:
case 3973:
case 1866:
case 2778:
case 624:
case 1454:
case 3153:
case 3677:
case 1312:
case 3961:
case 1153:
case 3454:
case 346:
case 1923:
case 2985:
case 1748:
case 669:
case 773:
case 2150:
case 3398:
case 2739:
case 1426:
case 2684:
case 2209:
case 3019:
case 2920:
case 720:
case 3940:
case 1940:
case 1800:
case 1351:
case 1019:
case 590:
case 2502:
case 2401:
case 833:
case 3476:
case 382:
case 2446:
case 593:
case 2532:
case 706:
case 1830:
case 2797:
case 3825:
case 293:
case 2905:
case 830:
case 1698:
case 2883:
case 2709:
case 255:
case 639:
case 1825:
case 770:
case 723:
case 2239:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760259601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,];
var gg_b = "1760259601/";

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
