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
var o = 0;
switch (g) {
case 2120:
case 2353:
case 2063:
case 394:
case 2285:
case 924:
case 1492:
case 1204:
case 3959:
case 3279:
case 1619:
case 2212:
case 1694:
case 696:
case 1164:
case 688:
case 2531:
case 2354:
case 3823:
case 3780:
case 2073:
case 1728:
case 1743:
case 1373:
case 844:
case 481:
case 3501:
case 1291:
case 3119:
case 500:
case 2716:
case 3138:
case 3317:
case 3717:
case 328:
case 3840:
case 2744:
case 1542:
case 3209:
case 3875:
case 1526:
case 1908:
case 757:
case 3674:
case 1837:
case 1336:
case 1803:
case 1700:
case 1260:
case 2962:
case 452:
case 1368:
case 2616:
case 1621:
case 1724:
case 251:
case 3188:
case 3566:
case 3854:
case 1292:
case 343:
case 3711:
case 115:
case 3092:
case 3089:
case 1552:
case 336:
case 3653:
case 850:
case 3448:
case 12:
case 2499:
case 2674:
case 515:
case 2719:
case 3077:
case 1560:
case 605:
case 544:
case 4075:
case 1461:
case 2177:
case 2191:
case 3852:
case 3593:
case 1497:
case 3447:
case 3229:
case 1469:
case 571:
case 1392:
case 3427:
case 2429:
case 1131:
case 2515:
case 3639:
case 3546:
case 615:
case 2547:
case 2956:
case 1534:
case 1:
case 502:
case 1485:
case 736:
case 1029:
case 3330:
case 3493:
case 230:
case 1813:
case 277:
case 2072:
case 2478:
case 206:
case 3415:
case 2530:
case 2133:
case 803:
case 3469:
case 2933:
case 1817:
case 1738:
case 759:
case 2971:
case 608:
case 3052:
case 1169:
case 2505:
case 1390:
case 670:
case 2411:
case 1505:
case 2520:
case 3192:
case 2526:
case 2542:
case 1182:
case 55:
case 2512:
case 2369:
case 913:
case 151:
case 2317:
case 2205:
case 370:
case 738:
case 3445:
case 1254:
case 4090:
case 2947:
case 2215:
case 2944:
case 2758:
case 3365:
case 3404:
case 2008:
case 3163:
case 3578:
case 852:
case 234:
case 1522:
case 3906:
case 3941:
case 3706:
case 4074:
case 1343:
case 2206:
case 1598:
case 2447:
case 279:
case 3314:
case 1555:
case 1573:
case 1331:
case 3945:
case 794:
case 339:
case 1976:
case 4028:
case 289:
case 3853:
case 497:
case 1590:
case 600:
case 1184:
case 1312:
case 1666:
case 3285:
case 802:
case 800:
case 3059:
case 3584:
case 393:
case 3953:
case 921:
case 3423:
case 549:
case 907:
case 656:
case 3898:
case 3313:
case 2311:
case 3904:
case 1735:
case 3682:
case 2987:
case 314:
case 188:
case 1065:
case 667:
case 3076:
case 2260:
case 3980:
case 3588:
case 665:
case 3182:
case 560:
case 917:
case 1022:
case 902:
case 3331:
case 3680:
case 1965:
case 1704:
case 2301:
case 2799:
case 3067:
case 3628:
case 3685:
case 1443:
case 793:
case 3177:
case 593:
case 288:
case 1340:
case 356:
case 1527:
case 2668:
case 3307:
case 776:
case 3005:
case 1350:
case 534:
case 1318:
case 1680:
case 1713:
case 83:
case 3681:
case 2255:
case 711:
case 2038:
case 901:
case 1508:
case 728:
case 985:
case 3816:
case 3420:
case 2540:
case 340:
case 2356:
case 3773:
case 3301:
case 3284:
case 1105:
case 2713:
case 1622:
case 2178:
case 2328:
case 335:
case 3034:
case 2863:
case 3215:
case 2690:
case 1111:
case 2798:
case 3644:
case 3880:
case 874:
case 900:
case 3315:
case 1227:
case 1830:
case 4016:
case 2313:
case 469:
case 1825:
case 167:
case 3606:
case 3319:
case 3324:
case 518:
case 197:
case 457:
case 1920:
case 3344:
case 865:
case 1926:
case 927:
case 1412:
case 1861:
case 2093:
case 247:
case 407:
case 2197:
case 413:
case 4088:
case 92:
case 1904:
case 2257:
case 1106:
case 552:
case 3686:
case 1609:
case 485:
case 3745:
case 1345:
case 590:
case 439:
case 1427:
case 1800:
case 624:
case 70:
case 2981:
case 3672:
case 1577:
case 660:
case 1591:
case 1193:
case 241:
case 1931:
case 2729:
case 3053:
case 3225:
case 1406:
case 357:
case 3563:
case 3042:
case 3255:
case 3004:
case 1177:
case 1646:
case 1137:
case 269:
case 2953:
case 3353:
case 2705:
case 2391:
case 3900:
case 3465:
case 2277:
case 3036:
case 2656:
case 2175:
case 3378:
case 4082:
case 86:
case 2649:
case 1119:
case 886:
case 207:
case 629:
case 1601:
case 3141:
case 1500:
case 2630:
case 792:
case 492:
case 2919:
case 131:
case 3897:
case 2322:
case 1960:
case 1262:
case 2310:
case 3117:
case 331:
case 2590:
case 122:
case 1842:
case 2682:
case 1707:
case 2223:
case 3486:
case 2494:
case 1005:
case 505:
case 1255:
case 3094:
case 352:
case 580:
case 2792:
case 32:
case 1296:
case 312:
case 2380:
case 2948:
case 420:
case 442:
case 1200:
case 3862:
case 2190:
case 2770:
case 2966:
case 3569:
case 2646:
case 1824:
case 1149:
case 1388:
case 932:
case 2456:
case 3017:
case 506:
case 2337:
case 1180:
case 1269:
case 3024:
case 2387:
case 2152:
case 1181:
case 1490:
case 1790:
case 682:
case 1453:
case 2091:
case 3964:
case 2108:
case 1507:
case 1161:
case 412:
case 3049:
case 2842:
case 3695:
case 3881:
case 690:
case 189:
case 235:
case 3007:
case 2633:
case 995:
case 3270:
case 202:
case 1371:
case 3640:
case 2821:
case 1769:
case 2207:
case 2244:
case 3288:
case 2080:
case 715:
case 1823:
case 735:
case 3228:
case 788:
case 876:
case 2171:
case 935:
case 3556:
case 3930:
case 376:
case 2135:
case 3399:
case 675:
case 829:
case 1683:
case 2243:
case 1195:
case 2726:
case 3473:
case 1865:
case 923:
case 1250:
case 144:
case 198:
case 3090:
case 1900:
case 1645:
case 780:
case 3321:
case 423:
case 3692:
case 1716:
case 581:
case 577:
case 568:
case 2312:
case 1808:
case 2442:
case 4070:
case 3679:
case 971:
case 3023:
case 2281:
case 616:
case 614:
case 2050:
case 499:
case 3413:
case 1047:
case 3346:
case 2558:
case 1642:
case 2466:
case 824:
case 1855:
case 2694:
case 2932:
case 621:
case 371:
case 639:
case 2090:
case 73:
case 2761:
case 825:
case 2307:
case 3267:
case 1059:
case 3136:
case 3743:
case 222:
case 795:
case 3976:
case 1444:
case 1997:
case 215:
case 716:
case 856:
case 2216:
case 1036:
case 729:
case 2168:
case 1313:
case 4024:
case 182:
case 3238:
case 939:
case 2237:
case 3907:
case 4058:
case 169:
case 4047:
case 1160:
case 2003:
case 3630:
case 2139:
case 1774:
case 3590:
case 1449:
case 298:
case 436:
case 885:
case 3551:
case 2895:
case 1952:
case 822:
case 4059:
case 3920:
case 1225:
case 1589:
case 646:
case 1166:
case 3022:
case 1782:
case 495:
case 65:
case 2173:
case 3013:
case 1789:
case 4008:
case 3678:
case 1436:
case 273:
case 161:
case 3060:
case 1120:
case 3884:
case 1654:
case 746:
case 2453:
case 2252:
case 3287:
case 2867:
case 3385:
case 2227:
case 3472:
case 3418:
case 3540:
case 2268:
case 575:
case 3793:
case 3785:
case 547:
case 1714:
case 707:
case 1408:
case 504:
case 1187:
case 4085:
case 3428:
case 2497:
case 2460:
case 2830:
case 3903:
case 1275:
case 3167:
case 1627:
case 3619:
case 3993:
case 1075:
case 2412:
case 3990:
case 2753:
case 3248:
case 1546:
case 1314:
case 3767:
case 1887:
case 1899:
case 958:
case 1057:
case 2486:
case 3500:
case 3707:
case 2911:
case 2498:
case 4006:
case 919:
case 1780:
case 2437:
case 2528:
case 2349:
case 997:
case 2100:
case 3932:
case 2358:
case 836:
case 4068:
case 634:
case 700:
case 607:
case 3350:
case 1208:
case 3774:
case 191:
case 1162:
case 1682:
case 385:
case 261:
case 819:
case 2496:
case 3152:
case 3169:
case 333:
case 4004:
case 180:
case 1958:
case 2588:
case 3568:
case 3614:
case 2904:
case 726:
case 3722:
case 2142:
case 2766:
case 8:
case 3153:
case 3093:
case 3763:
case 3985:
case 2561:
case 1936:
case 510:
case 1441:
case 1784:
case 3422:
case 934:
case 17:
case 2409:
case 743:
case 2980:
case 2535:
case 1383:
case 579:
case 320:
case 1989:
case 1883:
case 2812:
case 3531:
case 3245:
case 2850:
case 943:
case 3239:
case 539:
case 811:
case 1035:
case 1652:
case 1174:
case 210:
case 3740:
case 2970:
case 460:
case 354:
case 2020:
case 2894:
case 3597:
case 1397:
case 3808:
case 2564:
case 2702:
case 3326:
case 3604:
case 1136:
case 3057:
case 3555:
case 285:
case 489:
case 127:
case 3647:
case 817:
case 2899:
case 1071:
case 2722:
case 467:
case 2739:
case 3450:
case 2660:
case 791:
case 3028:
case 501:
case 4055:
case 11:
case 3821:
case 2634:
case 2371:
case 2305:
case 2995:
case 146:
case 2321:
case 3742:
case 1139:
case 3074:
case 3143:
case 1595:
case 3670:
case 702:
case 1727:
case 3935:
case 3264:
case 3536:
case 1729:
case 4033:
case 1632:
case 3047:
case 2302:
case 2132:
case 642:
case 3360:
case 1787:
case 2709:
case 363:
case 1771:
case 164:
case 3530:
case 3758:
case 2707:
case 59:
case 4091:
case 2074:
case 2256:
case 805:
case 3643:
case 1310:
case 386:
case 1923:
case 3805:
case 3083:
case 3384:
case 307:
case 4002:
case 2572:
case 3151:
case 3366:
case 2968:
case 3218:
case 42:
case 3766:
case 1433:
case 1445:
case 1108:
case 381:
case 3373:
case 569:
case 4077:
case 2697:
case 4067:
case 2116:
case 1188:
case 1503:
case 815:
case 2565:
case 813:
case 3408:
case 3139:
case 23:
case 1301:
case 3247:
case 3510:
case 888:
case 2676:
case 1089:
case 1650:
case 1253:
case 1092:
case 2600:
case 30:
case 1145:
case 1026:
case 2240:
case 635:
case 3957:
case 705:
case 208:
case 329:
case 2951:
case 2402:
case 2775:
case 1196:
case 3864:
case 3715:
case 2179:
case 3600:
case 1233:
case 3031:
case 2161:
case 2888:
case 218:
case 1334:
case 3105:
case 119:
case 4039:
case 1344:
case 1977:
case 3296:
case 3835:
case 13:
case 116:
case 698:
case 3332:
case 3651:
case 1083:
case 3241:
case 1082:
case 2815:
case 375:
case 26:
case 3784:
case 2706:
case 3921:
case 3564:
case 3157:
case 1940:
case 3278:
case 1001:
case 591:
case 36:
case 3891:
case 1308:
case 1413:
case 1000:
case 4019:
case 88:
case 3222:
case 2549:
case 1715:
case 2580:
case 302:
case 2280:
case 3025:
case 3850:
case 1860:
case 262:
case 931:
case 1844:
case 1843:
case 3123:
case 2659:
case 3259:
case 459:
case 57:
case 254:
case 2176:
case 474:
case 2475:
case 3927:
case 3909:
case 2715:
case 2096:
case 455:
case 1321:
case 1061:
case 2424:
case 1930:
case 1575:
case 2134:
case 300:
case 3080:
case 3061:
case 3168:
case 3045:
case 2219:
case 1209:
case 1417:
case 2873:
case 2344:
case 2519:
case 2076:
case 3033:
case 1629:
case 109:
case 652:
case 1295:
case 2329:
case 1446:
case 733:
case 24:
case 2234:
case 4063:
case 1333:
case 2006:
case 1069:
case 438:
case 2131:
case 85:
case 2136:
case 454:
case 244:
case 416:
case 1135:
case 3335:
case 138:
case 2977:
case 2181:
case 2942:
case 3809:
case 842:
case 2949:
case 154:
case 2068:
case 3560:
case 1673:
case 2976:
case 3847:
case 4095:
case 2794:
case 1320:
case 2106:
case 1218:
case 809:
case 3827:
case 2654:
case 2290:
case 1521:
case 162:
case 3054:
case 1528:
case 1755:
case 3213:
case 3185:
case 2288:
case 3491:
case 2635:
case 2551:
case 106:
case 2559:
case 4020:
case 514:
case 1819:
case 3525:
case 3750:
case 565:
case 1502:
case 2868:
case 98:
case 1130:
case 174:
case 838:
case 2969:
case 2886:
case 160:
case 3001:
case 4015:
case 1612:
case 1746:
case 2711:
case 3658:
case 3871:
case 3562:
case 175:
case 2025:
case 2198:
case 862:
case 2534:
case 2835:
case 2687:
case 1937:
case 170:
case 993:
case 1405:
case 2477:
case 3006:
case 2009:
case 3841:
case 3:
case 256:
case 48:
case 3928:
case 3825:
case 1559:
case 2718:
case 3622:
case 986:
case 3164:
case 1607:
case 3201:
case 60:
case 1168:
case 220:
case 3454:
case 1777:
case 870:
case 2242:
case 3806:
case 2747:
case 3370:
case 2361:
case 3858:
case 367:
case 3754:
case 4034:
case 2127:
case 2814:
case 719:
case 1567:
case 1630:
case 2400:
case 787:
case 1021:
case 129:
case 1363:
case 3659:
case 1605:
case 694:
case 507:
case 2930:
case 1202:
case 3130:
case 76:
case 2992:
case 2319:
case 508:
case 211:
case 3697:
case 15:
case 1095:
case 3511:
case 3860:
case 3632:
case 641:
case 3437:
case 2105:
case 4021:
case 3460:
case 3509:
case 1956:
case 930:
case 3037:
case 832:
case 2618:
case 1216:
case 2896:
case 2529:
case 1259:
case 3233:
case 525:
case 1551:
case 1165:
case 3156:
case 3003:
case 139:
case 1245:
case 1115:
case 3888:
case 3561:
case 4057:
case 1402:
case 3235:
case 1386:
case 3273:
case 2247:
case 1357:
case 1669:
case 857:
case 3172:
case 2878:
case 2057:
case 541:
case 1628:
case 1826:
case 3755:
case 4079:
case 3440:
case 823:
case 1664:
case 884:
case 585:
case 1892:
case 2360:
case 3911:
case 2457:
case 992:
case 2028:
case 1702:
case 2323:
case 2979:
case 2797:
case 3746:
case 4051:
case 3040:
case 1856:
case 3553:
case 3759:
case 1327:
case 599:
case 1178:
case 1354:
case 1805:
case 841:
case 3783:
case 3249:
case 3724:
case 1352:
case 3801:
case 2737:
case 2750:
case 875:
case 3877:
case 3421:
case 1752:
case 594:
case 2885:
case 2982:
case 1212:
case 3012:
case 1043:
case 3306:
case 2869:
case 1535:
case 2875:
case 7:
case 1033:
case 401:
case 3883:
case 2165:
case 3869:
case 3687:
case 1995:
case 3896:
case 3830:
case 2201:
case 217:
case 2730:
case 966:
case 3944:
case 3730:
case 1880:
case 2327:
case 271:
case 3574:
case 487:
case 2270:
case 2721:
case 84:
case 2211:
case 3100:
case 2347:
case 3747:
case 433:
case 2426:
case 2438:
case 3776:
case 1572:
case 496:
case 1416:
case 3240:
case 2393:
case 1294:
case 1980:
case 3577:
case 2267:
case 233:
case 1898:
case 898:
case 3206:
case 3253:
case 203:
case 2318:
case 2748:
case 2273:
case 3328:
case 604:
case 3361:
case 3696:
case 851:
case 3775:
case 3158:
case 2286:
case 2602:
case 1881:
case 2058:
case 3129:
case 1709:
case 4054:
case 4078:
case 3605:
case 3813:
case 2661:
case 1756:
case 989:
case 3713:
case 2598:
case 3189:
case 2157:
case 1013:
case 1519:
case 1999:
case 258:
case 3261:
case 2410:
case 2762:
case 3708:
case 2964:
case 63:
case 3081:
case 252:
case 3579:
case 828:
case 3961:
case 936:
case 2150:
case 1685:
case 3180:
case 1016:
case 345:
case 3165:
case 4084:
case 2493:
case 3765:
case 3414:
case 1884:
case 224:
case 2229:
case 3703:
case 3132:
case 3446:
case 737:
case 1319:
case 3079:
case 867:
case 784:
case 558:
case 190:
case 82:
case 3956:
case 3443:
case 3948:
case 2143:
case 1144:
case 317:
case 2891:
case 3983:
case 2332:
case 2024:
case 567:
case 2597:
case 2647:
case 265:
case 988:
case 1525:
case 1974:
case 1102:
case 779:
case 1023:
case 2119:
case 3311:
case 2704:
case 1028:
case 429:
case 46:
case 1839:
case 1501:
case 2406:
case 2545:
case 349:
case 880:
case 771:
case 3691:
case 2017:
case 3356:
case 3407:
case 2210:
case 330:
case 1157:
case 294:
case 509:
case 2574:
case 4012:
case 3342:
case 2723:
case 2320:
case 1064:
case 2759:
case 2754:
case 2991:
case 2471:
case 121:
case 3337:
case 955:
case 346:
case 2187:
case 2628:
case 816:
case 2445:
case 753:
case 2692:
case 403:
case 1874:
case 2069:
case 2309:
case 3684:
case 2158:
case 1657:
case 1939:
case 2940:
case 2507:
case 4007:
case 2946:
case 3108:
case 973:
case 2523:
case 163:
case 2170:
case 3112:
case 38:
case 3495:
case 2950:
case 3798:
case 2959:
case 3183:
case 325:
case 4018:
case 2784:
case 1788:
case 1053:
case 904:
case 1498:
case 108:
case 831:
case 2467:
case 2698:
case 2664:
case 3666:
case 1361:
case 3818:
case 135:
case 415:
case 2910:
case 1480:
case 2372:
case 2128:
case 1222:
case 3538:
case 2154:
case 3097:
case 2081:
case 773:
case 524:
case 3811:
case 3770:
case 341:
case 1693:
case 2741:
case 673:
case 297:
case 232:
case 671:
case 2990:
case 2525:
case 564:
case 1401:
case 2374:
case 3474:
case 1076:
case 1876:
case 292:
case 53:
case 2817:
case 477:
case 3406:
case 915:
case 1533:
case 840:
case 2440:
case 3865:
case 1945:
case 372:
case 619:
case 2086:
case 1434:
case 868:
case 2742:
case 158:
case 3297:
case 126:
case 2340:
case 2186:
case 458:
case 3727:
case 107:
case 1464:
case 2272:
case 1696:
case 2033:
case 578:
case 480:
case 1302:
case 1015:
case 2605:
case 586:
case 2613:
case 2686:
case 3849:
case 1192:
case 4000:
case 2917:
case 3924:
case 730:
case 2571:
case 3931:
case 1744:
case 2638:
case 267:
case 1879:
case 1617:
case 3084:
case 1223:
case 105:
case 1286:
case 411:
case 2636:
case 592:
case 3824:
case 2118:
case 2883:
case 2543:
case 1381:
case 1201:
case 3050:
case 120:
case 1100:
case 3866:
case 785:
case 3272:
case 25:
case 2927:
case 1925:
case 1893:
case 2639:
case 3101:
case 777:
case 1651:
case 749:
case 1905:
case 1358:
case 4083:
case 3438:
case 1189:
case 3548:
case 1806:
case 1422:
case 3280:
case 4046:
case 1273:
case 1532:
case 3014:
case 373:
case 212:
case 967:
case 2292:
case 112:
case 1676:
case 965:
case 2801:
case 4092:
case 3046:
case 2586:
case 3293:
case 1761:
case 96:
case 3609:
case 2684:
case 2627:
case 2250:
case 2989:
case 1873:
case 2606:
case 408:
case 1478:
case 404:
case 446:
case 2036:
case 1624:
case 3690:
case 4014:
case 201:
case 3327:
case 3970:
case 3819:
case 1530:
case 3863:
case 1391:
case 40:
case 1048:
case 3236:
case 503:
case 1662:
case 1543:
case 1091:
case 3290:
case 550:
case 4071:
case 3748:
case 1733:
case 937:
case 804:
case 1261:
case 2071:
case 1375:
case 2920:
case 781:
case 2162:
case 1978:
case 209:
case 1924:
case 3308:
case 3147:
case 722:
case 2790:
case 3338:
case 3394:
case 3528:
case 3720:
case 2685:
case 1307:
case 2680:
case 2587:
case 2539:
case 2334:
case 2214:
case 143:
case 2733:
case 50:
case 3032:
case 2061:
case 996:
case 3934:
case 527:
case 3782:
case 43:
case 2901:
case 94:
case 1511:
case 3610:
case 2749:
case 3482:
case 1946:
case 3490:
case 3764:
case 1576:
case 1984:
case 2413:
case 3989:
case 361:
case 16:
case 2487:
case 3295:
case 2673:
case 3939:
case 2923:
case 1051:
case 3371:
case 2985:
case 3457:
case 3187:
case 2643:
case 2972:
case 512:
case 1520:
case 1121:
case 2939:
case 837:
case 3069:
case 767:
case 1882:
case 1536:
case 136:
case 266:
case 598:
case 2700:
case 2793:
case 1616:
case 2027:
case 4056:
case 2355:
case 949:
case 2192:
case 1087:
case 1747:
case 3726:
case 708:
case 3221:
case 3565:
case 3104:
case 3393:
case 4061:
case 3772:
case 1138:
case 2504:
case 3946:
case 535:
case 2431:
case 2489:
case 2824:
case 3227:
case 2141:
case 2688:
case 744:
case 2441:
case 3488:
case 631:
case 2701:
case 2678:
case 2248:
case 2802:
case 2452:
case 2887:
case 3635:
case 783:
case 148:
case 1078:
case 3977:
case 1822:
case 2455:
case 4049:
case 2665:
case 661:
case 3786:
case 3148:
case 4087:
case 3629:
case 3634:
case 697:
case 3689:
case 113:
case 54:
case 2560:
case 3220:
case 2781:
case 3149:
case 248:
case 1081:
case 2829:
case 2811:
case 3804:
case 2047:
case 3455:
case 1804:
case 2672:
case 633:
case 205:
case 2954:
case 2589:
case 978:
case 3664:
case 3041:
case 1579:
case 3203:
case 1516:
case 2984:
case 1580:
case 1271:
case 2049:
case 630:
case 2110:
case 2696:
case 2464:
case 765:
case 2306:
case 2274:
case 2022:
case 2934:
case 1129:
case 1983:
case 2094:
case 4038:
case 3842:
case 947:
case 44:
case 678:
case 3589:
case 3178:
case 956:
case 274:
case 1382:
case 3995:
case 2336:
case 1206:
case 2955:
case 1428:
case 2538:
case 313:
case 877:
case 2444:
case 159:
case 980:
case 1167:
case 1732:
case 2789:
case 2398:
case 1734:
case 1562:
case 1328:
case 626:
case 1068:
case 3960:
case 1512:
case 1486:
case 1393:
case 118:
case 155:
case 1509:
case 3286:
case 3846:
case 1524:
case 597:
case 1833:
case 310:
case 1795:
case 2476:
case 4080:
case 1941:
case 954:
case 1323:
case 1786:
case 3359:
case 3524:
case 2352:
case 2645:
case 2913:
case 3662:
case 2259:
case 676:
case 2579:
case 3704:
case 1687:
case 1638:
case 1229:
case 2035:
case 3372:
case 1247:
case 3790:
case 1042:
case 3513:
case 1179:
case 3145:
case 2434:
case 2943:
case 3155:
case 1062:
case 2045:
case 1848:
case 596:
case 3787:
case 3073:
case 3230:
case 3994:
case 1374:
case 153:
case 1266:
case 1717:
case 1093:
case 790:
case 1380:
case 1750:
case 3496:
case 260:
case 2957:
case 1104:
case 494:
case 2768:
case 3205:
case 1423:
case 806:
case 994:
case 1829:
case 3216:
case 1430:
case 3571:
case 231:
case 296:
case 3269:
case 1718:
case 1710:
case 3000:
case 3425:
case 3368:
case 1996:
case 861:
case 1674:
case 3582:
case 2031:
case 1338:
case 3885:
case 3831:
case 2596:
case 351:
case 2101:
case 830:
case 3794:
case 1086:
case 970:
case 720:
case 3015:
case 574:
case 799:
case 2763:
case 3434:
case 2365:
case 3107:
case 3913:
case 3072:
case 2610:
case 498:
case 1317:
case 3734:
case 132:
case 1667:
case 1815:
case 3078:
case 548:
case 3735:
case 2871:
case 1648:
case 2262:
case 2853:
case 1158:
case 3396:
case 334:
case 1767:
case 1749:
case 952:
case 1326:
case 1626:
case 2098:
case 782:
case 3260:
case 2516:
case 3382:
case 1002:
case 2416:
case 1099:
case 71:
case 1708:
case 3195:
case 3062:
case 461:
case 2149:
case 2569:
case 165:
case 3075:
case 957:
case 3771:
case 2769:
case 3954:
case 3244:
case 589:
case 1554:
case 2238:
case 1463:
case 2612:
case 2621:
case 4030:
case 3056:
case 488:
case 2392:
case 570:
case 1834:
case 3576:
case 774:
case 3519:
case 2584:
case 3981:
case 3514:
case 2333:
case 2807:
case 1644:
case 1282:
case 3660:
case 74:
case 451:
case 3641:
case 3559:
case 358:
case 238:
case 4094:
case 2102:
case 709:
case 3243:
case 366:
case 820:
case 3698:
case 3211:
case 691:
case 2689:
case 910:
case 3665:
case 657:
case 2484:
case 2359:
case 1568:
case 3390:
case 1041:
case 422:
case 3179:
case 3487:
case 2629:
case 483:
case 3769:
case 3598:
case 397:
case 1411:
case 871:
case 1170:
case 3972:
case 1235:
case 897:
case 484:
case 1611:
case 1649:
case 2000:
case 259:
case 3038:
case 1970:
case 1807:
case 1447:
case 1403:
case 4005:
case 3174:
case 2180:
case 1902:
case 770:
case 2642:
case 3334:
case 3656:
case 62:
case 3797:
case 2010:
case 2881:
case 873:
case 1901:
case 2570:
case 3325:
case 2204:
case 1864:
case 533:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1659639601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,];
var gg_b = "1659639601/";

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
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
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
