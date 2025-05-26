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
case 2682:
case 2539:
case 436:
case 1638:
case 3752:
case 2980:
case 2765:
case 2696:
case 258:
case 1874:
case 4035:
case 723:
case 2528:
case 1459:
case 1582:
case 2901:
case 1639:
case 808:
case 722:
case 2538:
case 1644:
case 1913:
case 1253:
case 714:
case 1812:
case 1147:
case 3254:
case 3914:
case 108:
case 1028:
case 1038:
case 3447:
case 416:
case 1029:
case 3906:
case 868:
case 3358:
case 4051:
case 3304:
case 3403:
case 3209:
case 1103:
case 3745:
case 2378:
case 1395:
case 2274:
case 2706:
case 2379:
case 895:
case 501:
case 821:
case 2212:
case 3780:
case 121:
case 2663:
case 3965:
case 1416:
case 2420:
case 2467:
case 2430:
case 57:
case 978:
case 1563:
case 2178:
case 2772:
case 1404:
case 2997:
case 2527:
case 1228:
case 3798:
case 2537:
case 927:
case 2300:
case 3054:
case 1492:
case 96:
case 568:
case 1349:
case 745:
case 1637:
case 2381:
case 3123:
case 1653:
case 1334:
case 3864:
case 3424:
case 3291:
case 3333:
case 1863:
case 3434:
case 3323:
case 1731:
case 1134:
case 1124:
case 3357:
case 274:
case 508:
case 1060:
case 2100:
case 3386:
case 1037:
case 3448:
case 87:
case 1882:
case 3540:
case 4094:
case 1574:
case 3207:
case 101:
case 3609:
case 2012:
case 954:
case 2829:
case 2674:
case 861:
case 2844:
case 2377:
case 480:
case 3815:
case 3608:
case 1926:
case 2263:
case 161:
case 2469:
case 2250:
case 3585:
case 2998:
case 595:
case 521:
case 3008:
case 17:
case 2074:
case 3391:
case 3343:
case 3444:
case 1129:
case 1741:
case 1470:
case 3659:
case 406:
case 3257:
case 674:
case 272:
case 2788:
case 3292:
case 1138:
case 118:
case 273:
case 1128:
case 348:
case 3658:
case 838:
case 3428:
case 2196:
case 917:
case 704:
case 1047:
case 3438:
case 1248:
case 466:
case 1328:
case 2382:
case 2547:
case 2396:
case 937:
case 3143:
case 1249:
case 590:
case 1329:
case 2281:
case 1877:
case 1344:
case 1234:
case 1443:
case 2078:
case 1946:
case 2350:
case 651:
case 1407:
case 3016:
case 2994:
case 2079:
case 1603:
case 3520:
case 511:
case 688:
case 3567:
case 3604:
case 1695:
case 1766:
case 3307:
case 3989:
case 2678:
case 2849:
case 1881:
case 2163:
case 3988:
case 2595:
case 2277:
case 2834:
case 2011:
case 1578:
case 2679:
case 2824:
case 393:
case 2150:
case 3453:
case 2935:
case 713:
case 3623:
case 1137:
case 712:
case 3633:
case 681:
case 3657:
case 3427:
case 3259:
case 1153:
case 999:
case 3919:
case 1048:
case 2756:
case 3692:
case 3686:
case 4080:
case 2803:
case 1581:
case 190:
case 2549:
case 93:
case 2534:
case 2600:
case 3033:
case 2895:
case 4045:
case 2681:
case 724:
case 3867:
case 1327:
case 1649:
case 658:
case 732:
case 538:
case 1634:
case 1353:
case 1500:
case 2312:
case 2440:
case 3702:
case 811:
case 2211:
case 1203:
case 3109:
case 3204:
case 2485:
case 3735:
case 2847:
case 111:
case 3568:
case 2473:
case 2790:
case 2718:
case 2279:
case 2677:
case 1692:
case 3034:
case 3049:
case 1918:
case 2557:
case 1686:
case 2592:
case 3160:
case 407:
case 1354:
case 159:
case 1623:
case 3137:
case 1259:
case 3153:
case 1919:
case 3048:
case 742:
case 1460:
case 2586:
case 1657:
case 3327:
case 3649:
case 3360:
case 1820:
case 1154:
case 3247:
case 1086:
case 1830:
case 3353:
case 3500:
case 3879:
case 2816:
case 859:
case 1971:
case 936:
case 484:
case 2804:
case 3581:
case 705:
case 1033:
case 42:
case 1023:
case 3409:
case 1109:
case 589:
case 2859:
case 1702:
case 270:
case 1108:
case 2373:
case 2267:
case 2220:
case 2340:
case 2230:
case 2173:
case 1308:
case 1216:
case 1569:
case 3577:
case 1725:
case 3295:
case 1987:
case 1309:
case 1735:
case 592:
case 798:
case 2185:
case 318:
case 559:
case 3732:
case 3128:
case 2496:
case 947:
case 1286:
case 1438:
case 148:
case 2559:
case 3741:
case 1233:
case 3139:
case 1391:
case 2966:
case 725:
case 1917:
case 2115:
case 1170:
case 3329:
case 471:
case 1869:
case 1191:
case 3249:
case 1143:
case 2315:
case 1794:
case 3344:
case 848:
case 3328:
case 427:
case 3961:
case 189:
case 2892:
case 1107:
case 710:
case 2905:
case 2823:
case 3511:
case 3946:
case 892:
case 3095:
case 2761:
case 2164:
case 3003:
case 454:
case 2667:
case 2450:
case 1616:
case 3578:
case 193:
case 192:
case 2268:
case 1530:
case 756:
case 889:
case 3579:
case 2941:
case 3800:
case 3766:
case 1123:
case 3660:
case 4066:
case 3627:
case 3239:
case 1133:
case 1157:
case 3324:
case 1864:
case 3962:
case 1270:
case 3334:
case 3244:
case 3423:
case 1798:
case 328:
case 2775:
case 1192:
case 3486:
case 1186:
case 2736:
case 2726:
case 1054:
case 2807:
case 437:
case 3742:
case 1392:
case 2554:
case 985:
case 1386:
case 3037:
case 1448:
case 3060:
case 3863:
case 3731:
case 1243:
case 3149:
case 3721:
case 1333:
case 1654:
case 1449:
case 3850:
case 3124:
case 2481:
case 2640:
case 1608:
case 1815:
case 1540:
case 2073:
case 3574:
case 301:
case 876:
case 1609:
case 2931:
case 3896:
case 720:
case 4005:
case 2921:
case 1207:
case 3512:
case 176:
case 2040:
case 2477:
case 3936:
case 3926:
case 2673:
case 1585:
case 4022:
case 3975:
case 3227:
case 3639:
case 779:
case 3629:
case 3582:
case 3596:
case 3638:
case 483:
case 3628:
case 1158:
case 2570:
case 2809:
case 275:
case 2591:
case 2543:
case 1070:
case 2015:
case 1906:
case 1358:
case 1885:
case 3029:
case 1691:
case 1914:
case 1359:
case 1447:
case 3028:
case 2330:
case 2664:
case 1316:
case 1304:
case 1607:
case 760:
case 594:
case 3395:
case 1209:
case 1745:
case 2478:
case 2713:
case 1495:
case 2064:
case 1104:
case 3563:
case 2285:
case 3303:
case 3550:
case 3416:
case 2479:
case 2130:
case 576:
case 395:
case 321:
case 1116:
case 3373:
case 1771:
case 1440:
case 3859:
case 3140:
case 695:
case 2408:
case 677:
case 465:
case 443:
case 1211:
case 707:
case 1077:
case 3185:
case 2295:
case 2577:
case 934:
case 3668:
case 1485:
case 922:
case 3173:
case 1279:
case 72:
case 767:
case 3412:
case 3230:
case 3340:
case 1112:
case 211:
case 405:
case 3669:
case 1374:
case 1718:
case 1790:
case 3267:
case 1976:
case 608:
case 4013:
case 778:
case 1935:
case 572:
case 1000:
case 1925:
case 3592:
case 3523:
case 2811:
case 3533:
case 369:
case 2878:
case 1524:
case 1895:
case 1600:
case 1534:
case 3804:
case 1902:
case 668:
case 2454:
case 3816:
case 2624:
case 2353:
case 2634:
case 2247:
case 1548:
case 2649:
case 902:
case 3857:
case 1350:
case 3761:
case 661:
case 1464:
case 3823:
case 3905:
case 67:
case 3020:
case 3030:
case 491:
case 3892:
case 1611:
case 2407:
case 2800:
case 3993:
case 2579:
case 962:
case 3268:
case 771:
case 727:
case 76:
case 1150:
case 1679:
case 2578:
case 3932:
case 1011:
case 4026:
case 3620:
case 3269:
case 1163:
case 4036:
case 2003:
case 4062:
case 3115:
case 3966:
case 1415:
case 2793:
case 2129:
case 3482:
case 3559:
case 3496:
case 2128:
case 2732:
case 218:
case 3746:
case 872:
case 628:
case 2338:
case 2248:
case 1547:
case 238:
case 2328:
case 754:
case 430:
case 456:
case 2339:
case 1281:
case 2329:
case 851:
case 2896:
case 3931:
case 201:
case 415:
case 3508:
case 1828:
case 1844:
case 3870:
case 3509:
case 3264:
case 3942:
case 1839:
case 3085:
case 3640:
case 2975:
case 1469:
case 1998:
case 1910:
case 3673:
case 2926:
case 3891:
case 1612:
case 2936:
case 1263:
case 1468:
case 888:
case 27:
case 3040:
case 3168:
case 2512:
case 2755:
case 3807:
case 874:
case 1300:
case 1553:
case 149:
case 3736:
case 1560:
case 3775:
case 1537:
case 228:
case 753:
case 2244:
case 2653:
case 2962:
case 95:
case 2239:
case 3783:
case 2627:
case 2457:
case 2229:
case 1784:
case 2134:
case 2850:
case 2124:
case 2731:
case 1181:
case 2863:
case 2027:
case 4061:
case 2060:
case 2037:
case 581:
case 3554:
case 339:
case 2053:
case 2742:
case 174:
case 2103:
case 98:
case 2395:
case 3411:
case 1714:
case 1111:
case 932:
case 3664:
case 3507:
case 3330:
case 1837:
case 782:
case 1860:
case 588:
case 3320:
case 1706:
case 1827:
case 611:
case 1650:
case 1179:
case 746:
case 1952:
case 1212:
case 3167:
case 3120:
case 1178:
case 444:
case 277:
case 2563:
case 1311:
case 913:
case 3713:
case 912:
case 1980:
case 3809:
case 3570:
case 1696:
case 1544:
case 1682:
case 2628:
case 690:
case 2458:
case 2638:
case 1539:
case 957:
case 2253:
case 2596:
case 549:
case 2459:
case 2347:
case 2629:
case 2874:
case 158:
case 1538:
case 2260:
case 1901:
case 2227:
case 2028:
case 2038:
case 2147:
case 2812:
case 1945:
case 1096:
case 2029:
case 2039:
case 3015:
case 2044:
case 2208:
case 1664:
case 641:
case 3379:
case 3860:
case 1320:
case 905:
case 1330:
case 3837:
case 1411:
case 3063:
case 986:
case 2403:
case 3050:
case 434:
case 2304:
case 3997:
case 3772:
case 3178:
case 942:
case 1285:
case 3311:
case 2104:
case 1064:
case 2495:
case 3430:
case 3467:
case 3179:
case 1479:
case 716:
case 2780:
case 3212:
case 2670:
case 4019:
case 1615:
case 3538:
case 2972:
case 197:
case 3901:
case 3528:
case 519:
case 358:
case 2043:
case 3696:
case 3765:
case 3544:
case 4018:
case 3980:
case 2515:
case 175:
case 59:
case 3682:
case 2358:
case 2906:
case 2885:
case 2070:
case 1543:
case 1591:
case 875:
case 4071:
case 1015:
case 897:
case 2914:
case 2254:
case 381:
case 539:
case 294:
case 1509:
case 693:
case 1640:
case 3012:
case 1931:
case 2609:
case 1508:
case 388:
case 3828:
case 462:
case 1685:
case 2573:
case 1040:
case 689:
case 1762:
case 276:
case 3998:
case 403:
case 1673:
case 1955:
case 1215:
case 396:
case 2123:
case 2799:
case 3381:
case 956:
case 349:
case 1736:
case 839:
case 2054:
case 780:
case 3553:
case 3296:
case 2798:
case 2710:
case 3527:
case 3560:
case 1400:
case 374:
case 2392:
case 139:
case 2357:
case 2449:
case 910:
case 3784:
case 89:
case 1481:
case 2323:
case 2654:
case 2291:
case 2424:
case 570:
case 1886:
case 1030:
case 1905:
case 706:
case 1020:
case 2107:
case 3079:
case 2016:
case 3611:
case 289:
case 404:
case 3350:
case 3503:
case 3363:
case 1833:
case 293:
case 3679:
case 1364:
case 2616:
case 1922:
case 3595:
case 2988:
case 3163:
case 1269:
case 1504:
case 1450:
case 3849:
case 1667:
case 766:
case 2989:
case 3717:
case 464:
case 2520:
case 3196:
case 1559:
case 2428:
case 248:
case 373:
case 2257:
case 2917:
case 2439:
case 2170:
case 2659:
case 1558:
case 1966:
case 3415:
case 3789:
case 2233:
case 2794:
case 45:
case 1315:
case 2370:
case 3281:
case 1746:
case 3200:
case 3547:
case 2868:
case 2109:
case 1069:
case 412:
case 3951:
case 1474:
case 170:
case 2702:
case 3174:
case 1140:
case 3312:
case 3677:
case 2216:
case 2308:
case 3279:
case 726:
case 4065:
case 3473:
case 1340:
case 3112:
case 1669:
case 2725:
case 1185:
case 3278:
case 2735:
case 2776:
case 979:
case 432:
case 433:
case 2569:
case 755:
case 2686:
case 1557:
case 1533:
case 1523:
case 2437:
case 2919:
case 2460:
case 3787:
case 2623:
case 2453:
case 3935:
case 109:
case 2154:
case 4014:
case 2867:
case 3681:
case 2033:
case 869:
case 2057:
case 1804:
case 1817:
case 214:
case 1142:
case 781:
case 3398:
case 3442:
case 2866:
case 2781:
case 1131:
case 1121:
case 1205:
case 4007:
case 1724:
case 2056:
case 1734:
case 1293:
case 3199:
case 3723:
case 3733:
case 2483:
case 1499:
case 3110:
case 758:
case 1587:
case 3051:
case 1222:
case 2288:
case 222:
case 624:
case 1969:
case 68:
case 1498:
case 1155:
case 2957:
case 3002:
case 2619:
case 83:
case 4070:
case 1590:
case 34:
case 146:
case 3635:
case 11:
case 1519:
case 2618:
case 199:
case 899:
case 2893:
case 3035:
case 1889:
case 3602:
case 183:
case 1355:
case 182:
case 81:
case 336:
case 3981:
case 4091:
case 350:
case 1571:
case 2090:
case 2505:
case 1819:
case 4008:
case 2365:
case 2089:
case 1093:
case 3352:
case 1605:
case 1818:
case 774:
case 4009:
case 202:
case 604:
case 203:
case 3251:
case 3197:
case 1588:
case 2522:
case 1693:
case 2532:
case 3978:
case 3759:
case 262:
case 1452:
case 1589:
case 245:
case 2688:
case 1622:
case 3979:
case 2541:
case 2256:
case 1632:
case 687:
case 1401:
case 1666:
case 1795:
case 3101:
case 117:
case 2218:
case 2306:
case 2290:
case 640:
case 3180:
case 1517:
case 546:
case 2566:
case 1480:
case 51:
case 2779:
case 583:
case 788:
case 582:
case 3380:
case 53:
case 2271:
case 65:
case 3202:
case 3561:
case 1445:
case 2711:
case 137:
case 2372:
case 3145:
case 1451:
case 1631:
case 2909:
case 154:
case 2684:
case 492:
case 3098:
case 3151:
case 3813:
case 2356:
case 264:
case 2531:
case 662:
case 2908:
case 645:
case 1642:
case 287:
case 1872:
case 3974:
case 901:
case 1940:
case 3583:
case 3698:
case 2156:
case 1973:
case 2265:
case 1814:
case 1031:
case 3252:
case 97:
case 772:
case 1806:
case 578:
case 1727:
case 1985:
case 1737:
case 3526:
case 3536:
case 3562:
case 2118:
case 4058:
case 171:
case 3280:
case 2371:
case 52:
case 80:
case 3302:
case 2119:
case 1435:
case 3176:
case 1425:
case 928:
case 127:
case 3201:
case 3125:
case 3135:
case 3376:
case 2319:
case 507:
case 3325:
case 1865:
case 2214:
case 3335:
case 3245:
case 3709:
case 2390:
case 2206:
case 2318:
case 240:
case 2774:
case 10:
case 3102:
case 871:
case 2171:
case 3052:
case 1341:
case 1105:
case 2907:
case 1494:
case 2389:
case 3194:
case 2284:
case 441:
case 2855:
case 2388:
case 1322:
case 2446:
case 28:
case 3210:
case 212:
case 1122:
case 3652:
case 3963:
case 977:
case 2796:
case 995:
case 1193:
case 1739:
case 3697:
case 1744:
case 3493:
case 1565:
case 2831:
case 2763:
case 4086:
case 3996:
case 2014:
case 2821:
case 807:
case 2750:
case 1884:
case 3466:
case 2842:
case 1255:
case 4057:
case 326:
case 167:
case 3601:
case 867:
case 82:
case 1506:
case 50:
case 3080:
case 3645:
case 3826:
case 884:
case 1366:
case 2072:
case 459:
case 2606:
case 2461:
case 1514:
case 3322:
case 3332:
case 3964:
case 709:
case 855:
case 3221:
case 3494:
case 1743:
case 1791:
case 3231:
case 3393:
case 205:
case 411:
case 1405:
case 1697:
case 2283:
case 3729:
case 3193:
case 1299:
case 1770:
case 3565:
case 1394:
case 2552:
case 2489:
case 155:
case 2597:
case 2275:
case 3738:
case 1210:
case 243:
case 1432:
case 1652:
case 242:
case 1963:
case 2262:
case 2944:
case 3255:
case 384:
case 3166:
case 2939:
case 367:
case 32:
case 566:
case 2938:
case 2501:
case 298:
case 660:
case 1001:
case 2899:
case 3514:
case 2545:
case 1875:
case 4034:
case 1707:
case 4049:
case 770:
case 1080:
case 506:
case 826:
case 1645:
case 3642:
case 1813:
case 3940:
case 1099:
case 3584:
case 615:
case 2083:
case 3631:
case 354:
case 2880:
case 4003:
case 3621:
case 1754:
case 1098:
case 1151:
case 2075:
case 729:
case 1297:
case 2683:
case 1351:
case 1536:
case 3753:
case 1526:
case 1698:
case 1610:
case 2599:
case 3973:
case 976:
case 1912:
case 2636:
case 225:
case 291:
case 2626:
case 3814:
case 438:
case 3425:
case 2213:
case 2953:
case 2419:
case 2937:
case 1135:
case 1201:
case 806:
case 371:
case 1280:
case 256:
case 2773:
case 2418:
case 2740:
case 30:
case 2471:
case 3055:
case 106:
case 2062:
case 418:
case 866:
case 4047:
case 1335:
case 1245:
case 185:
case 3865:
case 880:
case 3747:
case 3890:
case 3032:
case 1694:
case 3022:
case 989:
case 2876:
case 235:
case 2835:
case 2594:
case 1352:
case 625:
case 2825:
case 691:
case 79:
case 3632:
case 1094:
case 3589:
case 1152:
case 401:
case 215:
case 3005:
case 3967:
case 3693:
case 1197:
case 3588:
case 3497:
case 993:
case 3871:
case 992:
case 1759:
case 54:
case 2767:
case 610:
case 2472:
case 4:
case 147:
case 4053:
case 4037:
case 1235:
case 948:
case 2061:
case 1225:
case 4060:
case 317:
case 2414:
case 3856:
case 2313:
case 3703:
case 656:
case 3887:
case 536:
case 2661:
case 2406:
case 550:
case 220:
case 421:
case 1431:
case 2375:
case 3748:
case 3817:
case 1398:
case 642:
case 244:
case 665:
case 2326:
case 2551:
case 2336:
case 797:
case 2175:
case 3222:
case 1977:
case 1110:
case 1198:
case 3232:
case 686:
case 3410:
case 3498:
case 580:
case 2183:
case 605:
case 1861:
case 3556:
case 1199:
case 3293:
case 3241:
case 3331:
case 1723:
case 1757:
case 3519:
case 547:
case 959:
case 2769:
case 2525:
case 2894:
case 408:
case 116:
case 1676:
case 14:
case 4044:
case 2768:
case 3266:
case 1625:
case 346:
case 1846:
case 4029:
case 2362:
case 3888:
case 2934:
case 2924:
case 383:
case 3355:
case 2502:
case 816:
case 33:
case 84:
case 1900:
case 2261:
case 2948:
case 1076:
case 698:
case 398:
case 3928:
case 157:
case 2884:
case 2572:
case 1763:
case 958:
case 1014:
case 1006:
case 3417:
case 267:
case 55:
case 2166:
case 1672:
case 682:
case 1842:
case 3580:
case 711:
case 3613:
case 3262:
case 2366:
case 1614:
case 3810:
case 3898:
case 1317:
case 540:
case 469:
case 3545:
case 3764:
case 3013:
case 2514:
case 1606:
case 3161:
case 1072:
case 587:
case 1284:
case 305:
case 2231:
case 1907:
case 790:
case 564:
case 3146:
case 813:
case 133:
case 132:
case 2322:
case 1388:
case 832:
case 3346:
case 3488:
case 342:
case 1796:
case 833:
case 3226:
case 2132:
case 113:
case 278:
case 2738:
case 1188:
case 3597:
case 88:
case 3715:
case 2565:
case 2744:
case 2193:
case 2141:
case 2305:
case 1189:
case 1371:
case 330:
case 3418:
case 15:
case 1118:
case 1712:
case 1555:
case 271:
case 1272:
case 3927:
case 949:
case 2476:
case 557:
case 3419:
case 1119:
case 2425:
case 1954:
case 3852:
case 429:
case 1319:
case 974:
case 310:
case 2055:
case 85:
case 3897:
case 1318:
case 1390:
case 140:
case 2402:
case 1684:
case 533:
case 3026:
case 2621:
case 804:
case 738:
case 532:
case 254:
case 1909:
case 652:
case 2631:
case 1521:
case 1908:
case 1531:
case 164:
case 391:
case 3845:
case 2031:
case 3675:
case 1084:
case 3599:
case 951:
case 887:
case 3487:
case 104:
case 3683:
case 2806:
case 2760:
case 2985:
case 718:
case 3510:
case 1314:
case 2795:
case 972:
case 2401:
case 973:
case 1566:
case 77:
case 3851:
case 1306:
case 3720:
case 1218:
case 2517:
case 1271:
case 3406:
case 1017:
case 3661:
case 66:
case 1114:
case 3947:
case 2856:
case 1711:
case 3825:
case 1089:
case 3835:
case 335:
case 2093:
case 3876:
case 1088:
case 2032:
case 103:
case 2890:
case 2818:
case 2747:
case 7:
case 3903:
case 3802:
case 2871:
case 1904:
case 1522:
case 3995:
case 534:
case 252:
case 522:
case 1532:
case 253:
case 4085:
case 3046:
case 1165:
case 2930:
case 2622:
case 145:
case 2589:
case 2452:
case 4073:
case 3465:
case 1256:
case 1541:
case 21:
case 246:
case 1933:
case 3768:
case 2155:
case 4015:
case 1217:
case 2590:
case 1071:
case 3894:
case 777:
case 299:
case 1986:
case 1618:
case 360:
case 1671:
case 1893:
case 3261:
case 2889:
case 667:
case 23:
case 2571:
case 1018:
case 3949:
case 3502:
case 62:
case 1832:
case 684:
case 1822:
case 1087:
case 3551:
case 708:
case 1700:
case 834:
case 344:
case 4064:
case 2142:
case 2817:
case 1056:
case 2131:
case 2205:
case 1483:
case 1384:
case 1687:
case 2293:
case 3183:
case 563:
case 3136:
case 1475:
case 2410:
case 2587:
case 2222:
case 1436:
case 3175:
case 1525:
case 1535:
case 1894:
case 1576:
case 3618:
case 1769:
case 3933:
case 2635:
case 2846:
case 3923:
case 100:
case 969:
case 216:
case 2002:
case 1768:
case 3090:
case 3018:
case 250:
case 2981:
case 520:
case 1362:
case 909:
case 3671:
case 3019:
case 2602:
case 2900:
case 2035:
case 458:
case 655:
case 970:
case 535:
case 2431:
case 3056:
case 3866:
case 144:
case 879:
case 314:
case 1136:
case 3475:
case 4063:
case 2977:
case 179:
case 3288:
case 3436:
case 1175:
case 323:
case 2198:
case 3426:
case 844:
case 515:
case 3483:
case 2733:
case 2861:
case 2723:
case 3687:
case 2716:
case 3566:
case 820:
case 3306:
case 2235:
case 3314:
case 2101:
case 685:
case 2704:
case 247:
case 1113:
case 3959:
case 2276:
case 2145:
case 449:
case 1947:
case 2301:
case 3711:
case 1313:
case 2561:
case 496:
case 3106:
case 2694:
case 2546:
case 303:
case 544:
case 3088:
case 1903:
case 2397:
case 1594:
case 4074:
case 1835:
case 1646:
case 1825:
case 3089:
case 451:
case 115:
case 2758:
case 488:
case 3593:
case 2979:
case 345:
case 835:
case 362:
case 3904:
case 1802:
case 2978:
case 3532:
case 1046:
case 2197:
case 3689:
case 1785:
case 1419:
case 3272:
case 1960:
case 2125:
case 792:
case 1927:
case 1662:
case 1953:
case 266:
case 3119:
case 35:
case 2302:
case 3371:
case 810:
case 99:
case 3555:
case 3118:
case 156:
case 856:
case 3171:
case 110:
case 1471:
case 1740:
case 3318:
case 789:
case 3206:
case 3390:
case 2709:
case 2245:
case 2335:
case 3954:
case 2325:
case 473:
case 2099:
case 387:
case 3908:
case 3356:
case 891:
case 505:
case 3521:
case 825:
case 2151:
case 4011:
case 2098:
case 1075:
case 586:
case 3542:
case 1036:
case 2754:
case 1026:
case 543:
case 1487:
case 565:
case 748:
case 542:
case 2699:
case 3187:
case 1598:
case 2297:
case 2575:
case 1845:
case 125:
case 2912:
case 1456:
case 1626:
case 1599:
case 3156:
case 4079:
case 2698:
case 2601:
case 1417:
case 3672:
case 650:
case 530:
case 1613:
case 226:
case 1262:
case 3970:
case 3117:
case 636:
case 3842:
case 1580:
case 357:
case 3750:
case 198:
case 3014:
case 997:
case 2996:
case 2680:
case 1013:
case 1545:
case 2001:
case 2883:
case 3072:
case 2826:
case 3943:
case 3614:
case 2707:
case 2645:
case 510:
case 2080:
case 64:
case 1898:
case 616:
case 38:
case 186:
case 842:
case 3446:
case 3388:
case 333:
case 324:
case 3284:
case 3065:
case 2743:
case 2052:
case 805:
case 591:
case 2770:
case 2493:
case 525:
case 1715:
case 1283:
case 2697:
case 2299:
case 3665:
case 3796:
case 2432:
case 143:
case 165:
case 1346:
case 2422:
case 1236:
case 886:
case 142:
case 2652:
case 759:
case 3188:
case 1597:
case 313:
case 2950:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1748224802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,];
var gg_b = "1748224802/";

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
