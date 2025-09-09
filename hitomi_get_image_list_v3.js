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
case 1502:
case 1009:
case 3843:
case 3652:
case 4008:
case 3247:
case 3273:
case 3813:
case 2914:
case 3166:
case 1641:
case 3126:
case 2612:
case 2257:
case 2495:
case 1031:
case 69:
case 3713:
case 90:
case 1736:
case 661:
case 1482:
case 2753:
case 1427:
case 2410:
case 3777:
case 574:
case 2748:
case 2479:
case 3758:
case 1294:
case 3792:
case 1339:
case 3566:
case 1805:
case 3181:
case 571:
case 2837:
case 2302:
case 1634:
case 49:
case 3579:
case 1705:
case 461:
case 2278:
case 3072:
case 581:
case 1932:
case 2737:
case 4083:
case 3195:
case 362:
case 320:
case 1301:
case 3965:
case 464:
case 2466:
case 3367:
case 428:
case 1849:
case 1138:
case 2083:
case 3868:
case 3003:
case 365:
case 2456:
case 3955:
case 3446:
case 264:
case 3828:
case 2347:
case 854:
case 29:
case 3416:
case 758:
case 1279:
case 1819:
case 1226:
case 533:
case 2546:
case 1173:
case 203:
case 55:
case 3594:
case 1117:
case 2990:
case 2516:
case 2160:
case 1478:
case 1015:
case 1346:
case 1538:
case 10:
case 4032:
case 1457:
case 811:
case 1983:
case 3420:
case 1045:
case 307:
case 1704:
case 1090:
case 1281:
case 1635:
case 193:
case 2146:
case 389:
case 1210:
case 1573:
case 1870:
case 2607:
case 51:
case 2520:
case 2823:
case 3378:
case 1240:
case 2116:
case 2282:
case 500:
case 2008:
case 3964:
case 3622:
case 2560:
case 1523:
case 1820:
case 306:
case 2817:
case 2243:
case 759:
case 2484:
case 3368:
case 429:
case 3672:
case 2847:
case 3974:
case 2873:
case 2213:
case 1034:
case 3328:
case 3900:
case 1644:
case 3757:
case 2773:
case 1942:
case 2149:
case 3470:
case 583:
case 1614:
case 1760:
case 1123:
case 994:
case 1816:
case 3833:
case 2934:
case 3530:
case 1276:
case 378:
case 270:
case 792:
case 629:
case 1428:
case 3237:
case 2170:
case 1285:
case 1468:
case 601:
case 1631:
case 3449:
case 4007:
case 3878:
case 3184:
case 1041:
case 2430:
case 2363:
case 1080:
case 3052:
case 1291:
case 2549:
case 525:
case 3697:
case 1269:
case 3733:
case 280:
case 339:
case 3559:
case 3569:
case 2608:
case 2228:
case 522:
case 1259:
case 3688:
case 1548:
case 3313:
case 1336:
case 3591:
case 3405:
case 526:
case 2268:
case 480:
case 2007:
case 3343:
case 367:
case 3975:
case 2136:
case 3585:
case 194:
case 890:
case 2505:
case 1537:
case 1153:
case 847:
case 16:
case 1492:
case 795:
case 470:
case 3169:
case 3999:
case 853:
case 2337:
case 3191:
case 2935:
case 263:
case 3921:
case 83:
case 1006:
case 2536:
case 229:
case 2348:
case 3185:
case 3358:
case 1137:
case 2802:
case 531:
case 305:
case 2683:
case 670:
case 2318:
case 2697:
case 1528:
case 288:
case 239:
case 4062:
case 2559:
case 3549:
case 3258:
case 1689:
case 4022:
case 1568:
case 3292:
case 1756:
case 467:
case 3104:
case 2184:
case 3323:
case 3170:
case 2449:
case 192:
case 2778:
case 1665:
case 3459:
case 2237:
case 278:
case 995:
case 1384:
case 3632:
case 82:
case 1128:
case 2951:
case 1998:
case 3149:
case 3717:
case 2470:
case 1168:
case 1654:
case 1330:
case 2900:
case 3504:
case 1952:
case 749:
case 2757:
case 2974:
case 3570:
case 1359:
case 159:
case 2368:
case 2672:
case 2130:
case 405:
case 1671:
case 3817:
case 206:
case 3243:
case 2223:
case 2603:
case 959:
case 1543:
case 1795:
case 2882:
case 2263:
case 406:
case 535:
case 1391:
case 1513:
case 3536:
case 3348:
case 1270:
case 1369:
case 843:
case 1086:
case 2767:
case 1781:
case 1710:
case 1922:
case 1664:
case 688:
case 3337:
case 1075:
case 2129:
case 1740:
case 639:
case 2921:
case 1987:
case 2961:
case 1895:
case 2169:
case 478:
case 992:
case 1143:
case 1177:
case 794:
case 606:
case 996:
case 1448:
case 1655:
case 791:
case 3136:
case 1113:
case 3429:
case 3491:
case 1726:
case 2343:
case 1021:
case 1099:
case 2975:
case 3007:
case 1879:
case 2087:
case 3353:
case 1219:
case 3906:
case 2591:
case 2529:
case 3268:
case 439:
case 3608:
case 1437:
case 568:
case 2688:
case 2858:
case 1891:
case 266:
case 2965:
case 585:
case 1381:
case 2327:
case 2195:
case 1869:
case 852:
case 328:
case 1776:
case 2925:
case 3426:
case 220:
case 3139:
case 2072:
case 1340:
case 679:
case 958:
case 1785:
case 1167:
case 689:
case 2181:
case 3909:
case 3837:
case 638:
case 1885:
case 2792:
case 607:
case 2110:
case 997:
case 1997:
case 2566:
case 1395:
case 3479:
case 1729:
case 2140:
case 3233:
case 1769:
case 1182:
case 1876:
case 3032:
case 1326:
case 816:
case 523:
case 2777:
case 2743:
case 3753:
case 1674:
case 1366:
case 3539:
case 3481:
case 1402:
case 479:
case 1065:
case 1025:
case 2971:
case 2179:
case 2581:
case 489:
case 2126:
case 438:
case 2996:
case 3257:
case 3914:
case 2510:
case 1651:
case 1220:
case 2540:
case 2652:
case 1089:
case 2954:
case 1260:
case 3116:
case 508:
case 3560:
case 3008:
case 2964:
case 2924:
case 2378:
case 2194:
case 793:
case 330:
case 2156:
case 1438:
case 3227:
case 207:
case 3267:
case 1201:
case 1784:
case 1417:
case 279:
case 2333:
case 710:
case 1178:
case 118:
case 666:
case 1239:
case 620:
case 1447:
case 1473:
case 2728:
case 1759:
case 3160:
case 841:
case 1675:
case 197:
case 3990:
case 844:
case 1157:
case 3546:
case 1686:
case 1024:
case 3494:
case 4072:
case 750:
case 3915:
case 361:
case 158:
case 2446:
case 466:
case 2828:
case 1730:
case 3347:
case 3373:
case 586:
case 2357:
case 3083:
case 2003:
case 462:
case 3456:
case 265:
case 2089:
case 1652:
case 1540:
case 3680:
case 3009:
case 2600:
case 2220:
case 907:
case 2379:
case 1954:
case 1996:
case 2567:
case 1581:
case 1698:
case 832:
case 1510:
case 3836:
case 640:
case 1247:
case 2065:
case 1179:
case 1713:
case 2025:
case 3031:
case 1743:
case 2972:
case 2326:
case 418:
case 3467:
case 1595:
case 1140:
case 3294:
case 52:
case 2096:
case 1758:
case 3102:
case 3014:
case 2216:
case 2246:
case 4064:
case 1526:
case 3044:
case 877:
case 3805:
case 2054:
case 1566:
case 440:
case 1792:
case 3339:
case 2885:
case 821:
case 1072:
case 3350:
case 809:
case 3634:
case 728:
case 1892:
case 2381:
case 1367:
case 458:
case 618:
case 2891:
case 2310:
case 1925:
case 2776:
case 2869:
case 2071:
case 1195:
case 1327:
case 2859:
case 1828:
case 258:
case 761:
case 1955:
case 3138:
case 79:
case 3819:
case 966:
case 3360:
case 764:
case 920:
case 3719:
case 3147:
case 598:
case 2064:
case 2686:
case 2157:
case 703:
case 3606:
case 240:
case 2533:
case 3749:
case 2239:
case 218:
case 2473:
case 2447:
case 3538:
case 3015:
case 1420:
case 4065:
case 3316:
case 3045:
case 179:
case 3983:
case 2394:
case 2903:
case 138:
case 2661:
case 1687:
case 3870:
case 189:
case 835:
case 2784:
case 2557:
case 2201:
case 3281:
case 3704:
case 1964:
case 1622:
case 1088:
case 2133:
case 2250:
case 1194:
case 1924:
case 3563:
case 3319:
case 1130:
case 1328:
case 695:
case 259:
case 2359:
case 1974:
case 2423:
case 2330:
case 2654:
case 3942:
case 3644:
case 3760:
case 512:
case 2998:
case 3614:
case 2696:
case 823:
case 178:
case 3816:
case 1833:
case 3304:
case 2894:
case 3123:
case 3631:
case 770:
case 2625:
case 1449:
case 2856:
case 3285:
case 3428:
case 2665:
case 296:
case 780:
case 2756:
case 1098:
case 2051:
case 4061:
case 1218:
case 3370:
case 1248:
case 139:
case 3011:
case 1697:
case 2528:
case 1733:
case 3609:
case 3080:
case 1052:
case 2689:
case 3291:
case 886:
case 1062:
case 555:
case 1591:
case 1405:
case 4000:
case 1022:
case 882:
case 1975:
case 2099:
case 3690:
case 2021:
case 1377:
case 2726:
case 2219:
case 1087:
case 84:
case 2592:
case 544:
case 2655:
case 492:
case 2448:
case 2826:
case 2866:
case 3458:
case 2779:
case 496:
case 1585:
case 3645:
case 394:
case 2113:
case 876:
case 391:
case 4074:
case 3615:
case 3492:
case 36:
case 2418:
case 541:
case 1436:
case 3413:
case 515:
case 3839:
case 1782:
case 1169:
case 3750:
case 2987:
case 2453:
case 763:
case 3701:
case 2781:
case 3118:
case 2624:
case 2086:
case 2922:
case 2376:
case 2192:
case 3477:
case 2391:
case 3801:
case 902:
case 459:
case 1827:
case 2369:
case 906:
case 696:
case 837:
case 3739:
case 1263:
case 1882:
case 729:
case 2795:
case 3850:
case 3568:
case 1258:
case 3689:
case 2080:
case 180:
case 2269:
case 2716:
case 1323:
case 2746:
case 827:
case 1012:
case 1519:
case 3756:
case 4035:
case 788:
case 542:
case 1459:
case 3205:
case 546:
case 2631:
case 392:
case 319:
case 2468:
case 1170:
case 2304:
case 2123:
case 2163:
case 491:
case 874:
case 2276:
case 2816:
case 249:
case 1717:
case 3696:
case 3998:
case 1504:
case 3330:
case 1911:
case 4006:
case 2942:
case 1773:
case 706:
case 1093:
case 2034:
case 3236:
case 1213:
case 1873:
case 1847:
case 3359:
case 1277:
case 1817:
case 2820:
case 691:
case 2563:
case 3671:
case 901:
case 66:
case 2319:
case 800:
case 1802:
case 2739:
case 2850:
case 3795:
case 1318:
case 1683:
case 3543:
case 81:
case 3840:
case 3369:
case 1105:
case 3513:
case 129:
case 2137:
case 101:
case 3329:
case 3376:
case 3664:
case 2443:
case 3710:
case 2701:
case 3781:
case 3204:
case 2118:
case 449:
case 2907:
case 1702:
case 2839:
case 514:
case 2750:
case 2305:
case 3987:
case 163:
case 3740:
case 3158:
case 3075:
case 1337:
case 3418:
case 2230:
case 291:
case 85:
case 3177:
case 1491:
case 1429:
case 833:
case 395:
case 3448:
case 3826:
case 3219:
case 3879:
case 1353:
case 551:
case 1476:
case 2690:
case 3021:
case 2518:
case 2336:
case 2548:
case 1228:
case 1608:
case 4080:
case 3437:
case 1268:
case 767:
case 1139:
case 1426:
case 3310:
case 961:
case 3776:
case 3829:
case 450:
case 825:
case 2350:
case 720:
case 1302:
case 3785:
case 964:
case 1737:
case 3340:
case 1278:
case 2805:
case 3395:
case 448:
case 693:
case 2256:
case 3997:
case 3885:
case 1101:
case 3246:
case 1909:
case 1718:
case 2102:
case 1150:
case 3769:
case 3182:
case 3729:
case 2294:
case 1479:
case 2467:
case 4015:
case 3674:
case 410:
case 883:
case 1032:
case 2736:
case 2031:
case 3025:
case 2482:
case 3651:
case 648:
case 2836:
case 1257:
case 1501:
case 3260:
case 1853:
case 1642:
case 3582:
case 1944:
case 3089:
case 873:
case 3220:
case 3600:
case 2517:
case 2240:
case 831:
case 1520:
case 1560:
case 4009:
case 1116:
case 3784:
case 3557:
case 3201:
case 3621:
case 293:
case 2281:
case 2547:
case 2573:
case 2210:
case 130:
case 834:
case 2983:
case 3055:
case 4031:
case 2804:
case 3903:
case 2045:
case 2316:
case 2770:
case 553:
case 2346:
case 3356:
case 2457:
case 2295:
case 779:
case 318:
case 1990:
case 4014:
case 397:
case 103:
case 2478:
case 1516:
case 3533:
case 248:
case 3024:
case 1338:
case 2226:
case 3988:
case 590:
case 2173:
case 2908:
case 161:
case 765:
case 3578:
case 2279:
case 2360:
case 826:
case 513:
case 2849:
case 3859:
case 358:
case 860:
case 1945:
case 976:
case 774:
case 3497:
case 2172:
case 1565:
case 498:
case 2396:
case 3806:
case 878:
case 1171:
case 2095:
case 2630:
case 2215:
case 175:
case 3532:
case 888:
case 1082:
case 2659:
case 3050:
case 781:
case 727:
case 1668:
case 1926:
case 3649:
case 94:
case 3619:
case 1027:
case 2432:
case 2371:
case 2786:
case 2290:
case 2081:
case 1067:
case 982:
case 3706:
case 1397:
case 2861:
case 2821:
case 2572:
case 908:
case 1165:
case 698:
case 443:
case 1571:
case 1444:
case 1862:
case 3472:
case 1910:
case 2197:
case 4094:
case 1596:
case 2365:
case 1189:
case 1762:
case 1981:
case 417:
case 3264:
case 2066:
case 2982:
case 1554:
case 2684:
case 1940:
case 4056:
case 2799:
case 3604:
case 3224:
case 3917:
case 2244:
case 3315:
case 1524:
case 3046:
case 3403:
case 1564:
case 2056:
case 4026:
case 3780:
case 1752:
case 3296:
case 2957:
case 2700:
case 2355:
case 3016:
case 2188:
case 1033:
case 3345:
case 2874:
case 3973:
case 3947:
case 1852:
case 1643:
case 805:
case 2503:
case 108:
case 2774:
case 62:
case 1155:
case 2851:
case 1613:
case 700:
case 1388:
case 1303:
case 257:
case 867:
case 14:
case 1415:
case 1692:
case 985:
case 2209:
case 3020:
case 313:
case 2691:
case 3289:
case 1658:
case 2588:
case 1232:
case 4095:
case 2324:
case 2978:
case 2103:
case 733:
case 2676:
case 1555:
case 2408:
case 3265:
case 3225:
case 298:
case 2968:
case 3790:
case 596:
case 2084:
case 2626:
case 2206:
case 444:
case 2374:
case 519:
case 3815:
case 441:
case 1788:
case 3142:
case 2493:
case 3715:
case 866:
case 3341:
case 37:
case 252:
case 455:
case 2351:
case 124:
case 1174:
case 820:
case 187:
case 3890:
case 725:
case 3380:
case 1930:
case 3512:
case 136:
case 3221:
case 2235:
case 2724:
case 644:
case 1627:
case 1207:
case 1551:
case 559:
case 3261:
case 2610:
case 132:
case 3049:
case 1984:
case 4069:
case 1068:
case 1803:
case 641:
case 3334:
case 4091:
case 935:
case 3542:
case 1703:
case 3498:
case 212:
case 3:
case 2030:
case 655:
case 2695:
case 783:
case 3193:
case 2442:
case 3923:
case 2864:
case 3963:
case 3452:
case 1480:
case 2085:
case 3953:
case 2854:
case 3005:
case 311:
case 1772:
case 2977:
case 2375:
case 2076:
case 3274:
case 416:
case 656:
case 3814:
case 215:
case 2407:
case 2069:
case 2522:
case 2871:
case 734:
case 2211:
case 1242:
case 936:
case 2280:
case 1058:
case 2796:
case 3620:
case 3200:
case 4059:
case 2562:
case 1092:
case 889:
case 2754:
case 1561:
case 2587:
case 1521:
case 3744:
case 1186:
case 1212:
case 807:
case 135:
case 2241:
case 3731:
case 760:
case 1322:
case 1293:
case 351:
case 1362:
case 2765:
case 2361:
case 1985:
case 456:
case 921:
case 168:
case 3937:
case 909:
case 2321:
case 2992:
case 977:
case 3709:
case 1575:
case 2789:
case 3107:
case 345:
case 1969:
case 2187:
case 1161:
case 3646:
case 1929:
case 2958:
case 1991:
case 2865:
case 3864:
case 411:
case 2452:
case 1134:
case 3442:
case 2193:
case 3824:
case 3030:
case 3695:
case 1970:
case 3412:
case 183:
case 1783:
case 2498:
case 2334:
case 173:
case 1580:
case 3552:
case 1393:
case 2261:
case 2019:
case 3724:
case 611:
case 2070:
case 451:
case 926:
case 2745:
case 4036:
case 2593:
case 3300:
case 3755:
case 2890:
case 960:
case 2380:
case 352:
case 2715:
case 787:
case 1023:
case 614:
case 356:
case 454:
case 1312:
case 1919:
case 1708:
case 3152:
case 246:
case 2845:
case 3928:
case 2112:
case 3968:
case 2004:
case 445:
case 1949:
case 3084:
case 1135:
case 446:
case 3958:
case 4004:
case 245:
case 591:
case 1832:
case 803:
case 56:
case 341:
case 48:
case 3399:
case 6:
case 126:
case 3321:
case 2335:
case 1053:
case 3361:
case 122:
case 864:
case 254:
case 1486:
case 47:
case 251:
case 4070:
case 89:
case 1475:
case 646:
case 1106:
case 4019:
case 2507:
case 830:
case 642:
case 3587:
case 1647:
case 973:
case 3091:
case 1252:
case 3280:
case 3796:
case 3029:
case 735:
case 131:
case 2200:
case 3871:
case 3069:
case 3522:
case 3211:
case 2714:
case 4:
case 1461:
case 2306:
case 3386:
case 1638:
case 2274:
case 214:
case 1421:
case 2814:
case 3085:
case 3854:
case 2005:
case 983:
case 3684:
case 2735:
case 1471:
case 1332:
case 3799:
case 2224:
case 2902:
case 1901:
case 1109:
case 3365:
case 1514:
case 2331:
case 2472:
case 1454:
case 647:
case 1203:
case 1623:
case 1663:
case 690:
case 3389:
case 900:
case 2309:
case 3899:
case 91:
case 1939:
case 1131:
case 3079:
case 3861:
case 3290:
case 2001:
case 2706:
case 2619:
case 4060:
case 3040:
case 413:
case 1114:
case 184:
case 2532:
case 3875:
case 32:
case 447:
case 3630:
case 2039:
case 174:
case 3886:
case 3172:
case 171:
case 490:
case 2806:
case 2314:
case 1531:
case 290:
case 3231:
case 2605:
case 2734:
case 398:
case 3685:
case 1545:
case 3408:
case 1637:
case 548:
case 1793:
case 133:
case 2265:
case 776:
case 971:
case 3364:
case 247:
case 1038:
case 2183:
case 1515:
case 3978:
case 4039:
case 3103:
case 3588:
case 74:
case 2508:
case 927:
case 1455:
case 2060:
case 2020:
case 3629:
case 1017:
case 2289:
case 3691:
case 1047:
case 1916:
case 3933:
case 2834:
case 4001:
case 1590:
case 1893:
case 1383:
case 343:
case 2636:
case 1272:
case 1812:
case 2938:
case 2841:
case 737:
case 1424:
case 804:
case 1842:
case 2880:
case 1115:
case 1464:
case 3800:
case 510:
case 2016:
case 3874:
case 3214:
case 2108:
case 2780:
case 253:
case 863:
case 3094:
case 3056:
case 2254:
case 3483:
case 23:
case 1190:
case 317:
case 2315:
case 1806:
case 72:
case 1255:
case 271:
case 3409:
case 2489:
case 990:
case 600:
case 1532:
case 375:
case 45:
case 3171:
case 3431:
case 3372:
case 2425:
case 1649:
case 3589:
case 3668:
case 385:
case 284:
case 3208:
case 2114:
case 2002:
case 3966:
case 2288:
case 2465:
case 1050:
case 1706:
case 1001:
case 4073:
case 281:
case 227:
case 3154:
case 1619:
case 3165:
case 1309:
case 369:
case 633:
case 1670:
case 3125:
case 2807:
case 400:
case 2623:
case 2203:
case 3862:
case 3444:
case 65:
case 3822:
case 2663:
case 849:
case 3762:
case 2901:
case 3596:
case 93:
case 1472:
case 3722:
case 1224:
case 2332:
case 2544:
case 3940:
case 2950:
case 3554:
case 2707:
case 1902:
case 1264:
case 681:
case 2960:
case 3798:
case 1741:
case 2920:
case 1046:
case 3524:
case 2190:
case 1108:
case 1973:
case 1947:
case 3033:
case 1345:
case 1296:
case 1780:
case 717:
case 743:
case 2424:
case 1271:
case 21:
case 674:
case 2464:
case 337:
case 1880:
case 3643:
case 1583:
case 3852:
case 1636:
case 3898:
case 3078:
case 2272:
case 3692:
case 2916:
case 3415:
case 427:
case 3164:
case 34:
case 481:
case 2047:
case 2073:
case 59:
case 2893:
case 2590:
case 1060:
case 2297:
case 3658:
case 4002:
case 386:
case 113:
case 2946:
case 757:
case 147:
case 798:
case 372:
case 376:
case 3232:
case 1183:
case 2545:
case 471:
case 894:
case 233:
case 2793:
case 3555:
case 3151:
case 634:
case 1004:
case 1286:
case 1112:
case 631:
case 3788:
case 570:
case 3100:
case 18:
case 1275:
case 945:
case 2180:
case 1815:
case 951:
case 3174:
case 426:
case 2063:
case 3888:
case 2312:
case 1715:
case 225:
case 1070:
case 954:
case 332:
case 2287:
case 3207:
case 3551:
case 4018:
case 3667:
case 2541:
case 1512:
case 336:
case 2222:
case 2602:
case 3028:
case 1334:
case 2511:
case 3803:
case 3068:
case 2262:
case 2393:
case 2883:
case 273:
case 3441:
case 1639:
case 1498:
case 799:
case 1452:
case 712:
case 1923:
case 914:
case 1422:
case 9:
case 1844:
case 715:
case 1005:
case 2638:
case 80:
case 2461:
case 2936:
case 1814:
case 2421:
case 625:
case 1200:
case 1620:
case 231:
case 2617:
case 2252:
case 1714:
case 2048:
case 501:
case 2018:
case 1744:
case 3186:
case 2535:
case 3872:
case 3521:
case 3561:
case 234:
case 3092:
case 3293:
case 151:
case 3362:
case 2475:
case 3976:
case 3013:
case 1335:
case 3043:
case 4063:
case 2732:
case 2307:
case 3897:
case 2486:
case 368:
case 2905:
case 260:
case 946:
case 1709:
case 3575:
case 744:
case 3633:
case 3797:
case 673:
case 3991:
case 1646:
case 3586:
case 3929:
case 3121:
case 2135:
case 3161:
case 3969:
case 98:
case 1107:
case 1824:
case 3134:
case 915:
case 2480:
case 1864:
case 7:
case 116:
case 3451:
case 668:
case 3783:
case 3970:
case 199:
case 1695:
case 112:
case 3393:
case 3262:
case 2803:
case 2682:
case 1059:
case 502:
case 3222:
case 4058:
case 1724:
case 1681:
case 4092:
case 3474:
case 232:
case 2627:
case 1598:
case 2352:
case 1300:
case 1755:
case 4013:
case 3534:
case 955:
case 1679:
case 156:
case 3023:
case 2174:
case 588:
case 2398:
case 4043:
case 1351:
case 3808:
case 3063:
case 2888:
case 539:
case 742:
case 1152:
case 3180:
case 578:
case 944:
case 3708:
case 3949:
case 1084:
case 1206:
case 3141:
case 941:
case 2959:
case 1666:
case 1187:
case 1656:
case 477:
case 1825:
case 632:
case 1865:
case 3506:
case 1958:
case 144:
case 2929:
case 2586:
case 3135:
case 2633:
case 745:
case 1162:
case 1789:
case 1694:
case 2897:
case 268:
case 3486:
case 322:
case 858:
case 3905:
case 2406:
case 1361:
case 2387:
case 1321:
case 1889:
case 424:
case 155:
case 1399:
case 3732:
case 754:
case 2322:
case 1725:
case 2678:
case 952:
case 409:
case 567:
case 2293:
case 3647:
case 1754:
case 436:
case 2599:
case 1241:
case 2186:
case 2657:
case 2521:
case 3535:
case 4068:
case 3048:
case 2242:
case 3617:
case 1796:
case 1091:
case 2058:
case 3252:
case 1280:
case 4028:
case 3421:
case 1913:
case 2435:
case 3499:
case 624:
case 1407:
case 3461:
case 714:
case 916:
case 687:
case 912:
case 1066:
case 3950:
case 2787:
case 3332:
case 1799:
case 2940:
case 64:
case 1684:
case 1026:
case 3544:
case 1325:
case 3514:
case 917:
case 1967:
case 2762:
case 2189:
case 682:
case 3109:
case 3901:
case 2444:
case 676:
case 2822:
case 3203:
case 3454:
case 269:
case 3131:
case 2397:
case 2125:
case 859:
case 1899:
case 1389:
case 1010:
case 2067:
case 44:
case 381:
case 1290:
case 1786:
case 384:
case 2208:
case 1597:
case 520:
case 562:
case 3465:
case 1659:
case 2082:
case 2589:
case 2926:
case 2668:
case 2196:
case 1630:
case 637:
case 1095:
case 1354:
case 2979:
case 12:
case 275:
case 998:
case 892:
case 1396:
case 896:
case 1886:
case 669:
case 2555:
case 3637:
case 1231:
case 1103:
case 1324:
case 1364:
case 272:
case 1691:
case 2658:
case 286:
case 4082:
case 565:
case 1209:
case 1629:
case 2445:
case 3297:
case 2956:
case 485:
case 623:
case 1588:
case 3648:
case 4027:
case 3383:
case 157:
case 3590:
case 2303:
case 713:
case 3893:
case 2692:
case 2415:
case 1933:
case 2164:
case 3073:
case 3047:
case 24:
case 4067:
case 469:
case 2155:
case 2388:
case 2613:
case 3308:
case 1503:
case 31:
case 1800:
case 3115:
case 2643:
case 2852:
case 2677:
case 3653:
case 3842:
case 300:
case 1700:
case 1094:
case 73:
case 2752:
case 2033:
case 1188:
case 2524:
case 3920:
case 1244:
case 3190:
case 579:
case 1483:
case 3960:
case 1056:
case 2564:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757404801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,];
var gg_b = "1757404801/";

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
