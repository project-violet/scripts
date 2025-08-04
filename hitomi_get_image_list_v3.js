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
case 3536:
case 693:
case 3324:
case 216:
case 2881:
case 2115:
case 40:
case 3199:
case 3656:
case 3970:
case 2860:
case 347:
case 3431:
case 1772:
case 1730:
case 3932:
case 890:
case 2182:
case 566:
case 1690:
case 1392:
case 327:
case 3231:
case 356:
case 3273:
case 3613:
case 3108:
case 3515:
case 962:
case 3083:
case 839:
case 1201:
case 2937:
case 877:
case 717:
case 1902:
case 3986:
case 2136:
case 4029:
case 1506:
case 983:
case 3745:
case 106:
case 2038:
case 1015:
case 1583:
case 1971:
case 1430:
case 193:
case 1472:
case 3731:
case 377:
case 3346:
case 3691:
case 1310:
case 1272:
case 339:
case 1230:
case 3328:
case 4086:
case 3929:
case 2259:
case 2459:
case 1955:
case 3445:
case 1966:
case 39:
case 4070:
case 1562:
case 3393:
case 861:
case 390:
case 1063:
case 808:
case 847:
case 3519:
case 1317:
case 2901:
case 1237:
case 417:
case 2595:
case 888:
case 1863:
case 1836:
case 95:
case 2766:
case 4025:
case 1264:
case 3806:
case 2628:
case 700:
case 2119:
case 2771:
case 269:
case 4077:
case 3488:
case 3669:
case 519:
case 2455:
case 3249:
case 3449:
case 3977:
case 1697:
case 1644:
case 1578:
case 2233:
case 2313:
case 2433:
case 243:
case 2930:
case 1019:
case 3180:
case 2365:
case 753:
case 2271:
case 2611:
case 480:
case 3707:
case 2624:
case 3161:
case 2834:
case 686:
case 2576:
case 3925:
case 3074:
case 3484:
case 150:
case 49:
case 3070:
case 800:
case 3795:
case 490:
case 579:
case 80:
case 3375:
case 2830:
case 3962:
case 563:
case 2322:
case 3653:
case 582:
case 2064:
case 3555:
case 3566:
case 696:
case 2549:
case 3184:
case 603:
case 4006:
case 2166:
case 2155:
case 3616:
case 3086:
case 3476:
case 365:
case 2037:
case 3983:
case 1503:
case 3877:
case 1164:
case 65:
case 3906:
case 1281:
case 4083:
case 2679:
case 2219:
case 853:
case 3502:
case 1982:
case 2419:
case 1071:
case 456:
case 2068:
case 1260:
case 3495:
case 529:
case 1460:
case 196:
case 3295:
case 1963:
case 2102:
case 2507:
case 4062:
case 2801:
case 427:
case 1652:
case 1350:
case 1936:
case 2159:
case 3204:
case 2341:
case 1855:
case 514:
case 3145:
case 1467:
case 2763:
case 817:
case 3787:
case 38:
case 1698:
case 2715:
case 79:
case 1871:
case 1738:
case 3639:
case 3379:
case 2500:
case 1172:
case 1357:
case 1234:
case 1321:
case 1802:
case 3408:
case 2837:
case 3208:
case 1101:
case 3287:
case 708:
case 2263:
case 761:
case 3487:
case 2316:
case 2236:
case 2651:
case 3704:
case 2627:
case 2864:
case 1734:
case 1647:
case 3622:
case 3320:
case 683:
case 756:
case 662:
case 2415:
case 1238:
case 2215:
case 3832:
case 2675:
case 88:
case 3299:
case 3131:
case 2030:
case 1919:
case 2482:
case 3266:
case 3255:
case 525:
case 987:
case 1945:
case 545:
case 3466:
case 1804:
case 670:
case 873:
case 1900:
case 713:
case 2883:
case 476:
case 869:
case 3867:
case 3561:
case 3313:
case 2707:
case 331:
case 1390:
case 3611:
case 1692:
case 3365:
case 3471:
case 1732:
case 536:
case 3356:
case 2862:
case 3081:
case 1095:
case 1203:
case 3060:
case 1178:
case 2161:
case 288:
case 2788:
case 1229:
case 464:
case 2484:
case 2925:
case 1808:
case 170:
case 426:
case 843:
case 2519:
case 823:
case 446:
case 1581:
case 1973:
case 559:
case 3693:
case 4030:
case 4072:
case 64:
case 3755:
case 640:
case 1286:
case 620:
case 1486:
case 2806:
case 1729:
case 91:
case 2784:
case 1232:
case 1610:
case 3391:
case 2207:
case 3771:
case 3838:
case 373:
case 1080:
case 2669:
case 2288:
case 2488:
case 1567:
case 2903:
case 239:
case 1099:
case 3968:
case 2731:
case 118:
case 2006:
case 764:
case 3504:
case 1225:
case 1534:
case 1949:
case 3459:
case 3259:
case 978:
case 2104:
case 2245:
case 1348:
case 1876:
case 1008:
case 1183:
case 816:
case 29:
case 1617:
case 1654:
case 290:
case 1477:
case 2200:
case 1087:
case 3034:
case 1725:
case 618:
case 2536:
case 511:
case 3508:
case 3115:
case 3881:
case 2062:
case 316:
case 227:
case 1389:
case 261:
case 208:
case 2665:
case 2431:
case 3860:
case 2970:
case 2199:
case 3587:
case 2083:
case 2515:
case 2473:
case 3067:
case 1538:
case 4068:
case 2273:
case 3163:
case 1397:
case 3599:
case 2187:
case 2582:
case 928:
case 3136:
case 2986:
case 2745:
case 1658:
case 3837:
case 469:
case 1783:
case 2408:
case 2487:
case 357:
case 3531:
case 3263:
case 2704:
case 335:
case 3436:
case 3651:
case 3236:
case 2886:
case 1045:
case 3627:
case 1206:
case 2974:
case 1406:
case 2025:
case 2320:
case 2622:
case 3335:
case 346:
case 2870:
case 2832:
case 521:
case 3215:
case 3573:
case 541:
case 1807:
case 326:
case 1888:
case 1501:
case 2299:
case 3341:
case 3736:
case 1650:
case 2404:
case 3159:
case 2145:
case 1849:
case 1283:
case 2708:
case 1483:
case 28:
case 4060:
case 1530:
case 1572:
case 2100:
case 1961:
case 376:
case 2978:
case 1462:
case 1262:
case 3715:
case 571:
case 2799:
case 1031:
case 2803:
case 148:
case 3782:
case 3500:
case 2639:
case 857:
case 1125:
case 2559:
case 1706:
case 835:
case 1884:
case 3643:
case 2029:
case 2343:
case 1621:
case 920:
case 1614:
case 1274:
case 2906:
case 1474:
case 1084:
case 1999:
case 4067:
case 1537:
case 2502:
case 3219:
case 3679:
case 2188:
case 2761:
case 3938:
case 2003:
case 187:
case 1398:
case 769:
case 1309:
case 3102:
case 773:
case 1873:
case 20:
case 3801:
case 61:
case 4034:
case 1323:
case 1186:
case 2641:
case 234:
case 2480:
case 298:
case 3719:
case 2032:
case 313:
case 2070:
case 1007:
case 1103:
case 3872:
case 3830:
case 2261:
case 1278:
case 2795:
case 632:
case 97:
case 2825:
case 2653:
case 3322:
case 1347:
case 1394:
case 2184:
case 970:
case 3155:
case 515:
case 2327:
case 265:
case 1904:
case 1845:
case 997:
case 2149:
case 2616:
case 3037:
case 723:
case 11:
case 3967:
case 3133:
case 2983:
case 3663:
case 1590:
case 2054:
case 2017:
case 351:
case 2687:
case 695:
case 3565:
case 449:
case 3227:
case 702:
case 1158:
case 3796:
case 3376:
case 3848:
case 1941:
case 3451:
case 3743:
case 2921:
case 2422:
case 2222:
case 601:
case 844:
case 1606:
case 2957:
case 211:
case 4005:
case 2165:
case 2699:
case 2156:
case 527:
case 3615:
case 366:
case 508:
case 985:
case 3513:
case 2058:
case 455:
case 324:
case 1916:
case 3496:
case 344:
case 1742:
case 1450:
case 2604:
case 3591:
case 590:
case 1683:
case 3905:
case 479:
case 866:
case 1585:
case 437:
case 1013:
case 3090:
case 2439:
case 101:
case 2191:
case 1056:
case 2319:
case 539:
case 3889:
case 2918:
case 577:
case 1935:
case 1662:
case 1953:
case 3443:
case 4052:
case 3243:
case 874:
case 1674:
case 1257:
case 960:
case 1334:
case 3994:
case 1922:
case 1221:
case 4023:
case 96:
case 181:
case 3890:
case 2593:
case 1856:
case 319:
case 2092:
case 1110:
case 3279:
case 3569:
case 3193:
case 1367:
case 3097:
case 3044:
case 259:
case 1813:
case 2716:
case 2241:
case 2441:
case 3304:
case 275:
case 2858:
case 1678:
case 2661:
case 3124:
case 1338:
case 1597:
case 2010:
case 3111:
case 3779:
case 1544:
case 905:
case 588:
case 1721:
case 414:
case 225:
case 755:
case 2416:
case 245:
case 2216:
case 782:
case 2676:
case 3923:
case 2336:
case 4094:
case 2817:
case 3308:
case 2854:
case 2524:
case 763:
case 1589:
case 3909:
case 779:
case 2649:
case 2116:
case 3655:
case 565:
case 3823:
case 3553:
case 981:
case 3793:
case 3633:
case 3373:
case 605:
case 829:
case 1301:
case 598:
case 2769:
case 1505:
case 3671:
case 337:
case 3912:
case 2057:
case 1540:
case 691:
case 444:
case 1629:
case 2021:
case 2153:
case 3005:
case 879:
case 466:
case 719:
case 50:
case 837:
case 2579:
case 1686:
case 882:
case 105:
case 1016:
case 855:
case 660:
case 2842:
case 534:
case 1114:
case 3428:
case 3847:
case 1053:
case 1121:
case 3724:
case 2269:
case 2688:
case 2018:
case 2469:
case 451:
case 1210:
case 1956:
case 3446:
case 329:
case 1330:
case 349:
case 3179:
case 1410:
case 2291:
case 3307:
case 271:
case 1364:
case 3143:
case 3094:
case 724:
case 1523:
case 1853:
case 185:
case 3840:
case 2645:
case 2543:
case 314:
case 1677:
case 1254:
case 1337:
case 3805:
case 580:
case 3539:
case 2302:
case 3944:
case 1417:
case 1454:
case 58:
case 2527:
case 302:
case 2122:
case 2551:
case 814:
case 774:
case 3384:
case 2821:
case 2371:
case 233:
case 995:
case 221:
case 1368:
case 241:
case 2256:
case 3175:
case 517:
case 1754:
case 1717:
case 2413:
case 685:
case 3926:
case 6:
case 2673:
case 4089:
case 2366:
case 3522:
case 2050:
case 968:
case 1142:
case 3023:
case 1547:
case 3151:
case 2124:
case 3235:
case 523:
case 3315:
case 3680:
case 109:
case 2111:
case 3010:
case 1189:
case 715:
case 1028:
case 3253:
case 4042:
case 2220:
case 292:
case 3336:
case 194:
case 1752:
case 3950:
case 1240:
case 3416:
case 325:
case 3524:
case 471:
case 2308:
case 3817:
case 1405:
case 1197:
case 3511:
case 3363:
case 1592:
case 825:
case 2994:
case 2128:
case 609:
case 3753:
case 573:
case 1362:
case 3593:
case 1660:
case 1975:
case 984:
case 569:
case 2279:
case 2619:
case 1681:
case 2089:
case 1011:
case 2479:
case 219:
case 421:
case 2193:
case 433:
case 1705:
case 836:
case 441:
case 1510:
case 375:
case 2304:
case 3942:
case 1951:
case 1252:
case 3716:
case 1148:
case 2727:
case 3604:
case 2496:
case 999:
case 754:
case 4021:
case 771:
case 1409:
case 811:
case 1209:
case 1667:
case 2905:
case 1824:
case 904:
case 3319:
case 3239:
case 3439:
case 1112:
case 2090:
case 1185:
case 1298:
case 3892:
case 3918:
case 2395:
case 415:
case 2443:
case 689:
case 1794:
case 1634:
case 1374:
case 2565:
case 3687:
case 741:
case 767:
case 3017:
case 4018:
case 3054:
case 3113:
case 2427:
case 2451:
case 2636:
case 274:
case 2848:
case 2952:
case 2251:
case 2796:
case 3422:
case 1828:
case 3921:
case 1447:
case 3957:
case 1247:
case 3156:
case 2380:
case 3165:
case 2682:
case 516:
case 1979:
case 2012:
case 311:
case 2513:
case 1638:
case 266:
case 1378:
case 622:
case 642:
case 2615:
case 2275:
case 189:
case 3122:
case 3527:
case 3857:
case 1928:
case 1194:
case 1542:
case 1147:
case 3910:
case 341:
case 3456:
case 3631:
case 1946:
case 367:
case 546:
case 459:
case 612:
case 2098:
case 1785:
case 1601:
case 130:
case 3673:
case 942:
case 3213:
case 4092:
case 1993:
case 13:
case 3575:
case 922:
case 557:
case 3413:
case 2127:
case 2522:
case 3366:
case 2948:
case 3355:
case 535:
case 2349:
case 1096:
case 2151:
case 2023:
case 104:
case 3050:
case 3818:
case 371:
case 2307:
case 1672:
case 3756:
case 1212:
case 2388:
case 1924:
case 425:
case 112:
case 699:
case 3596:
case 2047:
case 354:
case 989:
case 1027:
case 564:
case 63:
case 2840:
case 630:
case 1123:
case 1051:
case 3302:
case 833:
case 821:
case 867:
case 2997:
case 841:
case 1109:
case 436:
case 4010:
case 972:
case 3713:
case 2005:
case 411:
case 2493:
case 1226:
case 684:
case 2602:
case 3579:
case 1797:
case 3359:
case 909:
case 1152:
case 2040:
case 3141:
case 1557:
case 1521:
case 2345:
case 1851:
case 815:
case 1325:
case 2541:
case 1664:
case 1020:
case 2894:
case 2847:
case 3469:
case 4017:
case 3018:
case 3688:
case 2724:
case 1789:
case 3607:
case 2179:
case 2990:
case 249:
case 994:
case 1875:
case 3649:
case 1140:
case 315:
case 938:
case 1896:
case 2553:
case 3850:
case 2666:
case 1748:
case 2655:
case 2373:
case 1518:
case 2633:
case 2793:
case 3917:
case 3954:
case 1297:
case 2224:
case 2424:
case 2985:
case 2898:
case 279:
case 1079:
case 1489:
case 2331:
case 237:
case 2746:
case 263:
case 1843:
case 2516:
case 745:
case 3684:
case 2728:
case 255:
case 725:
case 3014:
case 3057:
case 2120:
case 3153:
case 1680:
case 3189:
case 1010:
case 2544:
case 309:
case 2192:
case 2218:
case 1661:
case 2338:
case 1315:
case 2418:
case 1235:
case 3943:
case 1453:
case 784:
case 3028:
case 3306:
case 1950:
case 145:
case 3752:
case 3440:
case 1676:
case 1336:
case 412:
case 3996:
case 659:
case 1416:
case 838:
case 3592:
case 3144:
case 2589:
case 52:
case 3205:
case 1854:
case 2221:
case 2922:
case 1753:
case 2421:
case 2214:
case 2257:
case 2334:
case 894:
case 43:
case 915:
case 338:
case 3011:
case 2110:
case 3975:
case 3660:
case 1735:
case 1593:
case 3362:
case 430:
case 2718:
case 281:
case 1169:
case 2813:
case 645:
case 625:
case 159:
case 3705:
case 3383:
case 3126:
case 3148:
case 3927:
case 1441:
case 1942:
case 175:
case 4043:
case 3252:
case 1241:
case 967:
case 3423:
case 933:
case 1604:
case 2250:
case 2916:
case 3223:
case 1058:
case 712:
case 872:
case 889:
case 2013:
case 3409:
case 2154:
case 518:
case 2360:
case 3185:
case 3498:
case 1239:
case 2381:
case 1319:
case 268:
case 201:
case 484:
case 3374:
case 3634:
case 1722:
case 3920:
case 1113:
case 1608:
case 1687:
case 3709:
case 3893:
case 799:
case 954:
case 2590:
case 1054:
case 2442:
case 3723:
case 4020:
case 971:
case 842:
case 2158:
case 822:
case 3447:
case 3494:
case 3247:
case 2606:
case 3558:
case 1222:
case 372:
case 3378:
case 3846:
case 3638:
case 389:
case 73:
case 1156:
case 1699:
case 1739:
case 3928:
case 3194:
case 1527:
case 1814:
case 3879:
case 2969:
case 3303:
case 3785:
case 1791:
case 141:
case 1910:
case 399:
case 3490:
case 1371:
case 133:
case 3290:
case 654:
case 121:
case 1456:
case 4011:
case 1333:
case 1575:
case 3993:
case 438:
case 330:
case 1050:
case 2258:
case 2841:
case 1355:
case 528:
case 3285:
case 83:
case 3198:
case 3075:
case 3485:
case 1992:
case 3790:
case 3412:
case 1139:
case 1818:
case 171:
case 1491:
case 3370:
case 2509:
case 1765:
case 4093:
case 830:
case 2625:
case 2853:
case 3820:
case 667:
case 2523:
case 2022:
case 494:
case 3051:
case 3123:
case 3386:
case 2150:
case 2816:
case 722:
case 285:
case 742:
case 1645:
case 1713:
case 2417:
case 1302:
case 1600:
case 2677:
case 899:
case 3109:
case 489:
case 3797:
case 1579:
case 3744:
case 3377:
case 615:
case 3637:
case 2913:
case 3248:
case 1842:
case 936:
case 3851:
case 1359:
case 3827:
case 2686:
case 3557:
case 3514:
case 1141:
case 205:
case 3020:
case 2053:
case 2121:
case 3325:
case 2114:
case 925:
case 291:
case 1607:
case 2956:
case 2965:
case 3875:
case 1469:
case 1688:
case 2035:
case 3896:
case 442:
case 1649:
case 115:
case 422:
case 2041:
case 1954:
case 3444:
case 1917:
case 2301:
case 3497:
case 709:
case 3105:
case 3726:
case 510:
case 26:
case 2292:
case 975:
case 1769:
case 2118:
case 2839:
case 2603:
case 1021:
case 1153:
case 1684:
case 959:
case 3843:
case 1014:
case 491:
case 1826:
case 624:
case 151:
case 4035:
case 1565:
case 2709:
case 1556:
case 1251:
case 2723:
case 3941:
case 1636:
case 174:
case 1376:
case 1952:
case 3606:
case 2247:
case 2294:
case 2494:
case 2828:
case 405:
case 2558:
case 1615:
case 289:
case 2798:
case 1513:
case 1361:
case 1475:
case 2846:
case 166:
case 1085:
case 2190:
case 3869:
case 1012:
case 3091:
case 914:
case 2223:
case 1496:
case 3916:
case 651:
case 3742:
case 144:
case 1940:
case 2423:
case 1751:
case 1727:
case 1905:
case 3683:
case 902:
case 2667:
case 3585:
case 3154:
case 2209:
case 2811:
case 1889:
case 460:
case 593:
case 3662:
case 3935:
case 1775:
case 301:
case 2112:
case 2517:
case 2554:
case 506:
case 368:
case 3381:
case 2634:
case 2374:
case 2747:
case 1443:
case 785:
case 242:
case 666:
case 7:
case 222:
case 1243:
case 3421:
case 3548:
case 1128:
case 3457:
case 1947:
case 3414:
case 1994:
case 1089:
case 2011:
case 1619:
case 1146:
case 2681:
case 3718:
case 692:
case 381:
case 3526:
case 3856:
case 2975:
case 2024:
case 586:
case 1097:
case 791:
case 955:
case 3813:
case 2383:
case 2126:
case 1569:
case 4039:
case 2927:
case 2740:
case 937:
case 3192:
case 1111:
case 1779:
case 3939:
case 3597:
case 760:
case 1812:
case 1998:
case 1124:
case 3338:
case 3678:
case 3218:
case 1420:
case 2943:
case 2306:
case 619:
case 4:
case 3714:
case 485:
case 1048:
case 2996:
case 1923:
case 2440:
case 3589:
case 2144:
case 1387:
case 1909:
case 1308:
case 881:
case 2205:
case 2093:
case 1666:
case 2748:
case 2896:
case 3041:
case 2140:
case 919:
case 2244:
case 2297:
case 891:
case 3301:
case 1809:
case 1793:
case 401:
case 1373:
case 1633:
case 2105:
case 1331:
case 137:
case 2668:
case 1746:
case 163:
case 1671:
case 3292:
case 2079:
case 3710:
case 1985:
case 3505:
case 3118:
case 3629:
case 3540:
case 805:
case 1516:
case 1728:
case 2377:
case 1602:
case 2744:
case 1300:
case 2797:
case 3913:
case 2226:
case 2426:
case 1293:
case 992:
case 1345:
case 2851:
case 2521:
case 305:
case 2514:
case 2827:
case 3016:
case 1894:
case 3121:
case 3053:
case 2664:
case 2020:
case 3114:
case 3330:
case 596:
case 1446:
case 3670:
case 3956:
case 3210:
case 1246:
case 2789:
case 391:
case 3410:
case 1179:
case 1711:
case 3792:
case 503:
case 86:
case 2485:
case 2198:
case 602:
case 974:
case 2332:
case 2672:
case 2212:
case 2412:
case 1307:
case 2790:
case 1047:
case 3523:
case 1094:
case 2820:
case 3853:
case 951:
case 3625:
case 1143:
case 212:
case 3150:
case 114:
case 966:
case 1840:
case 3758:
case 352:
case 2027:
case 701:
case 3677:
case 3217:
case 3454:
case 1805:
case 2542:
case 2928:
case 852:
case 885:
case 2043:
case 2785:
case 2303:
case 1098:
case 2946:
case 2290:
case 299:
case 2490:
case 2712:
case 2993:
case 1009:
case 2601:
case 3717:
case 230:
case 481:
case 3754:
case 1151:
case 3547:
case 204:
case 3594:
case 1349:
case 3458:
case 1852:
case 1127:
case 3258:
case 1522:
case 2959:
case 3786:
case 1266:
case 3804:
case 2358:
case 1466:
case 3945:
case 32:
case 428:
case 1233:
case 4031:
case 1313:
case 407:
case 2697:
case 897:
case 3900:
case 340:
case 1867:
case 3203:
case 1624:
case 1060:
case 3692:
case 1271:
case 123:
case 3390:
case 2689:
case 1972:
case 1356:
case 3770:
case 2468:
case 143:
case 1365:
case 669:
case 1595:
case 787:
case 2863:
case 37:
case 3560:
case 478:
case 3887:
case 1901:
case 2237:
case 1202:
case 3076:
case 3486:
case 1755:
case 2836:
case 732:
case 623:
case 3174:
case 643:
case 3729:
case 84:
case 538:
case 3385:
case 3703:
case 3061:
case 82:
case 3270:
case 3312:
case 3610:
case 2815:
case 169:
case 1838:
case 3432:
case 1771:
case 3470:
case 397:
case 3931:
case 2230:
case 318:
case 2082:
case 2971:
case 2430:
case 293:
case 1968:
case 41:
case 410:
case 2685:
case 206:
case 1038:
case 3567:
case 3880:
case 2134:
case 522:
case 3225:
case 946:
case 2955:
case 3348:
case 1459:
case 3949:
case 3534:
case 3277:
case 3617:
case 2701:
case 3087:
case 3477:
case 2933:
case 3326:
case 3008:
case 4007:
case 2167:
case 2562:
case 1964:
case 1034:
case 2690:
case 3907:
case 1860:
case 2772:
case 2730:
case 1182:
case 964:
case 1115:
case 1508:
case 3988:
case 2819:
case 2138:
case 1881:
case 3397:
case 778:
case 818:
case 2902:
case 3344:
case 1163:
case 1937:
case 3538:
case 4084:
case 976:
case 2506:
case 1136:
case 3004:
case 828:
case 1263:
case 4061:
case 53:
case 2101:
case 848:
case 3000:
case 1837:
case 497:
case 2767:
case 2802:
case 3783:
case 3305:
case 530:
case 504:
case 1627:
case 3340:
case 1316:
case 2059:
case 4076:
case 676:
case 1353:
case 3206:
case 1864:
case 2734:
case 47:
case 1981:
case 1072:
case 2919:
case 3888:
case 378:
case 1282:
case 1215:
case 1675:
case 3762:
case 3807:
case 126:
case 470:
case 2238:
case 916:
case 3650:
case 164:
case 3976:
case 2623:
case 1736:
case 1341:
case 2855:
case 2525:
case 3572:
case 3530:
case 3177:
case 1763:
case 718:
case 878:
case 1001:
case 2467:
case 3483:
case 2267:
case 3073:
case 1782:
case 3980:
case 2130:
case 307:
case 2172:
case 44:
case 328:
case 1500:
case 3462:
case 176:
case 3961:
case 2871:
case 2738:
case 2698:
case 1545:
case 2321:
case 262:
case 3706:
case 3274:
case 3657:
case 3474:
case 4004:
case 3621:
case 332:
case 296:
case 1938:
case 77:
case 2915:
case 2260:
case 1419:
case 2071:
case 1068:
case 3170:
case 1339:
case 2281:
case 1801:
case 2137:
case 3309:
case 3873:
case 1102:
case 797:
case 1507:
case 2652:
case 943:
case 2936:
case 3186:
case 931:
case 3049:
case 923:
case 2055:
case 3564:
case 3088:
case 1872:
case 3103:
case 74:
case 2168:
case 1719:
case 3394:
case 3774:
case 1549:
case 1934:
case 3129:
case 2640:
case 2342:
case 3904:
case 969:
case 832:
case 1166:
case 2859:
case 418:
case 31:
case 2605:
case 310:
case 1874:
case 1536:
case 4055:
case 677:
case 108:
case 1932:
case 1665:
case 147:
case 1656:
case 1199:
case 2389:
case 3392:
case 3690:
case 1311:
case 1062:
case 3138:
case 3819:
case 2988:
case 3201:
case 2777:
case 1582:
case 1700:
case 2344:
case 3902:
case 1613:
case 2538:
case 403:
case 806:
case 1108:
case 69:
case 1745:
case 1986:
case 3506:
case 2099:
case 1731:
case 393:
case 3971:
case 218:
case 3082:
case 3230:
case 3272:
case 1691:
case 2880:
case 2162:
case 306:
case 1903:
case 3685:
case 3015:
case 608:
case 2425:
case 1006:
case 1328:
case 2984:
case 661:
case 656:
case 2876:
case 762:
case 595:
case 3955:
case 3036:
case 358:
case 2477:
case 1200:
case 45:
case 3701:
case 3063:
case 1400:
case 190:
case 3562:
case 1773:
case 450:
case 2560:
case 27:
case 3863:
case 3626:
case 1519:
case 3437:
case 2581:
case 2808:
case 270:
case 2486:
case 998:
case 2076:
case 3574:
case 1749:
case 3836:
case 953:
case 1784:
case 3464:
case 2061:
case 2703:
case 3160:
case 1078:
case 2385:
case 1195:
case 3181:
case 2470:
case 386:
case 2080:
case 2232:
case 2610:
case 2312:
case 1176:
case 2786:
case 462:
case 1449:
case 2945:
case 3358:
case 75:
case 483:
case 3737:
case 240:
case 3644:
case 1883:
case 3697:
case 2403:
case 2178:
case 2203:
case 1180:
case 934:
case 2770:
case 3468:
case 1862:
case 3689:
case 2390:
case 1484:
case 90:
case 2429:
case 3764:
case 1795:
case 458:
case 3760:
case 2478:
case 2103:
case 1962:
case 1461:
case 2088:
case 35:
case 2007:
case 350:
case 1480:
case 198:
case 1070:
case 1184:
case 2774:
case 1825:
case 1653:
case 4036:
case 1566:
case 2129:
case 1555:
case 600:
case 165:
case 1086:
case 3859:
case 3529:
case 60:
case 896:
case 1983:
case 2800:
case 1877:
case 4082:
case 3002:
case 2568:
case 1906:
case 2614:
case 3586:
case 2657:
case 2274:
case 232:
case 3164:
case 1029:
case 2398:
case 1761:
case 1003:
case 2831:
case 2778:
case 396:
case 287:
case 1502:
case 1107:
case 3481:
case 2999:
case 2537:
case 303:
case 3982:
case 1780:
case 2908:
case 3033:
case 100:
case 3570:
case 665:
case 653:
case 2186:
case 3350:
case 3652:
case 2564:
case 3055:
case 5:
case 3855:
case 3623:
case 585:
case 3866:
case 908:
case 2650:
case 1100:
case 18:
case 2530:
case 3609:
case 1787:
case 2073:
case 180:
case 706:
case 4019:
case 1639:
case 1799:
case 3172:
case 248:
case 2262:
case 3738:
case 3321:
case 1559:
case 2125:
case 3434:
case 3357:
case 1829:
case 1287:
case 1077:
case 2305:
case 1173:
case 1408:
case 3802:
case 883:
case 1208:
case 2045:
case 939:
case 1704:
case 68:
case 3734:
case 990:
case 1025:
case 2406:
case 2206:
case 3647:
case 2501:
case 1299:
case 278:
case 3919:
case 117:
case 1131:
case 3238:
case 2807:
case 2762:
case 1870:
case 3438:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754298001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,];
var gg_b = "1754298001/";

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
