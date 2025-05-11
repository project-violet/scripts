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
case 3175:
case 1719:
case 2600:
case 2260:
case 1012:
case 886:
case 3498:
case 193:
case 1983:
case 3717:
case 2578:
case 2474:
case 1625:
case 1290:
case 3283:
case 3891:
case 323:
case 1467:
case 1579:
case 3990:
case 2453:
case 2094:
case 810:
case 3740:
case 2163:
case 3577:
case 1932:
case 1193:
case 2718:
case 3159:
case 821:
case 2613:
case 1302:
case 3531:
case 2369:
case 378:
case 812:
case 3397:
case 3296:
case 2954:
case 1399:
case 2589:
case 75:
case 3050:
case 3353:
case 3782:
case 3441:
case 3374:
case 4031:
case 2550:
case 2823:
case 2620:
case 964:
case 959:
case 3089:
case 1087:
case 2847:
case 2031:
case 88:
case 1265:
case 2274:
case 2999:
case 533:
case 2749:
case 1490:
case 3967:
case 2042:
case 3298:
case 3395:
case 1882:
case 1188:
case 3432:
case 587:
case 1734:
case 592:
case 3609:
case 204:
case 1630:
case 188:
case 2968:
case 71:
case 2189:
case 2253:
case 3692:
case 865:
case 3542:
case 2845:
case 761:
case 1748:
case 290:
case 3131:
case 998:
case 1998:
case 1643:
case 3984:
case 3629:
case 2576:
case 1840:
case 3559:
case 233:
case 1058:
case 492:
case 3177:
case 1941:
case 3496:
case 1791:
case 287:
case 850:
case 647:
case 1001:
case 6:
case 2761:
case 4075:
case 716:
case 4080:
case 1627:
case 745:
case 2716:
case 1465:
case 609:
case 2332:
case 3063:
case 3194:
case 2752:
case 2922:
case 1817:
case 3580:
case 3575:
case 2872:
case 670:
case 590:
case 2059:
case 780:
case 1501:
case 2194:
case 2063:
case 3332:
case 1411:
case 3178:
case 111:
case 1454:
case 927:
case 1558:
case 16:
case 2076:
case 1628:
case 1164:
case 3872:
case 3922:
case 879:
case 4063:
case 1473:
case 1112:
case 2177:
case 3075:
case 1222:
case 3080:
case 3576:
case 2984:
case 1466:
case 569:
case 664:
case 1156:
case 2715:
case 375:
case 392:
case 554:
case 728:
case 3635:
case 387:
case 3563:
case 3189:
case 1710:
case 3297:
case 831:
case 1202:
case 735:
case 304:
case 683:
case 2131:
case 773:
case 1299:
case 3845:
case 1187:
case 3253:
case 2692:
case 166:
case 2395:
case 1570:
case 2298:
case 2967:
case 1086:
case 1953:
case 469:
case 454:
case 3274:
case 1608:
case 1268:
case 269:
case 1614:
case 3460:
case 3671:
case 3550:
case 2374:
case 2441:
case 2782:
case 214:
case 1211:
case 3031:
case 142:
case 1170:
case 1185:
case 3966:
case 4089:
case 2397:
case 2733:
case 4050:
case 3911:
case 3369:
case 1266:
case 3810:
case 1367:
case 478:
case 2848:
case 1273:
case 909:
case 972:
case 2740:
case 995:
case 3094:
case 1499:
case 2990:
case 223:
case 1055:
case 868:
case 2891:
case 3176:
case 2159:
case 1960:
case 423:
case 2469:
case 2577:
case 1861:
case 2638:
case 3704:
case 1816:
case 698:
case 1639:
case 3077:
case 2175:
case 1468:
case 1158:
case 3474:
case 3578:
case 2717:
case 3341:
case 706:
case 3637:
case 1772:
case 140:
case 1384:
case 2591:
case 1325:
case 1104:
case 1856:
case 12:
case 4003:
case 1118:
case 2793:
case 3344:
case 3471:
case 2337:
case 1776:
case 2943:
case 2927:
case 2236:
case 903:
case 806:
case 3701:
case 1406:
case 991:
case 529:
case 624:
case 1015:
case 1516:
case 768:
case 3235:
case 2894:
case 39:
case 3928:
case 2229:
case 181:
case 1552:
case 848:
case 3721:
case 4010:
case 1426:
case 3048:
case 3653:
case 1699:
case 3908:
case 2146:
case 3697:
case 2438:
case 2534:
case 2669:
case 2209:
case 1262:
case 2313:
case 3510:
case 229:
case 1305:
case 1124:
case 1208:
case 1668:
case 2831:
case 1439:
case 3034:
case 3400:
case 4023:
case 2930:
case 1887:
case 2698:
case 3889:
case 160:
case 2548:
case 2320:
case 934:
case 429:
case 702:
case 3787:
case 339:
case 1611:
case 2148:
case 1913:
case 3271:
case 3046:
case 3545:
case 563:
case 1524:
case 1428:
case 1654:
case 3110:
case 1307:
case 1750:
case 1971:
case 3147:
case 2045:
case 2134:
case 731:
case 2696:
case 3392:
case 1821:
case 1870:
case 1885:
case 1673:
case 3435:
case 1149:
case 873:
case 3213:
case 108:
case 1033:
case 549:
case 1330:
case 1152:
case 463:
case 2409:
case 1900:
case 3939:
case 3764:
case 2335:
case 207:
case 2238:
case 2981:
case 2492:
case 371:
case 407:
case 3103:
case 1937:
case 3572:
case 2683:
case 1343:
case 1858:
case 3876:
case 2859:
case 449:
case 2072:
case 1017:
case 146:
case 2244:
case 1451:
case 3863:
case 1239:
case 3200:
case 3336:
case 2632:
case 1518:
case 3019:
case 584:
case 249:
case 794:
case 1504:
case 2237:
case 3779:
case 4019:
case 2926:
case 3072:
case 1540:
case 3859:
case 2876:
case 1328:
case 3191:
case 349:
case 2712:
case 2019:
case 1777:
case 3632:
case 2200:
case 2863:
case 257:
case 880:
case 3519:
case 3409:
case 1004:
case 634:
case 363:
case 750:
case 1407:
case 2329:
case 1794:
case 2572:
case 3875:
case 741:
case 2103:
case 913:
case 1517:
case 3755:
case 3925:
case 3981:
case 3546:
case 1582:
case 1443:
case 1024:
case 2309:
case 765:
case 752:
case 1362:
case 2123:
case 2435:
case 667:
case 3436:
case 4046:
case 1314:
case 2906:
case 1205:
case 1665:
case 1308:
case 1533:
case 2110:
case 897:
case 571:
case 3842:
case 2545:
case 1886:
case 1351:
case 2046:
case 882:
case 691:
case 2220:
case 2271:
case 924:
case 2962:
case 2145:
case 2400:
case 2034:
case 2510:
case 1992:
case 1425:
case 118:
case 3786:
case 3371:
case 4034:
case 3320:
case 78:
case 3023:
case 1049:
case 3907:
case 3292:
case 2523:
case 517:
case 712:
case 2770:
case 2721:
case 85:
case 3669:
case 1306:
case 2914:
case 2547:
case 4048:
case 3438:
case 2697:
case 174:
case 1182:
case 3146:
case 2908:
case 2235:
case 953:
case 2338:
case 105:
case 1227:
case 4091:
case 2701:
case 838:
case 2878:
case 1326:
case 3119:
case 2758:
case 2928:
case 1759:
case 217:
case 1684:
case 3337:
case 2420:
case 2471:
case 1879:
case 596:
case 3641:
case 676:
case 1140:
case 1339:
case 1016:
case 3757:
case 417:
case 3927:
case 1535:
case 1319:
case 3216:
case 1036:
case 2657:
case 3126:
case 1961:
case 172:
case 2693:
case 3252:
case 1676:
case 985:
case 20:
case 2991:
case 2482:
case 3317:
case 2741:
case 977:
case 714:
case 506:
case 3139:
case 1722:
case 1952:
case 1029:
case 3043:
case 35:
case 3658:
case 448:
case 688:
case 2125:
case 3261:
case 325:
case 951:
case 2318:
case 2769:
case 1:
case 1702:
case 3030:
case 3508:
case 3404:
case 1009:
case 3947:
case 2934:
case 4062:
case 2324:
case 2105:
case 3007:
case 3621:
case 723:
case 3873:
case 356:
case 2686:
case 2417:
case 3249:
case 2051:
case 1346:
case 2798:
case 2507:
case 1113:
case 4008:
case 1472:
case 3562:
case 109:
case 3811:
case 2530:
case 4051:
case 2014:
case 573:
case 380:
case 693:
case 1689:
case 1754:
case 3795:
case 2130:
case 849:
case 1874:
case 3005:
case 3416:
case 535:
case 632:
case 316:
case 3151:
case 1766:
case 2505:
case 3802:
case 228:
case 2006:
case 863:
case 2233:
case 920:
case 2796:
case 3108:
case 3899:
case 2688:
case 1245:
case 1348:
case 3114:
case 1853:
case 1571:
case 3972:
case 2783:
case 361:
case 3822:
case 2581:
case 2240:
case 1678:
case 2026:
case 2919:
case 3664:
case 3204:
case 31:
case 1410:
case 235:
case 1500:
case 3539:
case 3315:
case 96:
case 754:
case 1447:
case 3612:
case 769:
case 3760:
case 397:
case 1918:
case 528:
case 2732:
case 2679:
case 3526:
case 1272:
case 3025:
case 2127:
case 2352:
case 2217:
case 1135:
case 4039:
case 3732:
case 1677:
case 4025:
case 3143:
case 1129:
case 2760:
case 297:
case 545:
case 1219:
case 516:
case 1303:
case 282:
case 1000:
case 642:
case 3039:
case 1790:
case 482:
case 2449:
case 3884:
case 3217:
case 839:
case 2025:
case 3127:
case 497:
case 2656:
case 3026:
case 1917:
case 3240:
case 41:
case 3581:
case 2822:
case 3783:
case 2972:
case 1448:
case 704:
case 2218:
case 461:
case 1869:
case 328:
case 677:
case 3505:
case 2802:
case 1310:
case 582:
case 685:
case 245:
case 2114:
case 416:
case 1982:
case 3796:
case 3867:
case 2452:
case 4005:
case 3130:
case 2795:
case 988:
case 1020:
case 1071:
case 857:
case 1323:
case 3349:
case 280:
case 1347:
case 198:
case 1765:
case 1192:
case 3107:
case 51:
case 2868:
case 1631:
case 2106:
case 2249:
case 3051:
case 2774:
case 3417:
case 1642:
case 817:
case 2910:
case 1234:
case 1509:
case 159:
case 3934:
case 2947:
case 238:
case 2030:
case 2508:
case 456:
case 3769:
case 1896:
case 1767:
case 1345:
case 2685:
case 1248:
case 2621:
case 2670:
case 438:
case 1291:
case 1675:
case 1680:
case 932:
case 183:
case 2658:
case 4027:
case 425:
case 1144:
case 1035:
case 1536:
case 2601:
case 2261:
case 3215:
case 137:
case 3125:
case 3304:
case 45:
case 1915:
case 3657:
case 2317:
case 556:
case 3991:
case 1446:
case 620:
case 1659:
case 1529:
case 3543:
case 2252:
case 3693:
case 3617:
case 2978:
case 1955:
case 1725:
case 1781:
case 1376:
case 3994:
case 2256:
case 28:
case 153:
case 2393:
case 3744:
case 2737:
case 2090:
case 1583:
case 2357:
case 48:
case 2122:
case 1277:
case 1363:
case 2212:
case 1836:
case 1060:
case 1619:
case 2618:
case 3184:
case 2264:
case 144:
case 2604:
case 3827:
case 3738:
case 421:
case 608:
case 3255:
case 1829:
case 3358:
case 2421:
case 2485:
case 212:
case 1294:
case 796:
case 3288:
case 410:
case 3370:
case 1892:
case 3807:
case 2554:
case 2168:
case 79:
case 1475:
case 368:
case 3565:
case 3830:
case 1809:
case 2401:
case 2713:
case 1198:
case 918:
case 3931:
case 210:
case 2814:
case 2287:
case 486:
case 2199:
case 1231:
case 2808:
case 3167:
case 2065:
case 3011:
case 3493:
case 717:
case 2771:
case 1169:
case 974:
case 4065:
case 1988:
case 521:
case 646:
case 286:
case 512:
case 1646:
case 2386:
case 1596:
case 662:
case 1634:
case 2412:
case 2173:
case 552:
case 394:
case 2502:
case 3068:
case 1477:
case 757:
case 1389:
case 1242:
case 3286:
case 2649:
case 300:
case 1350:
case 250:
case 2285:
case 3099:
case 1494:
case 1598:
case 875:
case 892:
case 3792:
case 241:
case 3455:
case 3165:
case 771:
case 124:
case 2806:
case 3002:
case 1097:
case 1730:
case 3709:
case 1838:
case 93:
case 1957:
case 1727:
case 890:
case 2735:
case 804:
case 1691:
case 1275:
case 2355:
case 3959:
case 452:
case 465:
case 1132:
case 1844:
case 3975:
case 660:
case 626:
case 550:
case 2084:
case 3825:
case 3881:
case 2652:
case 541:
case 2379:
case 1183:
case 3257:
case 113:
case 2616:
case 3312:
case 1276:
case 1041:
case 618:
case 2293:
case 2881:
case 1489:
case 1728:
case 2980:
case 202:
case 2312:
case 3487:
case 3616:
case 2736:
case 946:
case 3735:
case 2190:
case 915:
case 4022:
case 3963:
case 2615:
case 594:
case 784:
case 3661:
case 1450:
case 3976:
case 2729:
case 2959:
case 1160:
case 3355:
case 3826:
case 1478:
case 3067:
case 2792:
case 3221:
case 763:
case 1762:
case 2709:
case 1195:
case 502:
case 1813:
case 1610:
case 3464:
case 1714:
case 2068:
case 1331:
case 1708:
case 1597:
case 294:
case 3173:
case 1647:
case 279:
case 3412:
case 1553:
case 1871:
case 3649:
case 479:
case 908:
case 3599:
case 1751:
case 1985:
case 2479:
case 4068:
case 2167:
case 4054:
case 2457:
case 3199:
case 1463:
case 3287:
case 1153:
case 1289:
case 1342:
case 386:
case 3851:
case 63:
case 3458:
case 3554:
case 2807:
case 3624:
case 1250:
case 2073:
case 2385:
case 2321:
case 1645:
case 1706:
case 3401:
case 3713:
case 4073:
case 2066:
case 1987:
case 823:
case 3511:
case 1174:
case 1912:
case 2827:
case 3264:
case 92:
case 1835:
case 1726:
case 3485:
case 962:
case 103:
case 2843:
case 1278:
case 321:
case 1083:
case 1375:
case 2255:
case 3393:
case 3256:
case 38:
case 2279:
case 3828:
case 191:
case 2486:
case 981:
case 3122:
case 3357:
case 658:
case 3700:
case 814:
case 1739:
case 2935:
case 3405:
case 870:
case 3140:
case 3016:
case 3515:
case 262:
case 3339:
case 1236:
case 2561:
case 2118:
case 462:
case 3684:
case 2104:
case 2856:
case 22:
case 641:
case 2622:
case 560:
case 526:
case 1894:
case 3775:
case 3780:
case 4015:
case 847:
case 305:
case 734:
case 481:
case 3936:
case 2406:
case 2864:
case 767:
case 1209:
case 3230:
case 2262:
case 1313:
case 1010:
case 374:
case 0:
case 1146:
case 665:
case 652:
case 399:
case 1292:
case 2549:
case 3888:
case 52:
case 2426:
case 3667:
case 1786:
case 3742:
case 791:
case 895:
case 3133:
case 872:
case 3481:
case 3425:
case 1907:
case 968:
case 1371:
case 1320:
case 1548:
case 1444:
case 2251:
case 226:
case 1023:
case 426:
case 1047:
case 2214:
case 2887:
case 1930:
case 2305:
case 129:
case 1831:
case 2668:
case 24:
case 336:
case 1842:
case 3886:
case 2913:
case 44:
case 3665:
case 3205:
case 208:
case 3427:
case 2033:
case 2149:
case 1696:
case 1134:
case 612:
case 1045:
case 1546:
case 3582:
case 2885:
case 827:
case 2870:
case 515:
case 1788:
case 4033:
case 979:
case 3443:
case 1429:
case 408:
case 2971:
case 621:
case 1880:
case 2858:
case 163:
case 902:
case 2040:
case 2226:
case 3794:
case 2116:
case 1755:
case 1925:
case 1981:
case 1492:
case 2778:
case 3517:
case 3018:
case 2801:
case 3004:
case 1409:
case 3430:
case 4040:
case 2462:
case 3938:
case 149:
case 1191:
case 2408:
case 3857:
case 2239:
case 2518:
case 3777:
case 415:
case 931:
case 1632:
case 776:
case 33:
case 3328:
case 3690:
case 1072:
case 2777:
case 3518:
case 1019:
case 157:
case 3239:
case 1660:
case 1336:
case 1200:
case 2857:
case 3504:
case 1712:
case 2938:
case 2281:
case 2225:
case 2328:
case 1876:
case 2540:
case 346:
case 3451:
case 898:
case 3017:
case 2115:
case 3161:
case 536:
case 4018:
case 3778:
case 171:
case 2794:
case 1329:
case 3226:
case 3858:
case 2944:
case 3462:
case 1939:
case 724:
case 2018:
case 1435:
case 3149:
case 3206:
case 4024:
case 3330:
case 3666:
case 2427:
case 1213:
case 3920:
case 3971:
case 53:
case 3750:
case 3307:
case 2024:
case 2443:
case 3821:
case 3870:
case 2582:
case 1147:
case 236:
case 2351:
case 34:
case 2205:
case 139:
case 3611:
case 1787:
case 3913:
case 941:
case 2731:
case 1906:
case 326:
case 2049:
case 1889:
case 2425:
case 2992:
case 2742:
case 3668:
case 3208:
case 1510:
case 3305:
case 3124:
case 3214:
case 3887:
case 505:
case 1034:
case 3439:
case 1962:
case 744:
case 299:
case 1547:
case 2182:
case 1697:
case 3262:
case 3602:
case 1914:
case 2306:
case 2230:
case 883:
case 2207:
case 3426:
case 2667:
case 1721:
case 1951:
case 1770:
case 1785:
case 3699:
case 2888:
case 1850:
case 499:
case 405:
case 2775:
case 1758:
case 518:
case 1091:
case 2855:
case 1878:
case 3864:
case 1413:
case 3516:
case 2061:
case 2117:
case 98:
case 3561:
case 679:
case 2515:
case 362:
case 2016:
case 694:
case 599:
case 3763:
case 2405:
case 3935:
case 3856:
case 32:
case 3325:
case 3104:
case 3381:
case 3776:
case 2929:
case 2759:
case 3118:
case 1471:
case 600:
case 1578:
case 2056:
case 1341:
case 889:
case 2290:
case 2625:
case 3101:
case 1637:
case 340:
case 2983:
case 232:
case 95:
case 3639:
case 3816:
case 2719:
case 3564:
case 1077:
case 3468:
case 2932:
case 2064:
case 401:
case 1176:
case 377:
case 628:
case 1497:
case 2815:
case 3512:
case 385:
case 1453:
case 1163:
case 530:
case 3499:
case 1094:
case 3055:
case 2157:
case 201:
case 3626:
case 2467:
case 4064:
case 3556:
case 3367:
case 844:
case 3995:
case 3422:
case 673:
case 1724:
case 1954:
case 593:
case 2186:
case 635:
case 3587:
case 2302:
case 1613:
case 1810:
case 1369:
case 3606:
case 1031:
case 2368:
case 2265:
case 2605:
case 3211:
case 3170:
case 2087:
case 3185:
case 342:
case 1847:
case 430:
case 1671:
case 230:
case 3849:
case 1823:
case 1550:
case 4087:
case 2484:
case 938:
case 2746:
case 501:
case 3254:
case 2311:
case 2734:
case 1460:
case 2188:
case 1150:
case 3614:
case 1042:
case 3086:
case 320:
case 2882:
case 3570:
case 1999:
case 2354:
case 945:
case 60:
case 3953:
case 916:
case 488:
case 2998:
case 2607:
case 3187:
case 2070:
case 2021:
case 1396:
case 3974:
case 2586:
case 1845:
case 1968:
case 4070:
case 4021:
case 3710:
case 104:
case 980:
case 648:
case 288:
case 3662:
case 3202:
case 1761:
case 3466:
case 4058:
case 2557:
case 1563:
case 3818:
case 1635:
case 2941:
case 3112:
case 3473:
case 2791:
case 4001:
case 2058:
case 133:
case 2840:
case 1576:
case 1075:
case 1080:
case 3390:
case 1872:
case 3454:
case 1059:
case 3628:
case 1922:
case 1752:
case 2284:
case 1332:
case 3501:
case 311:
case 588:
case 1716:
case 3703:
case 2465:
case 3284:
case 3817:
case 422:
case 2558:
case 2454:
case 4057:
case 1575:
case 2164:
case 2411:
case 4093:
case 876:
case 1063:
case 2501:
case 3001:
case 3557:
case 3627:
case 3179:
case 1715:
case 638:
case 1177:
case 1629:
case 3058:
case 656:
case 3791:
case 520:
case 566:
case 1542:
case 2974:
case 3586:
case 1692:
case 2187:
case 3085:
case 3607:
case 2824:
case 143:
case 3998:
case 3748:
case 56:
case 2662:
case 2202:
case 388:
case 727:
case 1609:
case 1269:
case 3366:
case 2710:
case 522:
case 1432:
case 87:
case 3969:
case 466:
case 3188:
case 2997:
case 154:
case 3734:
case 2747:
case 3490:
case 3354:
case 2570:
case 1395:
case 1846:
case 2585:
case 3882:
case 1967:
case 928:
case 682:
case 1834:
case 242:
case 891:
case 772:
case 585:
case 2121:
case 577:
case 3588:
case 1089:
case 3484:
case 1848:
case 1050:
case 1296:
case 3399:
case 2266:
case 61:
case 2587:
case 1733:
case 1397:
case 178:
case 1965:
case 1142:
case 285:
case 1638:
case 645:
case 2512:
case 3815:
case 90:
case 542:
case 2960:
case 2402:
case 1469:
case 1577:
case 3064:
case 3932:
case 3193:
case 747:
case 2556:
case 123:
case 2626:
case 1078:
case 1283:
case 1891:
case 301:
case 2055:
case 477:
case 3157:
case 2499:
case 485:
case 3983:
case 2772:
case 1594:
case 251:
case 3290:
case 3625:
case 2564:
case 4079:
case 1180:
case 2158:
case 451:
case 709:
case 1232:
case 2639:
case 2060:
case 2836:
case 2363:
case 3964:
case 2619:
case 3032:
case 99:
case 3739:
case 453:
case 1357:
case 18:
case 1828:
case 1090:
case 1393:
case 2442:
case 1978:
case 1470:
case 3956:
case 2979:
case 3083:
case 303:
case 3278:
case 2829:
case 444:
case 799:
case 1604:
case 1264:
case 2141:
case 3912:
case 774:
case 1618:
case 1401:
case 2198:
case 3706:
case 1511:
case 3174:
case 801:
case 705:
case 334:
case 3987:
case 1989:
case 2475:
case 2480:
case 2892:
case 3595:
case 832:
case 2646:
case 1851:
case 3197:
case 2596:
case 3289:
case 3342:
case 1950:
case 2169:
case 1771:
case 489:
case 3476:
case 289:
case 544:
case 1287:
case 996:
case 893:
case 4095:
case 3463:
case 2242:
case 2389:
case 1599:
case 3098:
case 3820:
case 3871:
case 1649:
case 3623:
case 3921:
case 3970:
case 3714:
case 2569:
case 2477:
case 4074:
case 3647:
case 1412:
case 2196:
case 3708:
case 2730:
case 3762:
case 513:
case 1568:
case 1464:
case 224:
case 1154:
case 3610:
case 3478:
case 2986:
case 1067:
case 1270:
case 1221:
case 2648:
case 1285:
case 150:
case 2707:
case 2598:
case 2494:
case 1976:
case 2743:
case 3450:
case 1826:
case 2280:
case 1963:
case 1735:
case 165:
case 2727:
case 2957:
case 758:
case 3603:
case 3800:
case 971:
case 3377:
case 2183:
case 524:
case 213:
case 1652:
case 413:
case 1522:
case 3276:
case 1379:
case 3041:
case 736:
case 2259:
case 3837:
case 1084:
case 37:
case 3489:
case 3958:
case 2901:
case 1736:
case 3431:
case 4041:
case 820:
case 1312:
case 2263:
case 102:
case 47:
case 2958:
case 27:
case 2489:
case 3844:
case 74:
case 3259:
case 1825:
case 1293:
case 3691:
case 576:
case 3993:
case 1959:
case 3743:
case 1584:
case 949:
case 1615:
case 1364:
case 2813:
case 1002:
case 2762:
case 2195:
case 3494:
case 1099:
case 3648:
case 1942:
case 4069:
case 1455:
case 2985:
case 715:
case 2970:
case 2751:
case 276:
case 2921:
case 1479:
case 822:
case 100:
case 984:
case 2871:
case 2820:
case 2098:
case 2597:
case 3634:
case 179:
case 86:
case 476:
case 3459:
case 1054:
case 1493:
case 3169:
case 2289:
case 3596:
case 72:
case 1682:
case 2463:
case 1167:
case 389:
case 762:
case 3231:
case 1633:
case 1830:
case 2987:
case 3809:
case 1565:
case 1931:
case 3198:
case 885:
case 2595:
case 1385:
case 671:
case 2250:
case 1288:
case 434:
case 3829:
case 203:
case 1358:
case 1640:
case 2380:
case 2083:
case 2375:
case 267:
case 2560:
case 3532:
case 1977:
case 1738:
case 2912:
case 403:
case 534:
case 2739:
case 3836:
case 3725:
case 3781:
case 842:
case 1617:
case 3442:
case 1486:
case 3583:
case 726:
case 760:
case 1994:
case 3446:
case 1482:
case 3372:
case 1890:
case 1693:
case 10:
case 3784:
case 3659:
case 1028:
case 3529:
case 1543:
case 742:
case 272:
case 295:
case 3915:
case 2319:
case 3832:
case 2036:
case 2860:
case 860:
case 2663:
case 3536:
case 1215:
case 337:
case 3144:
case 148:
case 1125:
case 1433:
case 1181:
case 3675:
case 3883:
case 3680:
case 447:
case 3767:
case 2949:
case 1440:
case 4009:
case 1324:
case 364:
case 785:
case 595:
case 1934:
case 692:
case 675:
case 777:
case 2120:
case 2171:
case 914:
case 4092:
case 2:
case 2247:
case 1014:
case 3419:
case 2768:
case 1008:
case 3509:
case 978:
case 1798:
case 2472:
case 409:
case 1686:
case 3642:
case 2346:
case 1051:
case 106:
case 855:
case 2895:
case 815:
case 3933:
case 3347:
case 2711:
case 943:
case 711:
case 3765:
case 1107:
case 2874:
case 3071:
case 1349:
case 3323:
case 76:
case 3246:
case 954:
case 2571:
case 2520:
case 2650:
case 1867:
case 319:
case 3982:
case 1505:
case 3013:
case 3869:
case 1415:
case 2766:
case 2897:
case 227:
case 2500:
case 2038:
case 135:
case 2410:
case 1655:
case 2391:
case 808:
case 1783:
case 4038:
case 3544:
case 427:
case 3448:
case 1884:
case 3940:
case 2135:
case 2423:
case 2044:
case 766:
case 3841:
case 1127:
case 2272:
case 1732:
case 4044:
case 1039:
case 2904:
case 1316:
case 987:
case 3423:
case 3044:
case 3135:
case 2940:
case 3904:
case 2219:
case 2434:
case 2303:
case 933:
case 1612:
case 2677:
case 1760:
case 2129:
case 3410:
case 3500:
case 3038:
case 1539:
case 1315:
case 678:
case 788:
case 1972:
case 3537:
case 2917:
case 1822:
case 3391:
case 161:
case 2491:
case 3773:
case 1224:
case 623:
case 1114:
case 3571:
case 3245:
case 116:
case 1151:
case 1461:
case 1802:
case 2013:
case 3513:
case 2631:
case 1868:
case 4071:
case 2765:
case 4020:
case 3334:
case 3403:
case 298:
case 1687:
case 2933:
case 3689:
case 3924:
case 3754:
case 498:
case 2246:
case 180:
case 2071:
case 2020:
case 1945:
case 1162:
case 1795:
case 1452:
case 2509:
case 309:
case 1811:
case 537:
case 2234:
case 2592:
case 3895:
case 1249:
case 3223:
case 1382:
case 1774:
case 370:
case 583:
case 1106:
case 3113:
case 1854:
case 1007:
case 464:
case 1753:
case 3949:
case 2345:
case 2896:
case 805:
case 3092:
case 2248:
case 1551:
case 3:
case 347:
case 3702:
case 3171:
case 1514:
case 1418:
case 138:
case 1947:
case 3210:
case 1333:
case 1508:
case 1797:
case 3916:
case 3137:
case 2035:
case 2144:
case 125:
case 1261:
case 3722:
case 3952:
case 437:
case 3445:
case 1139:
case 2680:
case 2883:
case 2675:
case 2291:
case 3029:
case 2529:
case 3676:
case 730:
case 2784:
case 2372:
case 1317:
case 2446:
case 3860:
case 3535:
case 1216:
case 2915:
case 564:
case 395:
case 818:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746961202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,];
var gg_b = "1746961202/";

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
