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
case 683:
case 733:
case 3737:
case 1400:
case 2097:
case 263:
case 3053:
case 2884:
case 490:
case 2837:
case 2942:
case 3177:
case 1393:
case 1565:
case 2420:
case 3888:
case 2465:
case 347:
case 447:
case 1970:
case 1520:
case 582:
case 2995:
case 1377:
case 626:
case 155:
case 2157:
case 3661:
case 2203:
case 1956:
case 1817:
case 615:
case 834:
case 3426:
case 2843:
case 2788:
case 3662:
case 2080:
case 2267:
case 989:
case 3396:
case 1840:
case 2980:
case 1799:
case 1332:
case 554:
case 1149:
case 891:
case 2334:
case 2752:
case 2095:
case 1503:
case 3114:
case 2835:
case 95:
case 2973:
case 2523:
case 3175:
case 1778:
case 1754:
case 1070:
case 1423:
case 3986:
case 2467:
case 1314:
case 2311:
case 3772:
case 3226:
case 3771:
case 1375:
case 2997:
case 300:
case 3953:
case 4019:
case 3019:
case 1874:
case 2871:
case 646:
case 358:
case 458:
case 1815:
case 1746:
case 699:
case 441:
case 2013:
case 1992:
case 884:
case 40:
case 2606:
case 3936:
case 807:
case 532:
case 453:
case 3181:
case 726:
case 167:
case 2959:
case 3785:
case 2384:
case 2930:
case 1382:
case 3529:
case 3979:
case 908:
case 3600:
case 3998:
case 529:
case 783:
case 2885:
case 3468:
case 2562:
case 3209:
case 2178:
case 1045:
case 176:
case 1358:
case 1374:
case 2371:
case 3712:
case 3098:
case 3849:
case 2372:
case 1152:
case 1261:
case 2264:
case 4079:
case 3079:
case 2030:
case 2890:
case 2811:
case 1814:
case 922:
case 1933:
case 2199:
case 2812:
case 421:
case 1262:
case 2146:
case 897:
case 549:
case 2796:
case 1755:
case 39:
case 49:
case 939:
case 1092:
case 3158:
case 1340:
case 3036:
case 2913:
case 2834:
case 3115:
case 1831:
case 2887:
case 268:
case 1010:
case 2094:
case 3431:
case 238:
case 3293:
case 3432:
case 3590:
case 3511:
case 2103:
case 1123:
case 2167:
case 768:
case 246:
case 1518:
case 299:
case 3007:
case 2596:
case 1658:
case 1449:
case 872:
case 1438:
case 3534:
case 3587:
case 1615:
case 1681:
case 2637:
case 209:
case 2457:
case 1296:
case 2165:
case 417:
case 3477:
case 562:
case 970:
case 137:
case 2829:
case 1238:
case 2761:
case 3005:
case 1557:
case 3214:
case 3861:
case 3729:
case 3585:
case 3862:
case 226:
case 1617:
case 3275:
case 2551:
case 1578:
case 3415:
case 2723:
case 3638:
case 3458:
case 2690:
case 3535:
case 574:
case 2612:
case 2499:
case 1546:
case 478:
case 505:
case 3281:
case 3696:
case 3921:
case 288:
case 194:
case 2454:
case 3904:
case 2634:
case 1631:
case 3282:
case 2687:
case 3004:
case 104:
case 3361:
case 1765:
case 864:
case 3021:
case 4021:
case 2806:
case 3258:
case 2069:
case 1309:
case 1488:
case 3215:
case 2588:
case 3109:
case 2278:
case 233:
case 3800:
case 1693:
case 3481:
case 1368:
case 763:
case 912:
case 2008:
case 311:
case 1162:
case 1028:
case 2685:
case 1736:
case 1150:
case 3792:
case 210:
case 3055:
case 4055:
case 1563:
case 791:
case 2977:
case 112:
case 1859:
case 2031:
case 1034:
case 2891:
case 1894:
case 2810:
case 2383:
case 2119:
case 329:
case 2205:
case 987:
case 50:
case 1779:
case 72:
case 2845:
case 1012:
case 931:
case 306:
case 1427:
case 1148:
case 2075:
case 1139:
case 2344:
case 1830:
case 332:
case 3195:
case 432:
case 2014:
case 1798:
case 2407:
case 449:
case 4057:
case 3057:
case 833:
case 1505:
case 2914:
case 1397:
case 2975:
case 396:
case 496:
case 1460:
case 1085:
case 3566:
case 2628:
case 3733:
case 1608:
case 59:
case 607:
case 2932:
case 1380:
case 1934:
case 2847:
case 3601:
case 2077:
case 701:
case 3918:
case 2186:
case 74:
case 3955:
case 17:
case 2405:
case 1669:
case 684:
case 3850:
case 3316:
case 2221:
case 981:
case 846:
case 2844:
case 1841:
case 2982:
case 1842:
case 482:
case 899:
case 4046:
case 3046:
case 1330:
case 2204:
case 1201:
case 3627:
case 2015:
case 3876:
case 1072:
case 937:
case 272:
case 3194:
case 3744:
case 2345:
case 740:
case 2074:
case 2198:
case 2856:
case 1394:
case 838:
case 752:
case 797:
case 2917:
case 4054:
case 2392:
case 2883:
case 1943:
case 4078:
case 2748:
case 2040:
case 1116:
case 3099:
case 3848:
case 2179:
case 3208:
case 590:
case 3130:
case 691:
case 720:
case 784:
case 3999:
case 3625:
case 634:
case 815:
case 64:
case 2404:
case 527:
case 3528:
case 3954:
case 2017:
case 707:
case 2940:
case 2347:
case 1189:
case 1402:
case 1424:
case 2421:
case 826:
case 956:
case 1753:
case 21:
case 2524:
case 3408:
case 2974:
case 2502:
case 1972:
case 454:
case 3113:
case 3946:
case 809:
case 2082:
case 1897:
case 2081:
case 1084:
case 2633:
case 2453:
case 3360:
case 405:
case 3967:
case 2486:
case 1125:
case 139:
case 1239:
case 1248:
case 3689:
case 1808:
case 3295:
case 220:
case 3241:
case 1006:
case 3802:
case 198:
case 284:
case 2026:
case 3242:
case 4065:
case 207:
case 374:
case 1722:
case 1276:
case 1721:
case 2724:
case 1869:
case 3325:
case 2219:
case 1553:
case 3544:
case 2107:
case 252:
case 2163:
case 1659:
case 2691:
case 2926:
case 2610:
case 610:
case 511:
case 2253:
case 2692:
case 1906:
case 967:
case 3583:
case 3273:
case 142:
case 3442:
case 3280:
case 3920:
case 3570:
case 2539:
case 3616:
case 3327:
case 1630:
case 240:
case 4003:
case 2298:
case 3533:
case 3825:
case 1369:
case 764:
case 3766:
case 1673:
case 2009:
case 1680:
case 201:
case 3413:
case 2866:
case 1216:
case 3302:
case 234:
case 4064:
case 3108:
case 2279:
case 3230:
case 15:
case 1489:
case 2328:
case 1102:
case 1124:
case 2121:
case 3259:
case 2104:
case 1101:
case 3547:
case 2760:
case 61:
case 845:
case 3169:
case 103:
case 2479:
case 3650:
case 961:
case 22:
case 1416:
case 362:
case 1642:
case 3213:
case 2968:
case 1763:
case 955:
case 3676:
case 3510:
case 1707:
case 2498:
case 1598:
case 2656:
case 573:
case 2436:
case 2670:
case 3639:
case 2516:
case 517:
case 3459:
case 1289:
case 58:
case 2152:
case 907:
case 1372:
case 3989:
case 2315:
case 2374:
case 1371:
case 3775:
case 1178:
case 2045:
case 2262:
case 1812:
case 486:
case 2875:
case 559:
case 1890:
case 3346:
case 1030:
case 1738:
case 842:
case 1264:
case 3603:
case 694:
case 1796:
case 3732:
case 3731:
case 1059:
case 1146:
case 1094:
case 2091:
case 2010:
case 756:
case 2947:
case 3172:
case 1913:
case 2340:
case 2832:
case 423:
case 3378:
case 687:
case 822:
case 1464:
case 737:
case 898:
case 1606:
case 1343:
case 2992:
case 3777:
case 2910:
case 1994:
case 2991:
case 2626:
case 2462:
case 2047:
case 3665:
case 267:
case 604:
case 3429:
case 2033:
case 2382:
case 839:
case 465:
case 365:
case 1337:
case 3620:
case 1562:
case 351:
case 2945:
case 1561:
case 2757:
case 4089:
case 997:
case 2138:
case 2200:
case 125:
case 2149:
case 1980:
case 2840:
case 348:
case 1220:
case 2778:
case 3039:
case 3899:
case 1973:
case 4048:
case 3112:
case 3190:
case 1835:
case 2503:
case 1095:
case 3318:
case 1155:
case 1041:
case 1403:
case 4050:
case 3050:
case 1997:
case 3715:
case 1390:
case 893:
case 1311:
case 1042:
case 302:
case 934:
case 1118:
case 2423:
case 3846:
case 1265:
case 53:
case 4076:
case 3134:
case 2815:
case 1872:
case 3187:
case 2874:
case 2196:
case 2668:
case 3526:
case 328:
case 1420:
case 803:
case 3357:
case 2882:
case 357:
case 492:
case 1942:
case 1837:
case 145:
case 2944:
case 991:
case 2400:
case 1097:
case 681:
case 3939:
case 2970:
case 3717:
case 704:
case 3948:
case 1073:
case 1080:
case 1788:
case 637:
case 1843:
case 3406:
case 1203:
case 3664:
case 1806:
case 3024:
case 4024:
case 4002:
case 667:
case 231:
case 2765:
case 477:
case 3364:
case 4001:
case 2677:
case 761:
case 3272:
case 2488:
case 3865:
case 1329:
case 3582:
case 2309:
case 413:
case 1069:
case 485:
case 3657:
case 3129:
case 1588:
case 910:
case 1299:
case 2720:
case 2161:
case 1008:
case 3235:
case 275:
case 1908:
case 2703:
case 2288:
case 1723:
case 3540:
case 3472:
case 2578:
case 366:
case 466:
case 1446:
case 3803:
case 2614:
case 1690:
case 3435:
case 1969:
case 812:
case 1499:
case 1634:
case 1454:
case 2451:
case 1478:
case 3515:
case 188:
case 294:
case 2452:
case 3924:
case 3284:
case 2632:
case 3237:
case 2868:
case 335:
case 1165:
case 1637:
case 115:
case 560:
case 237:
case 2764:
case 1761:
case 661:
case 3365:
case 2100:
case 471:
case 1762:
case 2617:
case 1306:
case 126:
case 3212:
case 655:
case 3864:
case 2326:
case 3211:
case 2496:
case 138:
case 514:
case 3654:
case 2966:
case 3487:
case 1167:
case 2123:
case 3575:
case 1418:
case 3514:
case 1455:
case 199:
case 3303:
case 3960:
case 3412:
case 4027:
case 1672:
case 870:
case 3532:
case 2674:
case 722:
case 3088:
case 2873:
case 3780:
case 536:
case 2935:
case 3605:
case 3508:
case 2424:
case 3952:
case 2313:
case 946:
case 2189:
case 3773:
case 2880:
case 1017:
case 444:
case 33:
case 999:
case 689:
case 548:
case 3428:
case 3147:
case 2972:
case 2522:
case 3797:
case 1958:
case 1974:
case 2753:
case 1081:
case 2084:
case 3853:
case 2037:
case 3569:
case 65:
case 1333:
case 938:
case 3886:
case 324:
case 1222:
case 1776:
case 7:
case 2201:
case 2330:
case 3379:
case 2937:
case 1844:
case 2841:
case 926:
case 3607:
case 2202:
case 1136:
case 1345:
case 3741:
case 3191:
case 915:
case 3110:
case 3742:
case 2072:
case 742:
case 3398:
case 693:
case 1040:
case 983:
case 3145:
case 4051:
case 909:
case 4052:
case 1391:
case 750:
case 3795:
case 1856:
case 1310:
case 856:
case 1179:
case 592:
case 557:
case 708:
case 2460:
case 2397:
case 1975:
case 1833:
case 1789:
case 2911:
case 2505:
case 1914:
case 2990:
case 3386:
case 1093:
case 988:
case 703:
case 3938:
case 789:
case 1263:
case 3622:
case 164:
case 1847:
case 1931:
case 2813:
case 2380:
case 804:
case 38:
case 698:
case 1153:
case 2669:
case 1405:
case 27:
case 887:
case 459:
case 2373:
case 3713:
case 2425:
case 2859:
case 212:
case 1977:
case 2395:
case 3794:
case 565:
case 2150:
case 2736:
case 543:
case 933:
case 3096:
case 1810:
case 2894:
case 1891:
case 3759:
case 1031:
case 2260:
case 1845:
case 3156:
case 3038:
case 793:
case 642:
case 3049:
case 1407:
case 2090:
case 2011:
case 6:
case 2830:
case 1344:
case 3170:
case 2139:
case 1463:
case 1075:
case 2012:
case 3559:
case 2642:
case 670:
case 3247:
case 571:
case 1644:
case 1479:
case 2536:
case 1727:
case 3594:
case 1968:
case 3445:
case 3962:
case 712:
case 2598:
case 2695:
case 2289:
case 2929:
case 2579:
case 1670:
case 855:
case 2673:
case 1298:
case 861:
case 1279:
case 4061:
case 3061:
case 14:
case 1589:
case 2705:
case 3321:
case 2216:
case 4062:
case 3062:
case 101:
case 2308:
case 1122:
case 414:
case 314:
case 2101:
case 1121:
case 379:
case 479:
case 25:
case 2697:
case 289:
case 3686:
case 3291:
case 3210:
case 1163:
case 2127:
case 152:
case 197:
case 1107:
case 250:
case 3541:
case 3456:
case 1253:
case 3636:
case 1286:
case 1610:
case 3483:
case 1691:
case 1645:
case 577:
case 2476:
case 876:
case 3444:
case 2630:
case 770:
case 3363:
case 3595:
case 242:
case 4023:
case 3283:
case 239:
case 2125:
case 1453:
case 3256:
case 3708:
case 1633:
case 3000:
case 2808:
case 769:
case 2248:
case 3580:
case 1828:
case 1647:
case 222:
case 3804:
case 298:
case 3822:
case 184:
case 2250:
case 3821:
case 1366:
case 1219:
case 1702:
case 2721:
case 1724:
case 2704:
case 1701:
case 2160:
case 107:
case 2586:
case 2711:
case 3372:
case 2838:
case 2209:
case 3178:
case 564:
case 1775:
case 2140:
case 2712:
case 221:
case 96:
case 3738:
case 1603:
case 3264:
case 4030:
case 3890:
case 3811:
case 1135:
case 1732:
case 1855:
case 3146:
case 1818:
case 2787:
case 3335:
case 3913:
case 3887:
case 368:
case 4094:
case 678:
case 2351:
case 2158:
case 2036:
case 2174:
case 1171:
case 3343:
case 20:
case 2936:
case 3464:
case 4013:
case 3994:
case 1777:
case 819:
case 2182:
case 773:
case 3930:
case 2529:
case 2979:
case 510:
case 611:
case 143:
case 1916:
case 3337:
case 1509:
case 3384:
case 1143:
case 3562:
case 151:
case 2117:
case 1089:
case 3561:
case 3387:
case 2735:
case 325:
case 425:
case 3334:
case 2852:
case 51:
case 1878:
case 3220:
case 148:
case 3980:
case 1740:
case 3973:
case 1899:
case 1318:
case 914:
case 2114:
case 1190:
case 2953:
case 3155:
case 3041:
case 3403:
case 862:
case 2986:
case 1846:
case 3042:
case 102:
case 3311:
case 2772:
case 2226:
case 2349:
case 258:
case 1187:
case 3872:
case 1134:
case 2131:
case 1076:
case 2338:
case 2919:
case 1781:
case 3385:
case 617:
case 1976:
case 1782:
case 711:
case 2177:
case 3942:
case 157:
case 3420:
case 128:
case 3097:
case 1950:
case 2053:
case 290:
case 3837:
case 345:
case 3500:
case 3157:
case 2888:
case 3073:
case 3465:
case 247:
case 1717:
case 1939:
case 960:
case 2426:
case 2662:
case 3080:
case 3203:
case 2661:
case 1664:
case 1406:
case 930:
case 1024:
case 2021:
case 1001:
case 1443:
case 2022:
case 177:
case 1364:
case 3246:
case 1582:
case 3329:
case 1726:
case 60:
case 1272:
case 2258:
case 2706:
case 540:
case 2274:
case 1271:
case 4069:
case 2584:
case 113:
case 641:
case 1129:
case 2800:
case 1437:
case 1484:
case 2481:
case 552:
case 333:
case 3254:
case 3685:
case 3164:
case 3700:
case 2638:
case 621:
case 3552:
case 1471:
case 2649:
case 2415:
case 959:
case 1472:
case 3723:
case 584:
case 758:
case 1867:
case 832:
case 2823:
case 3446:
case 1243:
case 507:
case 3612:
case 2217:
case 3690:
case 806:
case 3969:
case 1655:
case 1435:
case 1618:
case 2922:
case 2572:
case 488:
case 1901:
case 1515:
case 829:
case 2282:
case 2440:
case 3687:
case 1237:
case 2281:
case 1284:
case 1574:
case 2921:
case 1924:
case 1558:
case 1902:
case 273:
case 854:
case 1106:
case 1485:
case 3218:
case 591:
case 217:
case 1287:
case 135:
case 1768:
case 1234:
case 2231:
case 3684:
case 409:
case 2232:
case 1320:
case 1365:
case 70:
case 1593:
case 2005:
case 315:
case 2477:
case 741:
case 2688:
case 171:
case 3762:
case 1709:
case 2862:
case 326:
case 3306:
case 1212:
case 2275:
case 3643:
case 1290:
case 753:
case 2652:
case 3257:
case 3549:
case 338:
case 438:
case 3538:
case 2432:
case 1487:
case 1434:
case 2431:
case 2651:
case 1678:
case 1575:
case 3418:
case 2512:
case 1699:
case 2590:
case 2905:
case 3103:
case 2323:
case 399:
case 627:
case 93:
case 944:
case 1411:
case 2414:
case 658:
case 446:
case 2063:
case 2475:
case 1646:
case 1531:
case 600:
case 2587:
case 2277:
case 501:
case 3671:
case 3596:
case 534:
case 1088:
case 2625:
case 2469:
case 719:
case 1952:
case 1508:
case 3404:
case 2528:
case 1951:
case 2954:
case 3017:
case 3422:
case 1773:
case 2389:
case 254:
case 1428:
case 2113:
case 873:
case 31:
case 525:
case 3974:
case 1797:
case 3502:
case 705:
case 817:
case 1569:
case 1853:
case 4081:
case 3081:
case 4082:
case 3333:
case 516:
case 282:
case 2046:
case 2159:
case 3776:
case 1663:
case 3204:
case 124:
case 3222:
case 2627:
case 1607:
case 2850:
case 3221:
case 3981:
case 180:
case 1741:
case 1819:
case 3750:
case 3074:
case 3136:
case 2269:
case 971:
case 3058:
case 4058:
case 372:
case 1742:
case 1110:
case 472:
case 2194:
case 1191:
case 3917:
case 2078:
case 3198:
case 3310:
case 1795:
case 3391:
case 2208:
case 3179:
case 545:
case 2130:
case 1988:
case 1228:
case 3975:
case 4093:
case 249:
case 3914:
case 3833:
case 2889:
case 1949:
case 2733:
case 1938:
case 605:
case 2180:
case 619:
case 464:
case 1622:
case 364:
case 3263:
case 2601:
case 1621:
case 2624:
case 2602:
case 674:
case 3207:
case 966:
case 2197:
case 2955:
case 4077:
case 2918:
case 3186:
case 3560:
case 1794:
case 2142:
case 2348:
case 410:
case 2141:
case 3370:
case 1096:
case 3119:
case 4032:
case 229:
case 1759:
case 3891:
case 3356:
case 3810:
case 3845:
case 762:
case 3716:
case 1898:
case 1049:
case 1730:
case 1156:
case 232:
case 2195:
case 1879:
case 3014:
case 977:
case 206:
case 1266:
case 2745:
case 262:
case 1247:
case 800:
case 1559:
case 515:
case 3479:
case 2430:
case 160:
case 1807:
case 32:
case 3498:
case 732:
case 1619:
case 682:
case 706:
case 1594:
case 2510:
case 2545:
case 3683:
case 1491:
case 2494:
case 957:
case 992:
case 3656:
case 1492:
case 2964:
case 1961:
case 583:
case 729:
case 3516:
case 2459:
case 2648:
case 2766:
case 546:
case 847:
case 3298:
case 2301:
case 44:
case 1322:
case 434:
case 2064:
case 3279:
case 2230:
case 1447:
case 301:
case 936:
case 1128:
case 2302:
case 1321:
case 2324:
case 2259:
case 3068:
case 4068:
case 3104:
case 2547:
case 3760:
case 3328:
case 538:
case 3236:
case 2169:
case 948:
case 654:
case 2294:
case 1291:
case 1686:
case 1542:
case 629:
case 497:
case 397:
case 452:
case 533:
case 2965:
case 3163:
case 1470:
case 3550:
case 2544:
case 3253:
case 1636:
case 1456:
case 965:
case 3691:
case 3926:
case 3286:
case 782:
case 2583:
case 2273:
case 632:
case 3645:
case 3419:
case 2556:
case 606:
case 340:
case 440:
case 2441:
case 821:
case 1679:
case 1023:
case 3548:
case 2442:
case 2067:
case 2920:
case 2570:
case 3539:
case 2616:
case 3486:
case 1573:
case 1923:
case 2728:
case 2020:
case 1708:
case 2903:
case 2360:
case 205:
case 696:
case 1166:
case 3828:
case 1270:
case 1580:
case 588:
case 80:
case 484:
case 384:
case 1804:
case 3026:
case 3647:
case 420:
case 320:
case 3366:
case 986:
case 1244:
case 2241:
case 16:
case 1769:
case 1821:
case 2802:
case 1597:
case 2325:
case 3702:
case 3219:
case 2065:
case 307:
case 1305:
case 274:
case 853:
case 879:
case 3668:
case 2782:
case 785:
case 2781:
case 1919:
case 3881:
case 1053:
case 228:
case 1086:
case 3565:
case 3393:
case 3970:
case 2717:
case 2948:
case 355:
case 3377:
case 1193:
case 713:
case 570:
case 962:
case 1661:
case 2664:
case 671:
case 1662:
case 3223:
case 1426:
case 3983:
case 3817:
case 3840:
case 248:
case 3083:
case 4083:
case 2854:
case 4056:
case 3331:
case 3149:
case 3503:
case 569:
case 2318:
case 4070:
case 3778:
case 3754:
case 2899:
case 2048:
case 3567:
case 2715:
case 1226:
case 1772:
case 3314:
case 860:
case 3423:
case 1986:
case 3044:
case 1953:
case 618:
case 100:
case 2050:
case 2206:
case 2758:
case 2774:
case 3874:
case 3196:
case 3746:
case 2076:
case 3815:
case 2187:
case 158:
case 1349:
case 86:
case 2777:
case 3626:
case 3991:
case 995:
case 2568:
case 3462:
case 4047:
case 613:
case 1936:
case 1181:
case 153:
case 1388:
case 1409:
case 467:
case 367:
case 1182:
case 2509:
case 2916:
case 3188:
case 2620:
case 2857:
case 243:
case 3033:
case 4033:
case 1529:
case 1979:
case 3893:
case 265:
case 2793:
case 2089:
case 1998:
case 685:
case 1117:
case 1468:
case 376:
case 3358:
case 3374:
case 1209:
case 919:
case 3152:
case 974:
case 1849:
case 1711:
case 2989:
case 666:
case 3933:
case 57:
case 1079:
case 2603:
case 3261:
case 1623:
case 121:
case 3262:
case 2016:
case 1787:
case 1268:
case 1734:
case 2818:
case 2855:
case 1158:
case 2171:
case 1174:
case 3092:
case 1896:
case 3755:
case 905:
case 3718:
case 1352:
case 4091:
case 3091:
case 4010:
case 2172:
case 2654:
case 2434:
case 3966:
case 1431:
case 3640:
case 1432:
case 1293:
case 3496:
case 1652:
case 589:
case 648:
case 1590:
case 954:
case 503:
case 1512:
case 3123:
case 2303:
case 2960:
case 880:
case 1063:
case 1475:
case 2412:
case 1007:
case 1414:
case 3555:
case 1323:
case 3438:
case 2532:
case 3674:
case 3449:
case 636:
case 3615:
case 1277:
case 1587:
case 1534:
case 1126:
case 743:
case 2106:
case 173:
case 2320:
case 3296:
case 1232:
case 2768:
case 2060:
case 2287:
case 2927:
case 271:
case 3809:
case 2025:
case 3557:
case 3249:
case 337:
case 3764:
case 2365:
case 3100:
case 1861:
case 3326:
case 3617:
case 481:
case 2709:
case 3066:
case 2540:
case 3767:
case 702:
case 2472:
case 522:
case 1415:
case 1474:
case 2471:
case 1649:
case 686:
case 736:
case 2803:
case 1217:
case 2243:
case 3675:
case 1823:
case 3599:
case 2867:
case 2618:
case 178:
case 539:
case 623:
case 2435:
case 2902:
case 2924:
case 1571:
case 1281:
case 3632:
case 1282:
case 1440:
case 3451:
case 2515:
case 2901:
case 1904:
case 394:
case 932:
case 5:
case 404:
case 304:
case 1168:
case 3826:
case 2443:
case 1021:
case 431:
case 906:
case 1362:
case 1584:
case 1274:
case 2272:
case 487:
case 387:
case 1109:
case 3251:
case 2820:
case 2437:
case 2657:
case 3161:
case 2235:
case 375:
case 665:
case 728:
case 3028:
case 4028:
case 792:
case 3162:
case 2144:
case 1141:
case 3507:
case 1348:
case 3736:
case 911:
case 3859:
case 1710:
case 1142:
case 412:
case 1791:
case 2794:
case 3563:
case 4034:
case 3176:
case 3260:
case 4087:
case 2836:
case 2898:
case 3225:
case 2319:
case 3341:
case 1745:
case 3139:
case 3148:
case 567:
case 4012:
case 3012:
case 3427:
case 3090:
case 866:
case 4011:
case 1195:
case 132:
case 3342:
case 3830:
case 3911:
case 3990:
case 149:
case 2386:
case 2353:
case 3397:
case 1180:
case 3085:
case 1566:
case 2938:
case 1733:
case 2949:
case 877:
case 1602:
case 2621:
case 1624:
case 2604:
case 1601:
case 2622:
case 3987:
case 3813:
case 813:
case 3425:
case 47:
case 37:
case 1197:
case 3373:
case 3937:
case 280:
case 3984:
case 3224:
case 1850:
case 2607:
case 3202:
case 1627:
case 1159:
case 2379:
case 3842:
case 660:
case 2110:
case 2742:
case 3072:
case 1269:
case 4071:
case 2192:
case 470:
case 818:
case 2741:
case 2819:
case 3394:
case 3943:
case 2145:
case 2051:
case 1078:
case 1770:
case 1839:
case 3116:
case 3035:
case 4035:
case 1756:
case 1208:
case 3935:
case 2133:
case 871:
case 1469:
case 1625:
case 2088:
case 3873:
case 1999:
case 3880:
case 244:
case 23:
case 1528:
case 3401:
case 4043:
case 3043:
case 2508:
case 3402:
case 2797:
case 1408:
case 1113:
case 2428:
case 3504:
case 3522:
case 154:
case 3972:
case 1389:
case 679:
case 1946:
case 2886:
case 4084:
case 2853:
case 369:
case 469:
case 4037:
case 614:
case 1903:
case 2708:
case 1020:
case 1728:
case 339:
case 2573:
case 2923:
case 594:
case 2270:
case 3239:
case 1295:
case 3808:
case 3250:
case 3006:
case 1242:
case 322:
case 422:
case 2804:
case 498:
case 2822:
case 3276:
case 68:
case 3704:
case 174:
case 2305:
case 3160:
case 73:
case 744:
case 3586:
case 1473:
case 3553:
case 2597:
case 3869:
case 450:
case 2541:
case 3439:
case 1965:
case 3659:
case 308:
case 2483:
case 823:
case 575:
case 1297:
case 2636:
case 531:
case 2698:
case 1556:
case 630:
case 953:
case 1273:
case 504:
case 3476:
case 2307:
case 587:
case 1570:
case 1920:
case 1067:
case 442:
case 1442:
case 1441:
case 2444:
case 1003:
case 3450:
case 2363:
case 886:
case 941:
case 1533:
case 63:
case 78:
case 1766:
case 2245:
case 1825:
case 1324:
case 2321:
case 3216:
case 1302:
case 2128:
case 2062:
case 3680:
case 1064:
case 3705:
case 759:
case 1301:
case 3124:
case 3102:
case 35:
case 1547:
case 214:
case 3101:
case 556:
case 1294:
case 2210:
case 2292:
case 403:
case 303:
case 3697:
case 2433:
case 892:
case 389:
case 537:
case 1430:
case 260:
case 1213:
case 2559:
case 162:
case 2247:
case 1827:
case 3416:
case 1510:
case 3763:
case 2445:
case 680:
case 3536:
case 624:
case 2961:
case 1964:
case 2491:
case 2962:
case 1545:
case 1639:
case 3289:
case 3929:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1745575202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,];
var gg_b = "1745575202/";

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
