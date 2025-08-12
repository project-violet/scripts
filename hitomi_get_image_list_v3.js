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
case 97:
case 584:
case 3954:
case 3615:
case 2855:
case 2265:
case 3397:
case 1832:
case 657:
case 3230:
case 987:
case 2260:
case 1030:
case 1877:
case 3436:
case 35:
case 2466:
case 570:
case 190:
case 1649:
case 227:
case 3358:
case 3412:
case 379:
case 4087:
case 3109:
case 258:
case 3363:
case 292:
case 3411:
case 2909:
case 1279:
case 312:
case 3447:
case 3389:
case 2642:
case 1344:
case 3578:
case 1224:
case 2326:
case 2582:
case 1780:
case 1059:
case 491:
case 545:
case 3259:
case 2839:
case 2445:
case 2237:
case 3857:
case 2617:
case 3684:
case 906:
case 3121:
case 2641:
case 2395:
case 3898:
case 2773:
case 2608:
case 2921:
case 801:
case 2581:
case 3791:
case 700:
case 1088:
case 2505:
case 2493:
case 742:
case 3325:
case 3173:
case 3471:
case 1774:
case 3320:
case 3446:
case 1639:
case 2973:
case 3003:
case 1203:
case 2459:
case 583:
case 1045:
case 825:
case 886:
case 3437:
case 2192:
case 1808:
case 3472:
case 263:
case 651:
case 1520:
case 3670:
case 1748:
case 1817:
case 1985:
case 145:
case 471:
case 3396:
case 1980:
case 2488:
case 1876:
case 434:
case 1187:
case 3465:
case 2435:
case 838:
case 399:
case 736:
case 1452:
case 53:
case 64:
case 272:
case 1938:
case 1318:
case 2236:
case 1066:
case 1334:
case 1914:
case 711:
case 219:
case 2709:
case 930:
case 1168:
case 810:
case 184:
case 3754:
case 3534:
case 2631:
case 2211:
case 1199:
case 2247:
case 3770:
case 1648:
case 1567:
case 2622:
case 956:
case 625:
case 2081:
case 3393:
case 1873:
case 2425:
case 2420:
case 851:
case 3443:
case 2908:
case 3117:
case 1400:
case 3078:
case 1593:
case 1405:
case 3141:
case 2885:
case 3367:
case 2917:
case 2337:
case 3984:
case 1559:
case 2290:
case 1602:
case 1674:
case 1206:
case 2880:
case 1739:
case 4083:
case 2295:
case 2082:
case 1464:
case 2115:
case 3868:
case 3258:
case 2838:
case 208:
case 3654:
case 2814:
case 3915:
case 3335:
case 3297:
case 2360:
case 909:
case 1629:
case 607:
case 84:
case 3899:
case 2716:
case 294:
case 638:
case 2777:
case 3762:
case 1089:
case 2732:
case 548:
case 12:
case 30:
case 1063:
case 3263:
case 262:
case 2336:
case 1955:
case 3366:
case 3034:
case 1614:
case 274:
case 2829:
case 3007:
case 1207:
case 3962:
case 2932:
case 2312:
case 2497:
case 889:
case 52:
case 3177:
case 3018:
case 3961:
case 560:
case 857:
case 1749:
case 2347:
case 182:
case 2489:
case 96:
case 467:
case 3131:
case 2708:
case 3340:
case 2673:
case 1303:
case 3345:
case 744:
case 3225:
case 1020:
case 2741:
case 3970:
case 1198:
case 3886:
case 1096:
case 313:
case 1157:
case 1821:
case 2323:
case 293:
case 3495:
case 396:
case 3726:
case 925:
case 3943:
case 986:
case 1257:
case 476:
case 2996:
case 1694:
case 1905:
case 2275:
case 4044:
case 1781:
case 3484:
case 3098:
case 2143:
case 2441:
case 1573:
case 780:
case 361:
case 285:
case 323:
case 103:
case 3125:
case 2640:
case 565:
case 3120:
case 3790:
case 4078:
case 2925:
case 3824:
case 3069:
case 1428:
case 2039:
case 3795:
case 3611:
case 89:
case 3231:
case 3568:
case 598:
case 178:
case 609:
case 3216:
case 1387:
case 1016:
case 2666:
case 1449:
case 938:
case 3277:
case 1118:
case 907:
case 3599:
case 1830:
case 3612:
case 51:
case 2852:
case 2789:
case 1134:
case 793:
case 3733:
case 1107:
case 3410:
case 1764:
case 3461:
case 469:
case 104:
case 4018:
case 11:
case 2133:
case 859:
case 755:
case 3189:
case 4007:
case 3933:
case 3313:
case 2963:
case 2416:
case 1513:
case 87:
case 2049:
case 152:
case 887:
case 2477:
case 1450:
case 2432:
case 3462:
case 198:
case 3727:
case 3665:
case 3056:
case 1509:
case 2997:
case 2210:
case 3321:
case 3470:
case 806:
case 165:
case 1106:
case 2195:
case 737:
case 2667:
case 1522:
case 901:
case 2725:
case 1076:
case 1041:
case 2894:
case 346:
case 3743:
case 2574:
case 3586:
case 3322:
case 1981:
case 1840:
case 3242:
case 3671:
case 1845:
case 3646:
case 1521:
case 413:
case 2111:
case 45:
case 2735:
case 2550:
case 957:
case 3765:
case 687:
case 2555:
case 1516:
case 3760:
case 1889:
case 67:
case 242:
case 2147:
case 3911:
case 2361:
case 377:
case 3053:
case 4079:
case 3166:
case 3454:
case 229:
case 412:
case 1858:
case 1429:
case 3087:
case 2966:
case 479:
case 3936:
case 3316:
case 928:
case 989:
case 3912:
case 3332:
case 2362:
case 3878:
case 2793:
case 3583:
case 1402:
case 4024:
case 772:
case 3771:
case 236:
case 935:
case 3569:
case 2539:
case 1357:
case 2292:
case 2882:
case 2759:
case 2696:
case 2080:
case 1605:
case 719:
case 2123:
case 2375:
case 3737:
case 3772:
case 3:
case 3140:
case 2620:
case 3273:
case 1448:
case 153:
case 175:
case 2422:
case 2788:
case 3598:
case 2800:
case 4003:
case 3972:
case 2074:
case 3695:
case 1896:
case 3308:
case 1021:
case 2172:
case 2137:
case 3492:
case 575:
case 4019:
case 727:
case 1542:
case 2993:
case 1124:
case 3342:
case 3723:
case 3159:
case 758:
case 1576:
case 1541:
case 1517:
case 2959:
case 2171:
case 1820:
case 1179:
case 447:
case 1013:
case 2663:
case 3633:
case 322:
case 2549:
case 3209:
case 540:
case 3736:
case 630:
case 334:
case 3712:
case 2864:
case 1952:
case 3807:
case 2930:
case 3960:
case 69:
case 2029:
case 705:
case 3135:
case 200:
case 1414:
case 3818:
case 2658:
case 3747:
case 809:
case 2160:
case 2364:
case 3066:
case 2987:
case 1856:
case 2036:
case 147:
case 3168:
case 402:
case 1662:
case 2012:
case 3650:
case 2810:
case 3452:
case 827:
case 3938:
case 3318:
case 674:
case 370:
case 1661:
case 2011:
case 1518:
case 2479:
case 454:
case 858:
case 2953:
case 680:
case 1754:
case 1534:
case 3153:
case 864:
case 3842:
case 2424:
case 3203:
case 1003:
case 2683:
case 616:
case 3596:
case 1173:
case 1320:
case 3774:
case 3639:
case 495:
case 2669:
case 3520:
case 3817:
case 2884:
case 3980:
case 1675:
case 1437:
case 2698:
case 1472:
case 3808:
case 2023:
case 3701:
case 3224:
case 3948:
case 2595:
case 1506:
case 1792:
case 2590:
case 3780:
case 1293:
case 2381:
case 1122:
case 1578:
case 566:
case 3628:
case 1883:
case 2419:
case 1544:
case 821:
case 225:
case 286:
case 1288:
case 2174:
case 2037:
case 1121:
case 655:
case 4073:
case 2072:
case 3974:
case 673:
case 2382:
case 475:
case 3306:
case 390:
case 3563:
case 872:
case 1358:
case 238:
case 2656:
case 3816:
case 3035:
case 2799:
case 3589:
case 3030:
case 819:
case 2060:
case 2862:
case 1397:
case 2252:
case 3877:
case 939:
case 2787:
case 3714:
case 3597:
case 3279:
case 547:
case 112:
case 1447:
case 3558:
case 440:
case 2251:
case 179:
case 2768:
case 1784:
case 3822:
case 3020:
case 621:
case 3183:
case 465:
case 2969:
case 3939:
case 2523:
case 759:
case 251:
case 3303:
case 873:
case 2983:
case 855:
case 2139:
case 4076:
case 4041:
case 77:
case 3157:
case 2998:
case 3545:
case 3821:
case 787:
case 3482:
case 196:
case 576:
case 1495:
case 2043:
case 1970:
case 2478:
case 1886:
case 1519:
case 2394:
case 3096:
case 2547:
case 706:
case 808:
case 2155:
case 50:
case 3638:
case 1018:
case 837:
case 2668:
case 1177:
case 2854:
case 3234:
case 1366:
case 3955:
case 1962:
case 3950:
case 3207:
case 2027:
case 452:
case 2699:
case 1961:
case 862:
case 619:
case 382:
case 3813:
case 658:
case 2149:
case 1915:
case 2956:
case 1887:
case 2352:
case 3097:
case 3629:
case 2418:
case 874:
case 360:
case 2434:
case 1761:
case 781:
case 289:
case 114:
case 1427:
case 942:
case 2033:
case 4032:
case 1263:
case 3063:
case 1853:
case 4077:
case 3530:
case 2560:
case 3379:
case 3535:
case 2281:
case 2798:
case 1044:
case 176:
case 596:
case 3928:
case 2026:
case 1142:
case 3648:
case 513:
case 3567:
case 2090:
case 1984:
case 3559:
case 718:
case 2892:
case 2686:
case 1367:
case 1108:
case 936:
case 3674:
case 1524:
case 2769:
case 2282:
case 2095:
case 1443:
case 2571:
case 911:
case 893:
case 3400:
case 730:
case 3405:
case 235:
case 1176:
case 1141:
case 1637:
case 3017:
case 2498:
case 1672:
case 3522:
case 1276:
case 1604:
case 1470:
case 1321:
case 4025:
case 885:
case 2978:
case 728:
case 826:
case 2182:
case 281:
case 1475:
case 1803:
case 3042:
case 757:
case 2944:
case 3521:
case 1646:
case 1671:
case 523:
case 2301:
case 561:
case 2228:
case 1926:
case 2624:
case 2348:
case 3700:
case 2181:
case 1819:
case 1322:
case 448:
case 29:
case 844:
case 2718:
case 132:
case 1461:
case 124:
case 2679:
case 2707:
case 2554:
case 31:
case 1727:
case 1665:
case 2836:
case 3256:
case 972:
case 1660:
case 3509:
case 167:
case 2249:
case 352:
case 398:
case 839:
case 1462:
case 3450:
case 3399:
case 1587:
case 688:
case 958:
case 4058:
case 1568:
case 567:
case 3353:
case 287:
case 3134:
case 1553:
case 1410:
case 3107:
case 3368:
case 532:
case 2934:
case 2314:
case 3964:
case 3016:
case 3449:
case 3118:
case 1277:
case 1232:
case 2062:
case 2250:
case 1484:
case 2100:
case 2591:
case 1098:
case 2744:
case 2105:
case 206:
case 161:
case 1196:
case 2070:
case 905:
case 1726:
case 2385:
case 1057:
case 3694:
case 2804:
case 2075:
case 1790:
case 2592:
case 3269:
case 3428:
case 1795:
case 3859:
case 3782:
case 1373:
case 1125:
case 2603:
case 3893:
case 3283:
case 2871:
case 611:
case 1120:
case 1736:
case 1209:
case 134:
case 2827:
case 2979:
case 1556:
case 2453:
case 1712:
case 3951:
case 3013:
case 26:
case 302:
case 3414:
case 220:
case 1135:
case 1711:
case 2487:
case 725:
case 577:
case 197:
case 484:
case 1130:
case 3356:
case 149:
case 2054:
case 1834:
case 470:
case 3952:
case 3438:
case 980:
case 650:
case 1308:
case 836:
case 1492:
case 738:
case 1167:
case 3480:
case 395:
case 811:
case 1690:
case 1317:
case 1937:
case 1972:
case 993:
case 931:
case 2274:
case 3682:
case 3896:
case 2719:
case 3541:
case 2924:
case 3576:
case 2584:
case 3517:
case 3820:
case 3681:
case 1342:
case 2644:
case 3508:
case 1971:
case 1159:
case 2328:
case 171:
case 533:
case 2724:
case 1643:
case 2285:
case 2092:
case 3357:
case 2890:
case 1806:
case 3605:
case 2486:
case 1878:
case 3398:
case 1771:
case 1746:
case 3474:
case 1923:
case 133:
case 2194:
case 3073:
case 256:
case 4067:
case 375:
case 2091:
case 1598:
case 3103:
case 1737:
case 1140:
case 2575:
case 1772:
case 2826:
case 955:
case 4088:
case 1145:
case 685:
case 2919:
case 483:
case 4035:
case 597:
case 177:
case 18:
case 2833:
case 1053:
case 1627:
case 2562:
case 490:
case 3299:
case 549:
case 1765:
case 3889:
case 1760:
case 3516:
case 3664:
case 340:
case 2634:
case 1316:
case 1936:
case 908:
case 817:
case 1377:
case 3897:
case 1912:
case 1332:
case 2607:
case 209:
case 3531:
case 3429:
case 3268:
case 2187:
case 1435:
case 1713:
case 85:
case 1430:
case 2938:
case 172:
case 2066:
case 3036:
case 2655:
case 1709:
case 3364:
case 2334:
case 1677:
case 3138:
case 3810:
case 3012:
case 1212:
case 1632:
case 812:
case 284:
case 1327:
case 2451:
case 420:
case 3011:
case 2199:
case 4054:
case 527:
case 3953:
case 879:
case 753:
case 2774:
case 696:
case 3669:
case 1191:
case 2842:
case 3424:
case 2040:
case 2203:
case 613:
case 1192:
case 3023:
case 121:
case 301:
case 2520:
case 1343:
case 3657:
case 2817:
case 3300:
case 245:
case 1094:
case 740:
case 1722:
case 2841:
case 2876:
case 2093:
case 1271:
case 1246:
case 1326:
case 3595:
case 2780:
case 3101:
case 3037:
case 2067:
case 3986:
case 1237:
case 2902:
case 923:
case 3875:
case 1641:
case 1676:
case 3526:
case 676:
case 1395:
case 1921:
case 1608:
case 2186:
case 2378:
case 768:
case 386:
case 2088:
case 614:
case 1265:
case 3656:
case 310:
case 1855:
case 1052:
case 2832:
case 3252:
case 3060:
case 1850:
case 1466:
case 1154:
case 290:
case 3533:
case 2563:
case 307:
case 127:
case 3129:
case 3753:
case 3861:
case 1051:
case 2831:
case 158:
case 23:
case 572:
case 192:
case 1909:
case 519:
case 409:
case 2279:
case 876:
case 4084:
case 3983:
case 1717:
case 2025:
case 971:
case 666:
case 1776:
case 3444:
case 3969:
case 2198:
case 1243:
case 3957:
case 3478:
case 2685:
case 1000:
case 116:
case 3205:
case 3394:
case 1874:
case 3998:
case 2545:
case 1170:
case 1323:
case 131:
case 193:
case 1916:
case 2614:
case 594:
case 1977:
case 2950:
case 2207:
case 49:
case 997:
case 3155:
case 703:
case 3150:
case 1497:
case 949:
case 2218:
case 1311:
case 647:
case 4015:
case 282:
case 814:
case 3653:
case 3027:
case 1227:
case 3699:
case 3512:
case 430:
case 34:
case 3536:
case 765:
case 389:
case 2464:
case 260:
case 3434:
case 2949:
case 3407:
case 612:
case 1110:
case 108:
case 4061:
case 1365:
case 459:
case 2629:
case 3418:
case 2530:
case 2379:
case 98:
case 194:
case 65:
case 1777:
case 1732:
case 2535:
case 2750:
case 977:
case 3565:
case 22:
case 2063:
case 357:
case 1226:
case 3504:
case 3128:
case 2567:
case 406:
case 155:
case 3798:
case 1425:
case 2873:
case 1942:
case 4070:
case 641:
case 1371:
case 2244:
case 593:
case 2928:
case 3891:
case 1184:
case 896:
case 1496:
case 3783:
case 2593:
case 1917:
case 3892:
case 3686:
case 1885:
case 813:
case 1290:
case 2559:
case 933:
case 1976:
case 2206:
case 1304:
case 1295:
case 3769:
case 3282:
case 3095:
case 1190:
case 861:
case 3457:
case 381:
case 265:
case 2106:
case 1195:
case 760:
case 3823:
case 2386:
case 1667:
case 2017:
case 3084:
case 451:
case 966:
case 2522:
case 2076:
case 2982:
case 1548:
case 3624:
case 1574:
case 2700:
case 3483:
case 72:
case 1693:
case 2840:
case 585:
case 2439:
case 3734:
case 2764:
case 1431:
case 3679:
case 1529:
case 3554:
case 1989:
case 3707:
case 1133:
case 539:
case 39:
case 330:
case 3249:
case 252:
case 544:
case 1049:
case 1958:
case 2450:
case 44:
case 947:
case 298:
case 1432:
case 1215:
case 1635:
case 3015:
case 2652:
case 318:
case 622:
case 1851:
case 832:
case 1538:
case 1758:
case 2353:
case 489:
case 1797:
case 428:
case 824:
case 979:
case 2835:
case 3865:
case 1055:
case 3934:
case 68:
case 2830:
case 1789:
case 3062:
case 1262:
case 387:
case 3456:
case 2134:
case 139:
case 3164:
case 550:
case 37:
case 867:
case 2368:
case 1270:
case 846:
case 748:
case 3837:
case 3385:
case 2867:
case 1996:
case 3380:
case 3100:
case 2781:
case 1476:
case 2888:
case 3105:
case 1640:
case 782:
case 4090:
case 4095:
case 2283:
case 3846:
case 3871:
case 1645:
case 1925:
case 691:
case 1920:
case 2269:
case 1039:
case 2428:
case 2782:
case 3619:
case 543:
case 3592:
case 3706:
case 529:
case 3499:
case 2951:
case 88:
case 36:
case 2013:
case 1549:
case 2009:
case 3151:
case 3510:
case 3827:
case 3453:
case 1689:
case 3515:
case 1864:
case 3054:
case 4011:
case 1254:
case 2356:
case 1697:
case 2952:
case 1930:
case 1310:
case 632:
case 2438:
case 254:
case 542:
case 3487:
case 320:
case 100:
case 1658:
case 268:
case 1967:
case 2286:
case 1384:
case 3202:
case 3843:
case 1172:
case 1528:
case 2485:
case 295:
case 790:
case 2480:
case 1745:
case 2542:
case 1988:
case 2681:
case 73:
case 1993:
case 3644:
case 2508:
case 536:
case 3201:
case 3924:
case 1473:
case 1048:
case 2794:
case 511:
case 1171:
case 4023:
case 2820:
case 8:
case 1793:
case 2398:
case 3194:
case 136:
case 1370:
case 1421:
case 1539:
case 3890:
case 3092:
case 2357:
case 1882:
case 1759:
case 3280:
case 111:
case 2605:
case 1080:
case 2994:
case 4046:
case 1123:
case 1767:
case 2103:
case 1625:
case 3575:
case 976:
case 623:
case 661:
case 3570:
case 2401:
case 3919:
case 486:
case 1940:
case 4072:
case 4037:
case 253:
case 1881:
case 3091:
case 770:
case 1945:
case 2577:
case 0:
case 1550:
case 2532:
case 2516:
case 1730:
case 1413:
case 2889:
case 2752:
case 834:
case 1361:
case 4065:
case 822:
case 3833:
case 2863:
case 4060:
case 1136:
case 2751:
case 129:
case 1038:
case 897:
case 3238:
case 745:
case 2287:
case 1014:
case 2664:
case 240:
case 3634:
case 3779:
case 1362:
case 2897:
case 327:
case 107:
case 1129:
case 2358:
case 138:
case 2615:
case 1065:
case 3855:
case 1799:
case 2954:
case 3260:
case 2397:
case 1252:
case 3052:
case 1787:
case 2411:
case 2079:
case 660:
case 2447:
case 358:
case 1251:
case 4014:
case 3051:
case 1861:
case 279:
case 2109:
case 2363:
case 3913:
case 870:
case 392:
case 1768:
case 1403:
case 1595:
case 2506:
case 1590:
case 2869:
case 2259:
case 3445:
case 734:
case 4085:
case 2293:
case 3642:
case 1071:
case 1046:
case 2122:
case 3271:
case 4080:
case 1419:
case 3773:
case 1102:
case 305:
case 797:
case 2288:
case 3390:
case 3237:
case 3617:
case 2267:
case 1037:
case 2121:
case 1870:
case 3676:
case 3641:
case 1875:
case 3395:
case 3204:
case 241:
case 749:
case 3973:
case 1424:
case 3721:
case 2003:
case 1683:
case 3459:
case 586:
case 4074:
case 1786:
case 2173:
case 1543:
case 2320:
case 2446:
case 1669:
case 2992:
case 1294:
case 4001:
case 2396:
case 3488:
case 2675:
case 3722:
case 3192:
case 3467:
case 2437:
case 3223:
case 101:
case 266:
case 363:
case 321:
case 1364:
case 3709:
case 1036:
case 3236:
case 247:
case 998:
case 1138:
case 952:
case 1012:
case 1810:
case 1114:
case 2465:
case 791:
case 299:
case 890:
case 3631:
case 3211:
case 83:
case 2661:
case 417:
case 507:
case 1479:
case 4029:
case 3247:
case 648:
case 1953:
case 400:
case 510:
case 2507:
case 1999:
case 2534:
case 1281:
case 3081:
case 3942:
case 732:
case 1798:
case 2044:
case 3371:
case 3346:
case 1891:
case 2770:
case 1504:
case 1757:
case 426:
case 1128:
case 724:
case 1572:
case 2775:
case 3622:
case 2984:
case 1090:
case 3290:
case 3917:
case 3337:
case 2524:
case 3976:
case 1282:
case 1769:
case 3082:
case 3880:
case 1571:
case 2078:
case 135:
case 3496:
case 2141:
case 2176:
case 444:
case 1149:
case 2887:
case 848:
case 746:
case 2654:
case 54:
case 3360:
case 2330:
case 1352:
case 63:
case 1418:
case 1434:
case 2761:
case 189:
case 3838:
case 2258:
case 940:
case 308:
case 128:
case 3110:
case 882:
case 2427:
case 214:
case 3233:
case 2853:
case 3613:
case 2263:
case 1033:
case 20:
case 362:
case 1560:
case 2899:
case 3552:
case 690:
case 3732:
case 2289:
case 1547:
case 269:
case 723:
case 761:
case 2116:
case 954:
case 860:
case 2132:
case 3497:
case 1511:
case 2018:
case 1668:
case 2177:
case 557:
case 1264:
case 3064:
case 1687:
case 3336:
case 670:
case 374:
case 968:
case 3977:
case 3458:
case 2962:
case 450:
case 3227:
case 4049:
case 1512:
case 2715:
case 2131:
case 2433:
case 1536:
case 14:
case 2961:
case 3311:
case 3931:
case 3347:
case 528:
case 3489:
case 3594:
case 3717:
case 2784:
case 3776:
case 2220:
case 3708:
case 1523:
case 151:
case 443:
case 3801:
case 535:
case 1983:
case 1139:
case 2345:
case 645:
case 3742:
case 331:
case 393:
case 2495:
case 296:
case 1406:
case 995:
case 2970:
case 1043:
case 3243:
case 3000:
case 2692:
case 1200:
case 2519:
case 3802:
case 213:
case 1394:
case 1205:
case 2296:
case 4028:
case 3874:
case 2484:
case 2098:
case 3143:
case 2623:
case 261:
case 385:
case 223:
case 326:
case 2196:
case 3408:
case 983:
case 1070:
case 2943:
case 653:
case 1837:
case 473:
case 675:
case 3580:
case 2824:
case 3925:
case 1592:
case 2069:
case 1239:
case 3039:
case 2795:
case 1603:
case 4082:
case 581:
case 1871:
case 93:
case 81:
case 3797:
case 2587:
case 518:
case 804:
case 3261:
case 2611:
case 3851:
case 3127:
case 640:
case 3758:
case 494:
case 2415:
case 898:
case 339:
case 796:
case 1456:
case 2553:
case 3763:
case 1918:
case 1314:
case 3055:
case 1865:
case 1255:
case 462:
case 2277:
case 990:
case 3262:
case 1062:
case 3852:
case 3789:
case 2599:
case 3050:
case 1250:
case 587:
case 1811:
case 878:
case 776:
case 350:
case 984:
case 3963:
case 19:
case 2189:
case 1718:
case 1734:
case 3133:
case 1554:
case 3989:
case 1015:
case 2665:
case 3635:
case 3354:
case 2660:
case 602:
case 1010:
case 1812:
case 2158:
case 3049:
case 3432:
case 2462:
case 2217:
case 2637:
case 1498:
case 3725:
case 3720:
case 1374:
case 2241:
case 2276:
case 246:
case 3548:
case 343:
case 2995:
case 2208:
case 3190:
case 1182:
case 2475:
case 1823:
case 4000:
case 70:
case 1944:
case 714:
case 2671:
case 416:
case 1469:
case 1228:
case 1301:
case 2926:
case 2743:
case 1348:
case 3659:
case 2819:
case 3796:
case 431:
case 695:
case 520:
case 3361:
case 2947:
case 2053:
case 427:
case 2627:
case 1562:
case 3550:
case 3111:
case 2765:
case 3555:
case 2760:
case 342:
case 1634:
case 4051:
case 2087:
case 2316:
case 2936:
case 1779:
case 854:
case 678:
case 492:
case 2332:
case 2912:
case 1607:
case 109:
case 329:
case 766:
case 2454:
case 3136:
case 56:
case 388:
case 1561:
case 1618:
case 3038:
case 3421:
case 2643:
case 3370:
case 1285:
case 1092:
case 2569:
case 3539:
case 311:
case 2806:
case 1280:
case 1895:
case 3882:
case 895:
case 1486:
case 2878:
case 3793:
case 2746:
case 2273:
case 3940:
case 1903:
case 3881:
case 3291:
case 1091:
case 2598:
case 3422:
case 2844:
case 3767:
case 2140:
case 1826:
case 2772:
case 3625:
case 2145:
case 1570:
case 603:
case 3620:
case 515:
case 2557:
case 1919:
case 2492:
case 556:
case 3104:
case 3988:
case 3745:
case 3002:
case 3384:
case 2317:
case 2086:
case 3967:
case 1843:
case 2376:
case 2695:
case 2904:
case 115:
case 2626:
case 712:
case 1924:
case 3048:
case 1248:
case 1584:
case 3959:
case 3171:
case 875:
case 2342:
case 2723:
case 2946:
case 2971:
case 1201:
case 779:
case 3001:
case 1151:
case 1510:
case 652:
case 3766:
case 2736:
case 2209:
case 234:
case 1827:
case 698:
case 1515:
case 2556:
case 2712:
case 3689:
case 1453:
case 1499:
case 2213:
case 2633:
case 3549:
case 300:
case 120:
case 61:
case 2747:
case 3658:
case 2130:
case 317:
case 3935:
case 249:
case 741:
case 1054:
case 3930:
case 3310:
case 2960:
case 1229:
case 1468:
case 3029:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754978402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,];
var gg_b = "1754978402/";

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
