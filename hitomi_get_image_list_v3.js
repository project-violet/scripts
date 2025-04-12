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
case 277:
case 535:
case 1738:
case 1813:
case 87:
case 3086:
case 41:
case 1628:
case 2074:
case 1708:
case 329:
case 3687:
case 1318:
case 2740:
case 982:
case 1622:
case 3284:
case 307:
case 60:
case 1312:
case 1563:
case 1281:
case 3774:
case 502:
case 2786:
case 3103:
case 1732:
case 1079:
case 3114:
case 2414:
case 2839:
case 416:
case 683:
case 2856:
case 1407:
case 1967:
case 1111:
case 1585:
case 2200:
case 2817:
case 1419:
case 1973:
case 3801:
case 2069:
case 594:
case 3367:
case 1445:
case 944:
case 4037:
case 211:
case 1804:
case 1693:
case 1126:
case 994:
case 2311:
case 391:
case 600:
case 2621:
case 2039:
case 1206:
case 3420:
case 742:
case 2120:
case 2009:
case 2545:
case 1907:
case 131:
case 2017:
case 3298:
case 2869:
case 1467:
case 3001:
case 3072:
case 2288:
case 2616:
case 4073:
case 3739:
case 3709:
case 873:
case 558:
case 3643:
case 3031:
case 3756:
case 3629:
case 2485:
case 686:
case 173:
case 2914:
case 3495:
case 2195:
case 3418:
case 2463:
case 437:
case 1533:
case 1270:
case 2874:
case 824:
case 1503:
case 1025:
case 902:
case 1762:
case 1780:
case 3215:
case 2896:
case 387:
case 935:
case 3412:
case 1746:
case 582:
case 2112:
case 1653:
case 3177:
case 2331:
case 2867:
case 3150:
case 3026:
case 601:
case 390:
case 3317:
case 1885:
case 1654:
case 216:
case 2372:
case 1257:
case 3356:
case 3224:
case 2517:
case 2904:
case 1682:
case 2378:
case 2636:
case 3719:
case 3164:
case 3011:
case 2726:
case 2659:
case 3531:
case 3339:
case 830:
case 2873:
case 1917:
case 4069:
case 34:
case 21:
case 3438:
case 1033:
case 1513:
case 1641:
case 817:
case 117:
case 3946:
case 1362:
case 3968:
case 477:
case 1003:
case 1525:
case 3408:
case 3644:
case 3235:
case 3247:
case 3962:
case 798:
case 1863:
case 3402:
case 3471:
case 3432:
case 2670:
case 1368:
case 1474:
case 975:
case 3691:
case 1718:
case 2340:
case 1974:
case 1803:
case 575:
case 8:
case 3586:
case 2180:
case 2574:
case 1:
case 2162:
case 1694:
case 2596:
case 2490:
case 1338:
case 3190:
case 2413:
case 3113:
case 3468:
case 669:
case 3374:
case 2979:
case 357:
case 65:
case 3396:
case 1332:
case 1297:
case 2425:
case 3125:
case 1371:
case 1302:
case 552:
case 3540:
case 697:
case 2146:
case 1579:
case 2699:
case 3446:
case 1630:
case 2067:
case 136:
case 4009:
case 1564:
case 2434:
case 2648:
case 3104:
case 3561:
case 3773:
case 1131:
case 1720:
case 908:
case 1600:
case 1439:
case 2837:
case 2361:
case 3767:
case 2569:
case 1795:
case 979:
case 656:
case 1969:
case 3811:
case 4017:
case 213:
case 1550:
case 1456:
case 2210:
case 2073:
case 1409:
case 2808:
case 469:
case 3746:
case 3653:
case 4018:
case 2725:
case 2605:
case 1177:
case 2635:
case 2713:
case 324:
case 3503:
case 1215:
case 921:
case 2647:
case 545:
case 1418:
case 2802:
case 1955:
case 3533:
case 4012:
case 1185:
case 2251:
case 373:
case 1709:
case 1643:
case 1031:
case 1629:
case 3850:
case 785:
case 3004:
case 949:
case 1495:
case 1319:
case 1298:
case 3907:
case 3514:
case 331:
case 1072:
case 3467:
case 2911:
case 370:
case 2167:
case 934:
case 1345:
case 362:
case 1337:
case 2173:
case 825:
case 203:
case 3236:
case 1078:
case 2704:
case 481:
case 4095:
case 1717:
case 200:
case 3206:
case 3259:
case 1367:
case 2145:
case 3445:
case 3693:
case 3126:
case 705:
case 3834:
case 2764:
case 3419:
case 2385:
case 1801:
case 1872:
case 2595:
case 283:
case 1675:
case 1061:
case 2107:
case 3242:
case 2750:
case 2411:
case 518:
case 3064:
case 453:
case 3610:
case 401:
case 3437:
case 1373:
case 1114:
case 280:
case 1769:
case 1918:
case 1455:
case 3281:
case 3732:
case 3079:
case 2880:
case 3622:
case 2377:
case 3771:
case 3702:
case 3563:
case 3628:
case 628:
case 3577:
case 1086:
case 2363:
case 129:
case 2512:
case 677:
case 2002:
case 3299:
case 1912:
case 3813:
case 3738:
case 37:
case 4055:
case 3969:
case 3178:
case 3456:
case 2156:
case 843:
case 143:
case 140:
case 1767:
case 3814:
case 92:
case 840:
case 3439:
case 486:
case 610:
case 896:
case 2275:
case 281:
case 1369:
case 3720:
case 3600:
case 760:
case 3085:
case 400:
case 1773:
case 2401:
case 3564:
case 3101:
case 763:
case 403:
case 3417:
case 2961:
case 19:
case 1938:
case 1689:
case 3302:
case 2777:
case 89:
case 912:
case 2508:
case 3579:
case 3712:
case 926:
case 269:
case 2287:
case 2652:
case 3063:
case 4080:
case 3297:
case 4062:
case 2018:
case 1908:
case 3:
case 3694:
case 1586:
case 3077:
case 1971:
case 2012:
case 2502:
case 4046:
case 3996:
case 1932:
case 3833:
case 2986:
case 3590:
case 759:
case 2649:
case 2703:
case 2196:
case 2562:
case 2174:
case 2580:
case 2486:
case 2313:
case 3368:
case 1247:
case 4008:
case 2615:
case 1402:
case 1471:
case 2733:
case 664:
case 3863:
case 3877:
case 526:
case 2546:
case 2812:
case 923:
case 3525:
case 2055:
case 2390:
case 1205:
case 61:
case 738:
case 247:
case 1946:
case 3380:
case 4032:
case 3221:
case 2901:
case 1011:
case 1531:
case 2461:
case 2820:
case 1339:
case 766:
case 1224:
case 3660:
case 3682:
case 1309:
case 3014:
case 1719:
case 1164:
case 1026:
case 1317:
case 3216:
case 2334:
case 2895:
case 890:
case 1707:
case 146:
case 1627:
case 3885:
case 480:
case 2698:
case 3469:
case 2714:
case 2169:
case 483:
case 1737:
case 250:
case 893:
case 3909:
case 52:
case 2304:
case 2243:
case 1651:
case 193:
case 897:
case 197:
case 3146:
case 1508:
case 2125:
case 3425:
case 29:
case 85:
case 15:
case 1018:
case 3386:
case 3413:
case 3168:
case 1652:
case 2374:
case 1287:
case 257:
case 63:
case 1012:
case 1684:
case 985:
case 2190:
case 2902:
case 3222:
case 749:
case 2586:
case 6:
case 718:
case 2480:
case 1658:
case 3162:
case 3340:
case 2932:
case 2691:
case 978:
case 3073:
case 1156:
case 721:
case 4001:
case 1109:
case 856:
case 156:
case 3642:
case 310:
case 240:
case 2773:
case 1431:
case 3964:
case 881:
case 2826:
case 909:
case 3648:
case 3404:
case 181:
case 1350:
case 2134:
case 3819:
case 3293:
case 1472:
case 3934:
case 3873:
case 630:
case 671:
case 3726:
case 3659:
case 2011:
case 2531:
case 3606:
case 1901:
case 165:
case 3378:
case 2572:
case 2164:
case 2501:
case 2719:
case 3464:
case 1692:
case 865:
case 2356:
case 3517:
case 3037:
case 2309:
case 1698:
case 2707:
case 2150:
case 1334:
case 3450:
case 745:
case 1895:
case 578:
case 3509:
case 290:
case 3556:
case 2317:
case 3019:
case 2651:
case 150:
case 3331:
case 527:
case 1169:
case 4061:
case 3867:
case 1714:
case 1313:
case 1486:
case 1562:
case 1174:
case 1580:
case 1623:
case 1196:
case 585:
case 3670:
case 407:
case 1818:
case 1325:
case 3102:
case 2471:
case 799:
case 2247:
case 1055:
case 2644:
case 2235:
case 1440:
case 1546:
case 2179:
case 3479:
case 617:
case 1568:
case 429:
case 2946:
case 1390:
case 2438:
case 24:
case 3138:
case 3507:
case 559:
case 3778:
case 3195:
case 2495:
case 2643:
case 2709:
case 2756:
case 2629:
case 2185:
case 3485:
case 886:
case 1911:
case 3869:
case 670:
case 3288:
case 662:
case 3326:
case 631:
case 2298:
case 3537:
case 1704:
case 514:
case 2861:
case 712:
case 2420:
case 2292:
case 1314:
case 225:
case 3772:
case 800:
case 1926:
case 2717:
case 3311:
case 1734:
case 2177:
case 1333:
case 1725:
case 972:
case 1062:
case 2840:
case 960:
case 1605:
case 457:
case 566:
case 88:
case 287:
case 963:
case 1244:
case 49:
case 1555:
case 955:
case 1647:
case 3896:
case 3933:
case 3874:
case 2886:
case 1068:
case 2249:
case 3903:
case 3118:
case 3463:
case 2163:
case 1291:
case 1880:
case 2103:
case 2774:
case 1008:
case 3786:
case 3294:
case 2258:
case 80:
case 10:
case 1518:
case 1377:
case 2284:
case 3433:
case 207:
case 1032:
case 3096:
case 1512:
case 2252:
case 3740:
case 572:
case 1846:
case 3697:
case 1289:
case 3977:
case 2912:
case 377:
case 1665:
case 966:
case 1002:
case 1520:
case 241:
case 3230:
case 914:
case 2831:
case 106:
case 2872:
case 1385:
case 938:
case 3200:
case 3817:
case 4011:
case 493:
case 1411:
case 1750:
case 3856:
case 883:
case 3809:
case 2675:
case 183:
case 1595:
case 959:
case 2061:
case 2769:
case 180:
case 3839:
case 1137:
case 446:
case 4026:
case 217:
case 1253:
case 2362:
case 3568:
case 2641:
case 11:
case 739:
case 3390:
case 1138:
case 1925:
case 3546:
case 1479:
case 3440:
case 2140:
case 4079:
case 3733:
case 1171:
case 864:
case 1990:
case 3818:
case 3615:
case 3562:
case 3174:
case 2755:
case 3313:
case 2186:
case 3486:
case 1670:
case 3623:
case 1132:
case 3196:
case 3703:
case 2496:
case 3649:
case 2909:
case 3304:
case 1867:
case 3978:
case 116:
case 1372:
case 1045:
case 904:
case 3698:
case 2885:
case 816:
case 4064:
case 1509:
case 1711:
case 122:
case 3334:
case 2688:
case 353:
case 1636:
case 3692:
case 3931:
case 1517:
case 2660:
case 1904:
case 233:
case 2257:
case 2161:
case 782:
case 1007:
case 1873:
case 1934:
case 3972:
case 3901:
case 1726:
case 1606:
case 2417:
case 1819:
case 735:
case 1666:
case 3350:
case 2101:
case 3401:
case 2172:
case 2630:
case 1067:
case 1293:
case 2720:
case 984:
case 2600:
case 1964:
case 2085:
case 2131:
case 1648:
case 1404:
case 381:
case 1569:
case 4004:
case 473:
case 1361:
case 1642:
case 3156:
case 1210:
case 2456:
case 1807:
case 2409:
case 813:
case 462:
case 3785:
case 3364:
case 2969:
case 431:
case 3379:
case 1681:
case 4025:
case 1340:
case 3986:
case 3502:
case 424:
case 3855:
case 23:
case 1490:
case 4013:
case 1596:
case 3012:
case 1180:
case 3658:
case 1574:
case 2803:
case 837:
case 2063:
case 2297:
case 35:
case 268:
case 2332:
case 3287:
case 369:
case 1979:
case 1386:
case 1413:
case 2712:
case 2302:
case 69:
case 3508:
case 1425:
case 1839:
case 2437:
case 1414:
case 2064:
case 1567:
case 383:
case 519:
case 1809:
case 430:
case 1069:
case 2248:
case 2834:
case 2973:
case 2395:
case 471:
case 1200:
case 2126:
case 111:
case 554:
case 306:
case 3683:
case 4014:
case 433:
case 2813:
case 3289:
case 3071:
case 177:
case 629:
case 417:
case 1096:
case 4033:
case 2628:
case 2708:
case 1697:
case 3846:
case 3518:
case 2312:
case 1294:
case 3377:
case 2622:
case 2702:
case 2732:
case 2079:
case 3291:
case 3862:
case 1963:
case 1786:
case 915:
case 43:
case 1903:
case 2533:
case 3068:
case 3871:
case 4077:
case 515:
case 3647:
case 2762:
case 2780:
case 3046:
case 224:
case 2503:
case 779:
case 3790:
case 1874:
case 2355:
case 3303:
case 708:
case 4063:
case 2879:
case 3333:
case 1241:
case 2090:
case 1112:
case 2653:
case 300:
case 2206:
case 2259:
case 1772:
case 2864:
case 1657:
case 3704:
case 3624:
case 1260:
case 436:
case 351:
case 2236:
case 1288:
case 2467:
case 1869:
case 262:
case 1326:
case 2907:
case 2034:
case 231:
case 1778:
case 1195:
case 919:
case 1914:
case 1485:
case 386:
case 1158:
case 3005:
case 1570:
case 2690:
case 1233:
case 1184:
case 1476:
case 2053:
case 2191:
case 3491:
case 1344:
case 3181:
case 511:
case 2822:
case 3515:
case 634:
case 3489:
case 3047:
case 2625:
case 2499:
case 3646:
case 3199:
case 2315:
case 479:
case 2828:
case 73:
case 3668:
case 819:
case 4094:
case 148:
case 618:
case 3944:
case 1960:
case 3148:
case 1982:
case 1351:
case 2936:
case 1559:
case 3883:
case 1536:
case 1016:
case 3226:
case 3354:
case 621:
case 3388:
case 1057:
case 1214:
case 577:
case 2237:
case 235:
case 3382:
case 1729:
case 1656:
case 3360:
case 3951:
case 4030:
case 363:
case 528:
case 1988:
case 1021:
case 3142:
case 2810:
case 2267:
case 1488:
case 2942:
case 2650:
case 4082:
case 3083:
case 4060:
case 1775:
case 1454:
case 733:
case 3300:
case 282:
case 1669:
case 1816:
case 1542:
case 1285:
case 2151:
case 3451:
case 475:
case 2500:
case 3793:
case 2406:
case 3159:
case 2966:
case 2948:
case 1821:
case 1482:
case 1460:
case 4054:
case 1192:
case 3136:
case 2664:
case 1900:
case 2273:
case 1599:
case 488:
case 699:
case 198:
case 2144:
case 3444:
case 3728:
case 3608:
case 36:
case 258:
case 1277:
case 2384:
case 3376:
case 2358:
case 1441:
case 2022:
case 2765:
case 3552:
case 2470:
case 338:
case 717:
case 1149:
case 3847:
case 239:
case 3558:
case 1674:
case 1097:
case 1263:
case 1994:
case 911:
case 1115:
case 3065:
case 1976:
case 2593:
case 1264:
case 1806:
case 2457:
case 564:
case 1859:
case 731:
case 1836:
case 773:
case 1993:
case 937:
case 1375:
case 3121:
case 2882:
case 3429:
case 51:
case 3443:
case 2143:
case 1910:
case 2888:
case 1048:
case 3975:
case 626:
case 2030:
case 142:
case 2510:
case 1667:
case 1922:
case 3794:
case 2663:
case 184:
case 3286:
case 3618:
case 2274:
case 884:
case 3815:
case 2296:
case 3328:
case 494:
case 2522:
case 3084:
case 327:
case 1453:
case 2094:
case 3058:
case 1789:
case 3322:
case 1597:
case 2677:
case 2841:
case 1081:
case 378:
case 522:
case 1135:
case 3565:
case 2752:
case 3240:
case 3987:
case 279:
case 458:
case 1744:
case 2497:
case 1899:
case 510:
case 1070:
case 1213:
case 4022:
case 3487:
case 2187:
case 3741:
case 1165:
case 288:
case 1225:
case 389:
case 3535:
case 3015:
case 2876:
case 3547:
case 3655:
case 2749:
case 2335:
case 444:
case 1881:
case 1290:
case 439:
case 3475:
case 1607:
case 2239:
case 892:
case 2916:
case 3788:
case 1006:
case 192:
case 3092:
case 4093:
case 1516:
case 3943:
case 305:
case 252:
case 2614:
case 1183:
case 1234:
case 1645:
case 332:
case 2800:
case 2217:
case 1493:
case 361:
case 3272:
case 2088:
case 3201:
case 2921:
case 275:
case 1521:
case 1329:
case 3115:
case 551:
case 2399:
case 3581:
case 3976:
case 114:
case 1065:
case 906:
case 2984:
case 644:
case 1671:
case 814:
case 3149:
case 838:
case 3123:
case 474:
case 2218:
case 3263:
case 3097:
case 1558:
case 3674:
case 658:
case 86:
case 1376:
case 1989:
case 1638:
case 1552:
case 1835:
case 159:
case 3787:
case 3599:
case 1444:
case 1728:
case 1608:
case 3391:
case 3821:
case 3482:
case 3460:
case 245:
case 1136:
case 790:
case 2220:
case 3900:
case 1793:
case 793:
case 4051:
case 3857:
case 1824:
case 90:
case 2342:
case 3548:
case 2661:
case 682:
case 3669:
case 420:
case 1451:
case 2348:
case 2188:
case 2366:
case 866:
case 1330:
case 2154:
case 2829:
case 1427:
case 58:
case 872:
case 2551:
case 3639:
case 860:
case 160:
case 172:
case 1211:
case 2998:
case 3954:
case 2306:
case 2359:
case 98:
case 426:
case 3214:
case 635:
case 2336:
case 1951:
case 2875:
case 163:
case 3656:
case 3729:
case 155:
case 2130:
case 743:
case 1354:
case 1226:
case 1592:
case 2601:
case 3327:
case 2721:
case 855:
case 221:
case 1388:
case 3617:
case 2757:
case 3351:
case 3960:
case 1883:
case 50:
case 2029:
case 3506:
case 2631:
case 2992:
case 319:
case 986:
case 1865:
case 348:
case 2370:
case 2544:
case 1489:
case 1047:
case 3897:
case 1753:
case 580:
case 3203:
case 2949:
case 1491:
case 1035:
case 2255:
case 1181:
case 4089:
case 1523:
case 2176:
case 757:
case 2484:
case 3233:
case 3866:
case 1760:
case 2924:
case 3343:
case 4075:
case 132:
case 3557:
case 2316:
case 3234:
case 3183:
case 2483:
case 2027:
case 832:
case 1201:
case 3848:
case 2759:
case 2193:
case 2706:
case 3410:
case 1092:
case 3036:
case 805:
case 652:
case 3516:
case 2357:
case 597:
case 3637:
case 3842:
case 569:
case 3727:
case 1754:
case 1475:
case 2543:
case 3059:
case 55:
case 2529:
case 3006:
case 2122:
case 729:
case 581:
case 274:
case 2280:
case 2262:
case 1884:
case 965:
case 1547:
case 2246:
case 556:
case 499:
case 2465:
case 3165:
case 1741:
case 688:
case 901:
case 2905:
case 2935:
case 3428:
case 3744:
case 2128:
case 1505:
case 2889:
case 1487:
case 1049:
case 707:
case 3070:
case 467:
case 2268:
case 3135:
case 434:
case 878:
case 956:
case 1240:
case 2091:
case 127:
case 2153:
case 1612:
case 2799:
case 550:
case 3789:
case 3597:
case 2238:
case 1322:
case 3105:
case 2405:
case 1058:
case 608:
case 384:
case 1286:
case 809:
case 3791:
case 1052:
case 981:
case 1815:
case 2232:
case 2202:
case 787:
case 2447:
case 565:
case 1823:
case 226:
case 997:
case 1393:
case 2851:
case 0:
case 342:
case 3667:
case 2742:
case 1429:
case 3910:
case 791:
case 1898:
case 547:
case 1695:
case 885:
case 1892:
case 2983:
case 1121:
case 4029:
case 4043:
case 3264:
case 1700:
case 421:
case 1310:
case 3124:
case 3806:
case 1583:
case 1157:
case 1947:
case 3715:
case 1891:
case 438:
case 3305:
case 174:
case 3633:
case 3041:
case 4065:
case 3749:
case 3894:
case 3876:
case 2655:
case 1044:
case 543:
case 2852:
case 289:
case 2535:
case 2015:
case 2741:
case 946:
case 1268:
case 2023:
case 3187:
case 2049:
case 2487:
case 1889:
case 2505:
case 70:
case 1935:
case 2197:
case 3497:
case 540:
case 783:
case 2760:
case 2782:
case 2231:
case 1051:
case 1736:
case 1759:
case 1706:
case 3088:
case 1483:
case 232:
case 2098:
case 2524:
case 706:
case 3060:
case 3082:
case 2278:
case 3614:
case 123:
case 3324:
case 3209:
case 2788:
case 3916:
case 1611:
case 1529:
case 3798:
case 3175:
case 2475:
case 3416:
case 812:
case 3030:
case 112:
case 3510:
case 2975:
case 826:
case 2393:
case 126:
case 2695:
case 3888:
case 957:
case 472:
case 3685:
case 700:
case 3854:
case 3129:
case 1827:
case 3143:
case 2443:
case 2730:
case 3421:
case 3860:
case 786:
case 1766:
case 2261:
case 2892:
case 2157:
case 2583:
case 1424:
case 2310:
case 2700:
case 455:
case 2987:
case 546:
case 379:
case 3841:
case 590:
case 278:
case 1435:
case 3997:
case 1405:
case 3528:
case 593:
case 2058:
case 12:
case 1238:
case 1844:
case 1965:
case 1153:
case 3076:
case 227:
case 1587:
case 2612:
case 1232:
case 3522:
case 2052:
case 308:
case 4005:
case 2618:
case 1781:
case 2849:
case 1447:
case 1089:
case 2823:
case 2794:
case 3758:
case 4035:
case 845:
case 1492:
case 1220:
case 615:
case 3530:
case 145:
case 3010:
case 3948:
case 3966:
case 1342:
case 3783:
case 3500:
case 2793:
case 2106:
case 3459:
case 1348:
case 2451:
case 3151:
case 382:
case 2300:
case 1295:
case 929:
case 2427:
case 1843:
case 3093:
case 765:
case 1366:
case 1984:
case 2722:
case 2065:
case 1591:
case 1399:
case 1958:
case 941:
case 3594:
case 1218:
case 3352:
case 2584:
case 2170:
case 2991:
case 238:
case 2847:
case 1449:
case 1087:
case 3576:
case 1423:
case 1212:
case 3358:
case 2835:
case 3022:
case 4049:
case 358:
case 2989:
case 3384:
case 2728:
case 698:
case 3144:
case 489:
case 199:
case 3679:
case 1640:
case 899:
case 4058:
case 3735:
case 1370:
case 648:
case 3323:
case 4084:
case 1452:
case 3613:
case 427:
case 3315:
case 3828:
case 3189:
case 2047:
case 2489:
case 3625:
case 3705:
case 2035:
case 2491:
case 3191:
case 1923:
case 1949:
case 769:
case 3690:
case 2523:
case 2549:
case 1176:
case 1194:
case 2662:
case 1458:
case 75:
case 2005:
case 1915:
case 991:
case 3747:
case 2927:
case 1306:
case 1359:
case 260:
case 2142:
case 1716:
case 3442:
case 263:
case 1875:
case 3392:
case 1336:
case 2598:
case 2024:
case 756:
case 3245:
case 2388:
case 2166:
case 3466:
case 2592:
case 121:
case 255:
case 3959:
case 821:
case 2226:
case 3906:
case 302:
case 3398:
case 1130:
case 1992:
case 3219:
case 1631:
case 1029:
case 485:
case 1757:
case 1758:
case 2870:
case 3447:
case 3202:
case 1784:
case 1522:
case 609:
case 2791:
case 1296:
case 1274:
case 571:
case 3781:
case 2387:
case 108:
case 1663:
case 2789:
case 32:
case 1677:
case 2597:
case 3238:
case 448:
case 1528:
case 2105:
case 3799:
case 3844:
case 2279:
case 179:
case 3091:
case 1752:
case 2135:
case 3748:
case 1457:
case 2673:
case 2993:
case 9:
case 685:
case 517:
case 4021:
case 2910:
case 968:
case 1000:
case 1854:
case 312:
case 1416:
case 3742:
case 2066:
case 4057:
case 3611:
case 3543:
case 2006:
case 1239:
case 1916:
case 3321:
case 2727:
case 1798:
case 3110:
case 152:
case 323:
case 605:
case 852:
case 2516:
case 415:
case 1088:
case 3759:
case 2493:
case 3706:
case 3193:
case 2645:
case 1054:
case 1217:
case 3483:
case 632:
case 2557:
case 2183:
case 3027:
case 2343:
case 3924:
case 1830:
case 1792:
case 3736:
case 2619:
case 2521:
case 3889:
case 2213:
case 2070:
case 3268:
case 3935:
case 2744:
case 498:
case 2953:
case 204:
case 1347:
case 2165:
case 3465:
case 1894:
case 933:
case 1723:
case 1603:
case 536:
case 3044:
case 3947:
case 971:
case 1633:
case 2881:
case 930:
case 395:
case 3043:
case 3631:
case 3992:
case 2400:
case 710:
case 3100:
case 1219:
case 3757:
case 1893:
case 2960:
case 1724:
case 2982:
case 1466:
case 1560:
case 1582:
case 1959:
case 102:
case 1906:
case 2536:
case 655:
case 802:
case 321:
case 2743:
case 2609:
case 57:
case 2656:
case 3678:
case 1554:
case 1237:
case 4066:
case 135:
case 3527:
case 3336:
case 3306:
case 3359:
case 1810:
case 1207:
case 3551:
case 660:
case 672:
case 194:
case 1690:
case 894:
case 2570:
case 2233:
case 1747:
case 3458:
case 2494:
case 3255:
case 3923:
case 2203:
case 2344:
case 254:
case 1191:
case 1970:
case 1828:
case 2941:
case 2897:
case 1625:
case 334:
case 1705:
case 4081:
case 3887:
case 1323:
case 737:
case 3452:
case 2152:
case 1613:
case 1541:
case 349:
case 219:
case 576:
case 1144:
case 562:
case 2787:
case 399:
case 1679:
case 531:
case 1765:
case 976:
case 1022:
case 2441:
case 659:
case 1358:
case 3212:
case 4070:
case 367:
case 858:
case 573:
case 158:
case 1352:
case 3686:
case 2263:
case 1028:
case 71:
case 2674:
case 3449:
case 2696:
case 2149:
case 3087:
case 144:
case 3984:
case 3591:
case 3415:
case 2775:
case 2198:
case 3154:
case 3498:
case 3829:
case 1942:
case 3366:
case 1650:
case 1093:
case 4036:
case 2285:
case 2542:
case 4059:
case 2816:
case 1966:
case 2548:
case 3075:
case 1406:
case 2857:
case 1459:
case 1530:
case 345:
case 722:
case 1664:
case 1948:
case 2482:
case 3160:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744434002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,];
var gg_b = "1744434002/";

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
