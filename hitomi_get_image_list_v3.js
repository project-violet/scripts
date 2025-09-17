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
case 2558:
case 1910:
case 1308:
case 1440:
case 1817:
case 3135:
case 1409:
case 2401:
case 664:
case 2743:
case 48:
case 3668:
case 1873:
case 1804:
case 3119:
case 3326:
case 2239:
case 3335:
case 3126:
case 3319:
case 1630:
case 3327:
case 2295:
case 696:
case 1108:
case 3948:
case 3985:
case 3418:
case 1816:
case 515:
case 3199:
case 443:
case 938:
case 1432:
case 782:
case 1537:
case 2008:
case 675:
case 173:
case 2653:
case 2970:
case 993:
case 357:
case 2638:
case 3254:
case 2349:
case 2893:
case 1341:
case 68:
case 1746:
case 918:
case 2300:
case 1536:
case 3776:
case 4014:
case 3011:
case 3633:
case 3658:
case 3993:
case 1497:
case 4071:
case 3074:
case 1592:
case 459:
case 1128:
case 161:
case 2568:
case 3194:
case 1416:
case 185:
case 1946:
case 3818:
case 1044:
case 2798:
case 3394:
case 193:
case 695:
case 1824:
case 1947:
case 99:
case 2770:
case 1429:
case 3443:
case 146:
case 1512:
case 3870:
case 2801:
case 1809:
case 2234:
case 954:
case 1473:
case 1762:
case 476:
case 3898:
case 2155:
case 2663:
case 676:
case 529:
case 3259:
case 3748:
case 1287:
case 64:
case 4019:
case 2848:
case 267:
case 2885:
case 1778:
case 4035:
case 4026:
case 3921:
case 320:
case 483:
case 2413:
case 521:
case 2028:
case 2572:
case 1505:
case 986:
case 1710:
case 2477:
case 2355:
case 2222:
case 2144:
case 820:
case 1286:
case 1690:
case 277:
case 2513:
case 1930:
case 1956:
case 649:
case 2219:
case 2763:
case 52:
case 2577:
case 1211:
case 3115:
case 2235:
case 1610:
case 955:
case 1180:
case 3075:
case 2576:
case 428:
case 65:
case 641:
case 694:
case 2299:
case 2061:
case 1850:
case 1088:
case 3989:
case 3968:
case 3453:
case 2858:
case 2080:
case 3543:
case 1942:
case 2833:
case 1412:
case 2618:
case 2145:
case 1161:
case 991:
case 171:
case 1504:
case 1596:
case 3972:
case 3249:
case 1767:
case 1223:
case 3758:
case 2388:
case 3784:
case 1361:
case 1597:
case 2154:
case 466:
case 1662:
case 449:
case 2953:
case 2698:
case 1481:
case 16:
case 999:
case 2489:
case 2938:
case 179:
case 2884:
case 3601:
case 163:
case 979:
case 2738:
case 3334:
case 100:
case 3183:
case 1436:
case 2585:
case 3853:
case 534:
case 2294:
case 1966:
case 453:
case 1860:
case 2051:
case 1437:
case 3087:
case 1425:
case 2207:
case 1967:
case 956:
case 2872:
case 750:
case 2214:
case 3134:
case 3383:
case 474:
case 1742:
case 2643:
case 2159:
case 1892:
case 489:
case 902:
case 3789:
case 1757:
case 2889:
case 4015:
case 2868:
case 4039:
case 2963:
case 2458:
case 1524:
case 1274:
case 523:
case 1812:
case 2433:
case 1351:
case 4095:
case 3244:
case 1730:
case 3122:
case 465:
case 1652:
case 2164:
case 1756:
case 3879:
case 1683:
case 1113:
case 3147:
case 662:
case 771:
case 3823:
case 1849:
case 2841:
case 756:
case 1444:
case 1914:
case 1455:
case 833:
case 1176:
case 1193:
case 3928:
case 76:
case 3043:
case 1029:
case 106:
case 229:
case 2021:
case 779:
case 3347:
case 40:
case 567:
case 1004:
case 2266:
case 1073:
case 1906:
case 3352:
case 905:
case 2903:
case 1727:
case 3575:
case 1263:
case 2093:
case 216:
case 3237:
case 60:
case 2117:
case 3651:
case 1569:
case 127:
case 1588:
case 2561:
case 3811:
case 2104:
case 824:
case 2173:
case 702:
case 3882:
case 2013:
case 248:
case 2428:
case 2304:
case 2396:
case 1622:
case 2808:
case 236:
case 3891:
case 2317:
case 3236:
case 2782:
case 3178:
case 1926:
case 1855:
case 1040:
case 755:
case 2982:
case 3190:
case 1185:
case 2991:
case 2332:
case 3070:
case 3281:
case 3098:
case 1639:
case 3310:
case 1385:
case 3212:
case 3874:
case 952:
case 927:
case 2230:
case 3110:
case 3378:
case 2441:
case 2911:
case 1695:
case 660:
case 2703:
case 1919:
case 3423:
case 3018:
case 1844:
case 105:
case 3482:
case 1301:
case 403:
case 2309:
case 878:
case 2828:
case 33:
case 4047:
case 2675:
case 288:
case 2408:
case 378:
case 2324:
case 3728:
case 1253:
case 799:
case 3661:
case 81:
case 2140:
case 3162:
case 2979:
case 3260:
case 235:
case 1714:
case 150:
case 2085:
case 3586:
case 2048:
case 2109:
case 2923:
case 3205:
case 1564:
case 3411:
case 4046:
case 31:
case 3941:
case 1707:
case 3628:
case 223:
case 311:
case 773:
case 1158:
case 3167:
case 3761:
case 0:
case 510:
case 2861:
case 1934:
case 1050:
case 1845:
case 1869:
case 1036:
case 1464:
case 1606:
case 1702:
case 470:
case 3511:
case 319:
case 3582:
case 1459:
case 2451:
case 3487:
case 807:
case 1037:
case 1607:
case 104:
case 4042:
case 1025:
case 331:
case 1358:
case 3166:
case 1184:
case 1614:
case 2246:
case 530:
case 819:
case 1500:
case 3229:
case 1243:
case 326:
case 942:
case 214:
case 492:
case 3204:
case 1565:
case 2541:
case 980:
case 826:
case 786:
case 670:
case 2603:
case 2674:
case 4030:
case 2337:
case 2150:
case 3780:
case 2325:
case 3887:
case 1060:
case 2851:
case 2528:
case 2278:
case 1005:
case 1619:
case 1627:
case 609:
case 1189:
case 690:
case 1168:
case 3157:
case 2787:
case 1635:
case 1722:
case 3130:
case 3357:
case 2381:
case 2786:
case 2682:
case 180:
case 2112:
case 1699:
case 601:
case 2461:
case 512:
case 637:
case 2931:
case 1864:
case 3053:
case 437:
case 1372:
case 1671:
case 2679:
case 785:
case 1218:
case 3342:
case 2360:
case 1783:
case 672:
case 2623:
case 577:
case 2160:
case 3224:
case 490:
case 2975:
case 3574:
case 982:
case 409:
case 793:
case 1081:
case 3431:
case 77:
case 22:
case 2089:
case 417:
case 746:
case 4066:
case 1544:
case 1270:
case 3050:
case 840:
case 3869:
case 3036:
case 3606:
case 3464:
case 2527:
case 2422:
case 1511:
case 168:
case 1628:
case 594:
case 1167:
case 3384:
case 722:
case 2745:
case 2769:
case 2213:
case 340:
case 1166:
case 1367:
case 3614:
case 3184:
case 107:
case 4072:
case 2599:
case 1591:
case 3333:
case 549:
case 119:
case 3983:
case 2526:
case 3607:
case 304:
case 925:
case 3854:
case 1063:
case 2293:
case 2276:
case 3565:
case 1273:
case 1296:
case 2839:
case 1831:
case 2964:
case 3549:
case 1523:
case 42:
case 4068:
case 2815:
case 4089:
case 1217:
case 1229:
case 3500:
case 1579:
case 209:
case 2655:
case 2163:
case 3739:
case 2620:
case 2644:
case 2895:
case 528:
case 1951:
case 2483:
case 2959:
case 3189:
case 2594:
case 2506:
case 3627:
case 1330:
case 1356:
case 1157:
case 3635:
case 2248:
case 2285:
case 3060:
case 3859:
case 1980:
case 3454:
case 3469:
case 2514:
case 1886:
case 270:
case 1038:
case 3445:
case 342:
case 926:
case 1608:
case 1130:
case 3722:
case 2507:
case 3389:
case 2402:
case 1475:
case 581:
case 3368:
case 2764:
case 1232:
case 842:
case 380:
case 3218:
case 3783:
case 1342:
case 125:
case 623:
case 1641:
case 2649:
case 3555:
case 4033:
case 907:
case 3671:
case 4058:
case 931:
case 2883:
case 1431:
case 2439:
case 4084:
case 3172:
case 1209:
case 2834:
case 2988:
case 3544:
case 968:
case 911:
case 2338:
case 1224:
case 2353:
case 3092:
case 1240:
case 939:
case 1503:
case 3177:
case 3849:
case 2052:
case 2539:
case 688:
case 2515:
case 3016:
case 3914:
case 3444:
case 3771:
case 1147:
case 1346:
case 3113:
case 3097:
case 2258:
case 3907:
case 1741:
case 1474:
case 2765:
case 3313:
case 1347:
case 1146:
case 3073:
case 2595:
case 3096:
case 635:
case 3176:
case 198:
case 978:
case 306:
case 2944:
case 2414:
case 352:
case 2046:
case 2920:
case 3588:
case 2827:
case 2407:
case 124:
case 435:
case 3719:
case 852:
case 827:
case 1237:
case 415:
case 2664:
case 2406:
case 3726:
case 3321:
case 1250:
case 1891:
case 1236:
case 2899:
case 3799:
case 1882:
case 488:
case 203:
case 2826:
case 1708:
case 3615:
case 3009:
case 3999:
case 2268:
case 1098:
case 1281:
case 616:
case 1908:
case 1178:
case 3855:
case 4021:
case 1292:
case 429:
case 1190:
case 3465:
case 3927:
case 3935:
case 1018:
case 305:
case 3820:
case 924:
case 3400:
case 3385:
case 1479:
case 583:
case 1803:
case 1110:
case 436:
case 1728:
case 178:
case 2499:
case 2669:
case 621:
case 2645:
case 5:
case 1491:
case 3032:
case 3301:
case 2370:
case 2010:
case 2426:
case 3101:
case 850:
case 2435:
case 2427:
case 629:
case 1941:
case 3707:
case 11:
case 1411:
case 2654:
case 1162:
case 416:
case 1260:
case 2090:
case 3971:
case 4093:
case 2900:
case 2318:
case 3405:
case 3211:
case 2737:
case 1685:
case 1115:
case 2442:
case 2547:
case 1863:
case 3054:
case 630:
case 3825:
case 1395:
case 3678:
case 3069:
case 1438:
case 3045:
case 3850:
case 1989:
case 1453:
case 2981:
case 1195:
case 610:
case 697:
case 2992:
case 1339:
case 3610:
case 1075:
case 3282:
case 2632:
case 1315:
case 3161:
case 570:
case 713:
case 3573:
case 371:
case 2241:
case 1249:
case 497:
case 281:
case 2456:
case 2430:
case 871:
case 1200:
case 3529:
case 1543:
case 3279:
case 3412:
case 3942:
case 2960:
case 430:
case 3481:
case 798:
case 2039:
case 3516:
case 2609:
case 1601:
case 289:
case 879:
case 2624:
case 2640:
case 3662:
case 3766:
case 800:
case 1838:
case 1086:
case 899:
case 73:
case 3064:
case 1853:
case 4061:
case 3966:
case 2022:
case 501:
case 778:
case 228:
case 2578:
case 2590:
case 1183:
case 1613:
case 3647:
case 300:
case 844:
case 891:
case 1134:
case 147:
case 1383:
case 509:
case 3059:
case 1933:
case 590:
case 2842:
case 3860:
case 391:
case 3425:
case 71:
case 477:
case 1463:
case 1693:
case 3967:
case 2604:
case 677:
case 2673:
case 2857:
case 1518:
case 355:
case 2034:
case 2629:
case 3151:
case 1621:
case 266:
case 1789:
case 1255:
case 1768:
case 3351:
case 2616:
case 1220:
case 2186:
case 1570:
case 412:
case 3730:
case 1598:
case 3756:
case 3524:
case 2697:
case 294:
case 3203:
case 3274:
case 241:
case 2937:
case 3812:
case 1135:
case 1721:
case 2717:
case 1470:
case 2382:
case 886:
case 1498:
case 920:
case 2111:
case 1668:
case 1119:
case 3896:
case 667:
case 3440:
case 251:
case 3910:
case 2704:
case 2391:
case 3829:
case 1843:
case 2566:
case 1985:
case 1948:
case 2191:
case 608:
case 345:
case 2071:
case 2182:
case 259:
case 1079:
case 3656:
case 2311:
case 3978:
case 39:
case 854:
case 1713:
case 157:
case 1901:
case 3747:
case 1288:
case 2261:
case 1245:
case 122:
case 1091:
case 2909:
case 408:
case 3432:
case 2847:
case 4028:
case 1171:
case 3537:
case 739:
case 2410:
case 873:
case 2026:
case 3962:
case 3275:
case 295:
case 2379:
case 719:
case 1371:
case 1793:
case 2019:
case 2605:
case 2323:
case 2478:
case 2490:
case 3746:
case 3642:
case 3581:
case 2452:
case 1194:
case 1106:
case 3020:
case 3416:
case 275:
case 560:
case 1314:
case 885:
case 1658:
case 3667:
case 3592:
case 846:
case 1684:
case 3809:
case 2740:
case 3404:
case 87:
case 893:
case 338:
case 1898:
case 2862:
case 922:
case 3824:
case 1394:
case 393:
case 1306:
case 3429:
case 1913:
case 1701:
case 369:
case 346:
case 2916:
case 3790:
case 1538:
case 2446:
case 2374:
case 2303:
case 1553:
case 264:
case 2625:
case 2007:
case 2878:
case 2997:
case 1748:
case 1259:
case 3287:
case 2637:
case 1264:
case 3710:
case 2973:
case 4008:
case 2650:
case 3560:
case 2447:
case 3832:
case 2103:
case 243:
case 2174:
case 2810:
case 3499:
case 545:
case 3688:
case 362:
case 929:
case 1324:
case 2253:
case 3806:
case 3894:
case 3010:
case 1828:
case 3398:
case 2794:
case 2706:
case 1675:
case 188:
case 862:
case 2559:
case 3949:
case 1923:
case 3427:
case 3419:
case 3272:
case 2707:
case 3198:
case 2101:
case 921:
case 3170:
case 698:
case 1109:
case 1979:
case 1242:
case 3090:
case 3318:
case 3900:
case 250:
case 1140:
case 3268:
case 1257:
case 2185:
case 1991:
case 2148:
case 2009:
case 433:
case 624:
case 1332:
case 2926:
case 3062:
case 2844:
case 2820:
case 205:
case 3534:
case 2465:
case 1703:
case 59:
case 2919:
case 554:
case 3471:
case 797:
case 2400:
case 2385:
case 3720:
case 1132:
case 538:
case 1196:
case 3819:
case 1173:
case 3944:
case 41:
case 3046:
case 1561:
case 116:
case 3659:
case 2735:
case 2121:
case 3143:
case 1129:
case 1903:
case 593:
case 3502:
case 1076:
case 1093:
case 2263:
case 1317:
case 1329:
case 1686:
case 3406:
case 3494:
case 3664:
case 1808:
case 2622:
case 1077:
case 561:
case 148:
case 303:
case 1428:
case 1373:
case 3826:
case 43:
case 2799:
case 63:
case 2016:
case 1779:
case 2420:
case 2771:
case 2914:
case 4018:
case 2393:
case 3539:
case 935:
case 2865:
case 3052:
case 2097:
case 1267:
case 2907:
case 121:
case 3765:
case 678:
case 2113:
case 712:
case 1266:
case 2994:
case 2313:
case 732:
case 2634:
case 2017:
case 2377:
case 915:
case 3153:
case 1623:
case 3138:
case 502:
case 668:
case 3600:
case 2671:
case 3883:
case 1679:
case 2372:
case 639:
case 1480:
case 2520:
case 3945:
case 3201:
case 2270:
case 1068:
case 12:
case 2172:
case 1089:
case 2902:
case 584:
case 3353:
case 1262:
case 426:
case 892:
case 631:
case 1312:
case 431:
case 3285:
case 2005:
case 3506:
case 1181:
case 2168:
case 2995:
case 56:
case 1528:
case 2454:
case 419:
case 1278:
case 934:
case 3042:
case 2060:
case 2859:
case 4063:
case 1392:
case 439:
case 3822:
case 2939:
case 571:
case 2864:
case 914:
case 2699:
case 3514:
case 1461:
case 2488:
case 1691:
case 2915:
case 468:
case 1112:
case 280:
case 2626:
case 2722:
case 3764:
case 1381:
case 3402:
case 1986:
case 317:
case 1084:
case 890:
case 3066:
case 2549:
case 2739:
case 3163:
case 114:
case 544:
case 2500:
case 817:
case 390:
case 3571:
case 3221:
case 3363:
case 801:
case 1337:
case 3620:
case 1136:
case 837:
case 1150:
case 1987:
case 3483:
case 3959:
case 337:
case 3067:
case 301:
case 2464:
case 3519:
case 2606:
case 2694:
case 2050:
case 2934:
case 1861:
case 2036:
case 3745:
case 3788:
case 240:
case 1247:
case 3213:
case 3802:
case 625:
case 2184:
case 2614:
case 1246:
case 3754:
case 2358:
case 2607:
case 3276:
case 3293:
case 2459:
case 3303:
case 2952:
case 3374:
case 1848:
case 3014:
case 167:
case 1344:
case 1320:
case 3251:
case 3878:
case 3007:
case 3625:
case 364:
case 1476:
case 1155:
case 1493:
case 3650:
case 1120:
case 3636:
case 457:
case 2505:
case 843:
case 422:
case 4091:
case 1355:
case 343:
case 3174:
case 4082:
case 108:
case 3103:
case 3810:
case 2560:
case 3542:
case 3917:
case 1413:
case 2946:
case 285:
case 4023:
case 1589:
case 3452:
case 4079:
case 261:
case 375:
case 1718:
case 2404:
case 3740:
case 2762:
case 2666:
case 2328:
case 238:
case 1801:
case 1234:
case 2809:
case 527:
case 2417:
case 1770:
case 246:
case 1421:
case 3709:
case 3862:
case 2840:
case 88:
case 72:
case 2824:
case 27:
case 1970:
case 505:
case 3261:
case 3909:
case 1638:
case 1877:
case 883:
case 1008:
case 29:
case 1165:
case 1998:
case 273:
case 723:
case 3026:
case 2962:
case 3940:
case 2525:
case 254:
case 383:
case 420:
case 1813:
case 3847:
case 3179:
case 2432:
case 1100:
case 3605:
case 3019:
case 1485:
case 3035:
case 1300:
case 1918:
case 2536:
case 2746:
case 895:
case 1893:
case 3323:
case 2341:
case 3478:
case 1365:
case 3111:
case 851:
case 714:
case 2873:
case 2896:
case 1215:
case 376:
case 908:
case 1743:
case 1533:
case 3391:
case 2817:
case 2829:
case 876:
case 3567:
case 3692:
case 2910:
case 2308:
case 84:
case 2440:
case 3191:
case 3:
case 859:
case 1041:
case 3852:
case 2049:
case 734:
case 2978:
case 2752:
case 3311:
case 2897:
case 2630:
case 967:
case 4003:
case 3936:
case 3950:
case 3034:
case 3466:
case 1889:
case 3696:
case 687:
case 504:
case 3629:
case 3187:
case 35:
case 894:
case 2730:
case 2756:
case 1164:
case 3186:
case 3387:
case 3712:
case 3616:
case 197:
case 1501:
case 110:
case 540:
case 3697:
case 3830:
case 3467:
case 1458:
case 341:
case 2274:
case 3856:
case 85:
case 394:
case 3925:
case 2203:
case 1294:
case 2966:
case 3022:
case 2450:
case 2436:
case 3590:
case 299:
case 200:
case 4075:
case 715:
case 328:
case 2646:
case 2425:
case 1207:
case 3705:
case 2532:
case 2059:
case 1051:
case 3842:
case 2573:
case 271:
case 2596:
case 881:
case 3905:
case 2161:
case 1145:
case 1188:
case 365:
case 1169:
case 1271:
case 2517:
case 2529:
case 580:
case 2279:
case 3456:
case 3867:
case 3430:
case 3609:
case 279:
case 1670:
case 26:
case 1698:
case 3457:
case 3375:
case 3552:
case 1489:
case 2597:
case 2662:
case 1154:
case 2492:
case 1388:
case 132:
case 2361:
case 1369:
case 716:
case 2405:
case 2380:
case 447:
case 1472:
case 910:
case 3725:
case 374:
case 2054:
case 353:
case 4087:
case 2837:
case 2690:
case 3208:
case 2957:
case 4086:
case 1299:
case 2850:
case 2291:
case 3546:
case 2088:
case 3632:
case 3736:
case 2282:
case 3992:
case 1226:
case 2610:
case 1593:
case 3002:
case 930:
case 3331:
case 1576:
case 2789:
case 2322:
case 3364:
case 1386:
case 1187:
case 1629:
case 166:
case 46:
case 2518:
case 1950:
case 3484:
case 1792:
case 3889:
case 3433:
case 1083:
case 3458:
case 1697:
case 141:
case 456:
case 2598:
case 15:
case 2220:
case 397:
case 2570:
case 539:
case 2334:
case 671:
case 2613:
case 1228:
case 1578:
case 656:
case 2853:
case 3294:
case 3206:
case 402:
case 4088:
case 2984:
case 3585:
case 3548:
case 3207:
case 1705:
case 2693:
case 2958:
case 526:
case 4054:
case 2087:
case 1842:
case 3051:
case 2383:
case 2200:
case 2543:
case 812:
case 3521:
case 3833:
case 181:
case 2102:
case 1456:
case 2265:
case 600:
case 2758:
case 699:
case 2972:
case 3618:
case 1624:
case 3154:
case 3388:
case 3369:
case 1015:
case 3938:
case 2601:
case 691:
case 3670:
case 928:
case 2031:
case 2302:
case 1039:
case 1866:
case 1552:
case 4059:
case 2863:
case 444:
case 1547:
case 377:
case 3513:
case 877:
case 941:
case 2685:
case 2648:
case 2115:
case 3472:
case 3219:
case 3763:
case 1725:
case 1736:
case 3226:
case 2339:
case 1992:
case 1331:
case 2075:
case 3593:
case 1208:
case 2989:
case 1981:
case 2453:
case 525:
case 760:
case 1546:
case 2438:
case 3061:
case 2748:
case 3344:
case 2785:
case 1890:
case 3320:
case 1637:
case 164:
case 598:
case 3493:
case 9:
case 3476:
case 3663:
case 959:
case 1374:
case 533:
case 1916:
case 1103:
case 308:
case 143:
case 1174:
case 645:
case 976:
case 2921:
case 454:
case 770:
case 1917:
case 220:
case 1732:
case 1094:
case 2264:
case 3477:
case 3355:
case 2976:
case 2993:
case 2658:
case 995:
case 3283:
case 2633:
case 175:
case 2314:
case 3718:
case 2818:
case 4049:
case 1557:
case 3568:
case 2106:
case 2307:
case 3770:
case 2701:
case 2913:
case 1709:
case 792:
case 524:
case 1740:
case 2977:
case 18:
case 3801:
case 983:
case 2870:
case 2114:
case 1410:
case 3202:
case 1924:
case 2563:
case 2082:
case 1847:
case 3100:
case 2713:
case 3970:
case 2288:
case 222:
case 2091:
case 1261:
case 1490:
case 2254:
case 3365:
case 1478:
case 1019:
case 1027:
case 2793:
case 2672:
case 2011:
case 195:
case 3448:
case 2371:
case 3300:
case 3918:
case 3485:
case 4055:
case 1391:
case 3821:
case 2399:
case 493:
case 1462:
case 446:
case 151:
case 1773:
case 1704:
case 1796:
case 1692:
case 1681:
case 14:
case 2498:
case 2668:
case 3239:
case 2326:
case 2119:
case 2689:
case 2721:
case 2135:
case 1729:
case 1717:
case 790:
case 438:
case 1382:
case 53:
case 1280:
case 2126:
case 1071:
case 2079:
case 1182:
case 159:
case 1612:
case 3584:
case 964:
case 1566:
case 578:
case 485:
case 1852:
case 4020:
case 3295:
case 2023:
case 1797:
case 3679:
case 1883:
case 3305:
case 1954:
case 3480:
case 1665:
case 1649:
case 1138:
case 775:
case 225:
case 2342:
case 78:
case 2224:
case 2240:
case 2574:
case 2503:
case 1338:
case 3160:
case 1415:
case 32:
case 2431:
case 3089:
case 1439:
case 3105:
case 972:
case 3192:
case 4025:
case 404:
case 3290:
case 3851:
case 3787:
case 3312:
case 1248:
case 1759:
case 1594:
case 2330:
case 3611:
case 2356:
case 764:
case 2130:
case 3210:
case 1507:
case 1402:
case 2357:
case 1764:
case 2475:
case 1822:
case 482:
case 3392:
case 2053:
case 743:
case 2886:
case 796:
case 1163:
case 1655:
case 3731:
case 3125:
case 2229:
case 3137:
case 3336:
case 2217:
case 1571:
case 776:
case 1221:
case 1815:
case 547:
case 117:
case 1434:
case 2273:
case 3541:
case 1066:
case 1839:
case 751:
case 2204:
case 2831:
case 2523:
case 1483:
case 2951:
case 3987:
case 7:
case 3880:
case 3674:
case 4012:
case 3603:
case 2780:
case 1895:
case 3325:
case 759:
case 1620:
case 2216:
case 3150:
case 1644:
case 1788:
case 172:
case 1745:
case 1769:
case 323:
case 2167:
case 992:
case 3775:
case 783:
case 1519:
case 1277:
case 1422:
case 442:
case 3861:
case 1535:
case 2486:
case 4060:
case 2063:
case 1276:
case 2582:
case 2487:
case 3451:
case 4005:
case 1599:
case 207:
case 2591:
case 3246:
case 231:
case 3508:
case 2367:
case 1010:
case 1426:
case 388:
case 23:
case 3828:
case 2482:
case 1370:
case 3309:
case 2587:
case 1499:
case 1669:
case 1688:
case 2491:
case 3408:
case 3340:
case 1806:
case 1894:
case 2728:
case 278:
case 335:
case 2260:
case 1900:
case 3140:
case 1654:
case 1272:
case 427:
case 1419:
case 606:
case 1965:
case 2941:
case 1198:
case 1522:
case 2411:
case 2586:
case 835:
case 2178:
case 4017:
case 2292:
case 960:
case 1268:
case 10:
case 2281:
case 2310:
case 2908:
case 1755:
case 3991:
case 2070:
case 3001:
case 3332:
case 3256:
case 2803:
case 2110:
case 2680:
case 2018:
case 2390:
case 4016:
case 3703:
case 794:
case 316:
case 1659:
case 2237:
case 1143:
case 3974:
case 774:
case 3903:
case 3093:
case 3076:
case 2811:
case 1827:
case 1819:
case 3104:
case 1944:
case 1414:
case 3561:
case 816:
case 1920:
case 1046:
case 3428:
case 103:
case 605:
case 1955:
case 3013:
case 836:
case 2250:
case 1343:
case 1899:
case 2236:
case 3329:
case 1664:
case 848:
case 3077:
case 3723:
case 3267:
case 213:
case 520:
case 2147:
case 765:
case 2531:
case 405:
case 2043:
case 4024:
case 3021:
case 2928:
case 1595:
case 789:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758150002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,];
var gg_b = "1758150002/";

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
