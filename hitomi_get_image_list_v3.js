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
case 3159:
case 489:
case 636:
case 2050:
case 3950:
case 2281:
case 3022:
case 2051:
case 3924:
case 1896:
case 1582:
case 896:
case 2024:
case 954:
case 1895:
case 3880:
case 403:
case 3853:
case 4040:
case 566:
case 1537:
case 997:
case 1069:
case 3401:
case 1911:
case 4025:
case 3983:
case 2765:
case 2083:
case 1276:
case 1738:
case 1910:
case 4041:
case 693:
case 3467:
case 1655:
case 3100:
case 3515:
case 3909:
case 2009:
case 3167:
case 254:
case 1419:
case 3516:
case 2673:
case 1974:
case 1232:
case 1644:
case 3017:
case 1008:
case 2418:
case 36:
case 465:
case 2826:
case 1057:
case 1094:
case 2840:
case 35:
case 283:
case 2631:
case 3305:
case 3241:
case 3459:
case 2573:
case 307:
case 3693:
case 2841:
case 3615:
case 3568:
case 653:
case 3701:
case 2814:
case 1877:
case 208:
case 1511:
case 3624:
case 3214:
case 62:
case 2466:
case 2212:
case 2622:
case 1937:
case 3700:
case 385:
case 2465:
case 967:
case 4070:
case 994:
case 1300:
case 181:
case 1982:
case 1297:
case 2522:
case 1084:
case 3550:
case 4071:
case 1245:
case 3668:
case 1301:
case 1955:
case 791:
case 605:
case 2290:
case 3891:
case 3073:
case 2643:
case 3609:
case 3233:
case 1674:
case 1886:
case 2361:
case 925:
case 20:
case 2227:
case 908:
case 3319:
case 1719:
case 1692:
case 2166:
case 2870:
case 3271:
case 1138:
case 3031:
case 3916:
case 294:
case 3270:
case 267:
case 304:
case 2543:
case 2930:
case 2718:
case 359:
case 2871:
case 2467:
case 2968:
case 3068:
case 603:
case 3766:
case 1935:
case 1161:
case 2400:
case 1523:
case 3253:
case 487:
case 3083:
case 1875:
case 1969:
case 1684:
case 907:
case 1876:
case 923:
case 493:
case 1160:
case 3051:
case 806:
case 999:
case 1584:
case 3050:
case 1365:
case 2950:
case 1213:
case 2338:
case 3280:
case 268:
case 2159:
case 1366:
case 2881:
case 2615:
case 655:
case 2693:
case 3841:
case 2240:
case 364:
case 2226:
case 2459:
case 3573:
case 2616:
case 223:
case 841:
case 3825:
case 571:
case 1542:
case 1092:
case 25:
case 4053:
case 1957:
case 1458:
case 1994:
case 26:
case 1908:
case 968:
case 3418:
case 1074:
case 1460:
case 782:
case 3531:
case 1642:
case 3009:
case 354:
case 2167:
case 2516:
case 2515:
case 4081:
case 665:
case 2593:
case 624:
case 1854:
case 2668:
case 1636:
case 511:
case 1082:
case 1846:
case 1820:
case 285:
case 3212:
case 969:
case 2767:
case 2214:
case 3439:
case 1536:
case 4027:
case 298:
case 4091:
case 610:
case 2583:
case 1923:
case 325:
case 3814:
case 68:
case 3093:
case 3871:
case 1760:
case 2993:
case 3015:
case 3718:
case 2030:
case 1707:
case 2916:
case 367:
case 204:
case 3931:
case 3165:
case 1572:
case 1694:
case 3517:
case 3166:
case 1761:
case 3870:
case 1594:
case 3617:
case 3227:
case 1557:
case 2319:
case 1608:
case 3361:
case 2759:
case 405:
case 3833:
case 688:
case 2890:
case 2233:
case 1758:
case 985:
case 1286:
case 2891:
case 2073:
case 1056:
case 3643:
case 2827:
case 1318:
case 1285:
case 3290:
case 695:
case 1055:
case 1487:
case 4000:
case 2181:
case 2528:
case 2859:
case 678:
case 156:
case 975:
case 3662:
case 3259:
case 1529:
case 3440:
case 1858:
case 3089:
case 2727:
case 931:
case 343:
case 3425:
case 2180:
case 1860:
case 1176:
case 2153:
case 3562:
case 1807:
case 1175:
case 2564:
case 1432:
case 417:
case 3770:
case 950:
case 2628:
case 275:
case 2867:
case 3345:
case 2453:
case 3200:
case 2352:
case 3267:
case 67:
case 2699:
case 3126:
case 1754:
case 1797:
case 1314:
case 313:
case 2599:
case 250:
case 2903:
case 3125:
case 2377:
case 3949:
case 474:
case 2480:
case 1187:
case 1745:
case 1720:
case 1048:
case 1326:
case 2112:
case 1688:
case 133:
case 1663:
case 680:
case 432:
case 3064:
case 2964:
case 1206:
case 3470:
case 3962:
case 1341:
case 1732:
case 2490:
case 3741:
case 1120:
case 1146:
case 3433:
case 1145:
case 581:
case 3725:
case 414:
case 2928:
case 1121:
case 1588:
case 3740:
case 945:
case 444:
case 679:
case 3375:
case 1998:
case 1497:
case 1454:
case 2190:
case 618:
case 1446:
case 786:
case 1420:
case 2781:
case 3099:
case 2079:
case 3649:
case 2347:
case 3979:
case 477:
case 3865:
case 1002:
case 2412:
case 2266:
case 737:
case 3414:
case 1775:
case 2396:
case 1904:
case 2265:
case 3171:
case 3839:
case 1776:
case 1238:
case 2753:
case 3628:
case 1819:
case 2770:
case 1260:
case 1434:
case 1390:
case 3385:
case 3564:
case 852:
case 1261:
case 2562:
case 1391:
case 592:
case 3153:
case 2089:
case 3664:
case 3727:
case 3791:
case 3989:
case 243:
case 2259:
case 1147:
case 2441:
case 3181:
case 419:
case 1258:
case 2733:
case 1786:
case 1088:
case 1678:
case 1447:
case 1948:
case 2141:
case 171:
case 3481:
case 4018:
case 1495:
case 2003:
case 2679:
case 1413:
case 213:
case 1496:
case 1752:
case 3599:
case 2140:
case 1312:
case 3801:
case 73:
case 3699:
case 2321:
case 3352:
case 2267:
case 2714:
case 1777:
case 2200:
case 2345:
case 1134:
case 331:
case 943:
case 2320:
case 448:
case 273:
case 3427:
case 106:
case 1486:
case 4065:
case 3589:
case 2741:
case 111:
case 1485:
case 620:
case 3062:
case 480:
case 2471:
case 632:
case 1177:
case 1805:
case 1806:
case 2171:
case 1380:
case 3395:
case 3265:
case 1477:
case 3396:
case 3412:
case 3079:
case 3603:
case 345:
case 2865:
case 1838:
case 973:
case 2170:
case 1381:
case 2866:
case 479:
case 2133:
case 644:
case 141:
case 2549:
case 200:
case 1747:
case 1185:
case 1098:
case 3191:
case 418:
case 1795:
case 2376:
case 1548:
case 3780:
case 2639:
case 3249:
case 576:
case 974:
case 1848:
case 2323:
case 3803:
case 2849:
case 2666:
case 2422:
case 3424:
case 1192:
case 846:
case 2117:
case 2001:
case 1411:
case 643:
case 2067:
case 2143:
case 3109:
case 3483:
case 2539:
case 3183:
case 2731:
case 3018:
case 3356:
case 2918:
case 2417:
case 2730:
case 450:
case 1111:
case 4049:
case 3716:
case 274:
case 582:
case 917:
case 3715:
case 735:
case 771:
case 1316:
case 1058:
case 460:
case 3151:
case 816:
case 3889:
case 2773:
case 3124:
case 1756:
case 3150:
case 1744:
case 431:
case 2289:
case 37:
case 1606:
case 3959:
case 3115:
case 3500:
case 1878:
case 3193:
case 3039:
case 1802:
case 3116:
case 1324:
case 1437:
case 1710:
case 3065:
case 2879:
case 2131:
case 2965:
case 1204:
case 3501:
case 3899:
case 1482:
case 2335:
case 415:
case 3601:
case 3750:
case 4062:
case 1383:
case 2336:
case 546:
case 232:
case 2369:
case 2173:
case 1156:
case 3667:
case 2722:
case 3311:
case 711:
case 3600:
case 1155:
case 1456:
case 1792:
case 1229:
case 1619:
case 2473:
case 3828:
case 1455:
case 2372:
case 3374:
case 4079:
case 1182:
case 1309:
case 2618:
case 516:
case 2431:
case 882:
case 3864:
case 920:
case 490:
case 2862:
case 3415:
case 244:
case 3659:
case 3262:
case 3416:
case 2430:
case 3392:
case 219:
case 2483:
case 1436:
case 2468:
case 3143:
case 2109:
case 2382:
case 1435:
case 1723:
case 4089:
case 766:
case 2901:
case 2424:
case 2451:
case 1157:
case 3666:
case 1194:
case 3422:
case 1248:
case 3323:
case 2803:
case 756:
case 3849:
case 317:
case 2249:
case 3639:
case 2959:
case 891:
case 1888:
case 2150:
case 1863:
case 660:
case 3773:
case 134:
case 1494:
case 1457:
case 919:
case 675:
case 2715:
case 413:
case 1960:
case 2793:
case 1472:
case 3918:
case 1169:
case 112:
case 2344:
case 1136:
case 561:
case 522:
case 650:
case 3443:
case 2409:
case 615:
case 2600:
case 1898:
case 3299:
case 2311:
case 979:
case 2751:
case 332:
case 1142:
case 280:
case 3336:
case 1484:
case 2899:
case 21:
case 2601:
case 1202:
case 1735:
case 2066:
case 2501:
case 2768:
case 1278:
case 1736:
case 2065:
case 2783:
case 3131:
case 3965:
case 1038:
case 172:
case 3130:
case 1769:
case 1322:
case 2567:
case 473:
case 2193:
case 4028:
case 94:
case 1708:
case 1561:
case 2392:
case 344:
case 1006:
case 2416:
case 3394:
case 3357:
case 1772:
case 2493:
case 218:
case 1005:
case 2415:
case 1658:
case 137:
case 1507:
case 3743:
case 2709:
case 3431:
case 1442:
case 3228:
case 3618:
case 1184:
case 591:
case 3372:
case 186:
case 1757:
case 1794:
case 2559:
case 3308:
case 3473:
case 2828:
case 2041:
case 3941:
case 4068:
case 538:
case 1292:
case 1488:
case 387:
case 4083:
case 3926:
case 3670:
case 2040:
case 2026:
case 1894:
case 3533:
case 2728:
case 393:
case 2489:
case 3570:
case 3209:
case 970:
case 3817:
case 1872:
case 4051:
case 4024:
case 336:
case 329:
case 4050:
case 3843:
case 2217:
case 3571:
case 289:
case 1211:
case 3514:
case 1654:
case 65:
case 3779:
case 497:
case 1836:
case 182:
case 1975:
case 1869:
case 1704:
case 53:
case 3268:
case 1645:
case 607:
case 1976:
case 1210:
case 1646:
case 255:
case 3283:
case 3250:
case 1546:
case 2403:
case 2378:
case 3449:
case 2824:
case 2851:
case 270:
case 454:
case 1163:
case 2850:
case 1188:
case 826:
case 1597:
case 1554:
case 3224:
case 3081:
case 2222:
case 839:
case 2815:
case 1532:
case 2071:
case 2893:
case 384:
case 1687:
case 3830:
case 1104:
case 3293:
case 3179:
case 3831:
case 3215:
case 3363:
case 363:
case 2230:
case 3388:
case 3640:
case 2070:
case 3462:
case 3970:
case 2033:
case 2199:
case 28:
case 3933:
case 3540:
case 1429:
case 988:
case 1763:
case 1085:
case 721:
case 698:
case 2991:
case 2789:
case 3873:
case 2927:
case 32:
case 995:
case 425:
case 146:
case 1632:
case 3541:
case 1244:
case 2581:
case 1052:
case 1954:
case 1498:
case 1997:
case 1282:
case 4015:
case 539:
case 2703:
case 2499:
case 1129:
case 1945:
case 1884:
case 1675:
case 1946:
case 2653:
case 240:
case 101:
case 659:
case 40:
case 3479:
case 83:
case 2348:
case 669:
case 2164:
case 1823:
case 288:
case 1237:
case 69:
case 910:
case 389:
case 3627:
case 3217:
case 1874:
case 4022:
case 3690:
case 2633:
case 2209:
case 2817:
case 1328:
case 303:
case 3728:
case 293:
case 3489:
case 2926:
case 3040:
case 1585:
case 3527:
case 287:
case 1294:
case 3591:
case 1087:
case 1148:
case 2671:
case 2081:
case 3981:
case 1552:
case 936:
case 2224:
case 1677:
case 1448:
case 370:
case 3189:
case 2304:
case 46:
case 2250:
case 151:
case 3403:
case 2449:
case 1236:
case 987:
case 161:
case 355:
case 1702:
case 664:
case 1235:
case 1811:
case 697:
case 2268:
case 423:
case 130:
case 1810:
case 2779:
case 3883:
case 837:
case 1399:
case 1634:
case 1855:
case 1242:
case 22:
case 2027:
case 1856:
case 2091:
case 3927:
case 608:
case 310:
case 1985:
case 1844:
case 3990:
case 2540:
case 2526:
case 1986:
case 485:
case 3033:
case 3199:
case 2933:
case 3070:
case 2462:
case 2216:
case 2626:
case 2970:
case 842:
case 263:
case 2388:
case 2179:
case 2363:
case 2293:
case 284:
case 2971:
case 3893:
case 3231:
case 572:
case 537:
case 2914:
case 3014:
case 3912:
case 2012:
case 1647:
case 1303:
case 1977:
case 2162:
case 657:
case 395:
case 1223:
case 3553:
case 2479:
case 49:
case 1695:
case 228:
case 1020:
case 1046:
case 340:
case 3653:
case 1748:
case 3580:
case 984:
case 1045:
case 1882:
case 667:
case 1596:
case 3703:
case 2749:
case 1054:
case 459:
case 3128:
case 1952:
case 1284:
case 1689:
case 1062:
case 2206:
case 2341:
case 508:
case 115:
case 1112:
case 2326:
case 233:
case 3805:
case 672:
case 306:
case 3152:
case 1427:
case 1928:
case 1491:
case 2197:
case 2154:
case 71:
case 2121:
case 1490:
case 1334:
case 2120:
case 3486:
case 2787:
case 3747:
case 897:
case 2420:
case 2446:
case 933:
case 341:
case 3186:
case 2445:
case 1780:
case 3713:
case 1191:
case 50:
case 3796:
case 2421:
case 2998:
case 2497:
case 3004:
case 3477:
case 779:
case 1313:
case 1265:
case 3648:
case 2078:
case 1753:
case 1395:
case 2238:
case 594:
case 996:
case 439:
case 1239:
case 854:
case 718:
case 1079:
case 2858:
case 1989:
case 1727:
case 3113:
case 2371:
case 642:
case 1180:
case 3195:
case 2487:
case 1859:
case 3258:
case 1528:
case 1181:
case 1790:
case 2963:
case 256:
case 3390:
case 3260:
case 778:
case 2333:
case 1386:
case 3819:
case 1218:
case 1153:
case 2860:
case 808:
case 2175:
case 2807:
case 2219:
case 438:
case 1564:
case 160:
case 3777:
case 749:
case 4058:
case 554:
case 1712:
case 175:
case 2132:
case 1800:
case 131:
case 3502:
case 1867:
case 2745:
case 2604:
case 1481:
case 3:
case 3602:
case 4061:
case 43:
case 3447:
case 3948:
case 3678:
case 2721:
case 966:
case 3752:
case 4060:
case 597:
case 1377:
case 1903:
case 3413:
case 150:
case 4007:
case 3495:
case 612:
case 4038:
case 868:
case 2029:
case 211:
case 720:
case 3146:
case 2485:
case 3197:
case 3154:
case 3121:
case 1028:
case 1725:
case 396:
case 206:
case 585:
case 2805:
case 3688:
case 2806:
case 3340:
case 3732:
case 3341:
case 2734:
case 1470:
case 1865:
case 559:
case 1866:
case 744:
case 1170:
case 906:
case 1171:
case 2978:
case 2648:
case 639:
case 2004:
case 2902:
case 3002:
case 2098:
case 3454:
case 3497:
case 59:
case 1375:
case 2452:
case 2796:
case 1099:
case 2186:
case 3420:
case 1549:
case 241:
case 2185:
case 2261:
case 1818:
case 3175:
case 971:
case 3807:
case 3629:
case 898:
case 9:
case 3176:
case 1770:
case 2260:
case 3963:
case 2785:
case 2147:
case 1441:
case 3370:
case 2258:
case 1733:
case 3487:
case 3988:
case 2088:
case 442:
case 568:
case 1425:
case 3858:
case 3529:
case 1259:
case 717:
case 1662:
case 2495:
case 1679:
case 2496:
case 113:
case 3314:
case 3797:
case 1126:
case 2312:
case 869:
case 1140:
case 523:
case 2678:
case 3746:
case 3720:
case 4019:
case 2602:
case 55:
case 3598:
case 3745:
case 3187:
case 3604:
case 774:
case 1320:
case 3132:
case 1321:
case 1397:
case 804:
case 434:
case 1200:
case 3476:
case 2511:
case 3569:
case 4085:
case 1466:
case 1212:
case 3037:
case 3277:
case 1814:
case 3535:
case 2877:
case 125:
case 108:
case 515:
case 3536:
case 321:
case 362:
case 753:
case 2301:
case 3854:
case 3846:
case 2300:
case 3082:
case 2982:
case 3669:
case 3845:
case 3044:
case 3942:
case 2592:
case 2886:
case 3608:
case 1291:
case 3594:
case 1360:
case 2955:
case 1290:
case 590:
case 3285:
case 1307:
case 850:
case 4077:
case 3758:
case 2406:
case 1543:
case 1016:
case 1358:
case 194:
case 3707:
case 860:
case 1930:
case 1015:
case 4052:
case 1093:
case 401:
case 831:
case 2692:
case 2719:
case 3508:
case 875:
case 3761:
case 1517:
case 2138:
case 2574:
case 3572:
case 1165:
case 3584:
case 787:
case 3158:
case 2582:
case 793:
case 4034:
case 1280:
case 2847:
case 1050:
case 3936:
case 729:
case 1083:
case 1765:
case 1253:
case 3523:
case 2276:
case 392:
case 3010:
case 736:
case 1766:
case 2275:
case 3684:
case 476:
case 2682:
case 1531:
case 3234:
case 1418:
case 2008:
case 4095:
case 4013:
case 2834:
case 1530:
case 845:
case 1673:
case 2656:
case 1943:
case 1630:
case 482:
case 1573:
case 164:
case 2556:
case 1841:
case 661:
case 550:
case 622:
case 2555:
case 3994:
case 2057:
case 2287:
case 902:
case 1631:
case 630:
case 2252:
case 2984:
case 2845:
case 3297:
case 1524:
case 3254:
case 3221:
case 573:
case 2820:
case 2846:
case 3301:
case 2897:
case 2635:
case 3245:
case 3852:
case 221:
case 1550:
case 3220:
case 3610:
case 198:
case 3877:
case 252:
case 1650:
case 3105:
case 3510:
case 1701:
case 1812:
case 724:
case 1700:
case 2037:
case 646:
case 2569:
case 1624:
case 3511:
case 1031:
case 2572:
case 788:
case 2657:
case 3692:
case 962:
case 601:
case 159:
case 795:
case 4054:
case 4021:
case 1030:
case 3406:
case 1509:
case 1233:
case 1609:
case 2318:
case 1827:
case 1073:
case 3956:
case 1891:
case 2608:
case 1319:
case 1759:
case 3592:
case 2672:
case 2942:
case 2044:
case 3944:
case 1890:
case 3885:
case 3911:
case 3069:
case 2684:
case 2969:
case 2875:
case 789:
case 2160:
case 1853:
case 2876:
case 3738:
case 3910:
case 676:
case 2523:
case 4087:
case 1400:
case 2936:
case 158:
case 2623:
case 3847:
case 2213:
case 1950:
case 168:
case 2295:
case 1881:
case 1159:
case 4032:
case 703:
case 2296:
case 3895:
case 2247:
case 3813:
case 1951:
case 3896:
case 2584:
case 2158:
case 3544:
case 770:
case 1241:
case 2542:
case 992:
case 3992:
case 3287:
case 2092:
case 2994:
case 2458:
case 3094:
case 1225:
case 3555:
case 1693:
case 1616:
case 107:
case 1226:
case 3556:
case 1240:
case 2887:
case 430:
case 123:
case 3419:
case 1043:
case 1909:
case 2461:
case 1515:
case 1100:
case 3834:
case 755:
case 199:
case 2832:
case 3706:
case 3008:
case 1017:
case 2908:
case 3232:
case 3974:
case 3705:
case 3072:
case 4084:
case 662:
case 621:
case 514:
case 1230:
case 481:
case 1231:
case 785:
case 3534:
case 1815:
case 1071:
case 1816:
case 3389:
case 1428:
case 1927:
case 3856:
case 4023:
case 246:
case 2632:
case 2086:
case 1033:
case 2429:
case 1273:
case 2085:
case 817:
case 520:
case 652:
case 2763:
case 2255:
case 1499:
case 3882:
case 3045:
case 2884:
case 769:
case 847:
case 3595:
case 201:
case 1653:
case 140:
case 3020:
case 2946:
case 577:
case 2052:
case 3952:
case 3097:
case 2282:
case 2954:
case 3021:
case 79:
case 216:
case 1703:
case 3478:
case 2349:
case 2237:
case 1912:
case 1014:
case 759:
case 3613:
case 1348:
case 946:
case 544:
case 1025:
case 3585:
case 4069:
case 692:
case 768:
case 2894:
case 1489:
case 1728:
case 1041:
case 4035:
case 3148:
case 2488:
case 2987:
case 2292:
case 2362:
case 4036:
case 1809:
case 1764:
case 189:
case 3032:
case 3934:
case 1243:
case 3686:
case 3874:
case 2645:
case 2975:
case 3235:
case 155:
case 361:
case 3076:
case 1953:
case 2210:
case 3236:
case 4057:
case 2654:
case 2621:
case 574:
case 976:
case 2836:
case 282:
case 3947:
case 2379:
case 877:
case 2163:
case 2554:
case 1612:
case 3552:
case 1403:
case 2013:
case 3913:
case 2520:
case 1980:
case 3995:
case 4008:
case 2545:
case 707:
case 723:
case 4072:
case 3996:
case 2096:
case 3255:
case 3085:
case 2844:
case 3763:
case 3429:
case 4037:
case 3788:
case 3244:
case 3198:
case 12:
case 2856:
case 1027:
case 421:
case 2389:
case 878:
case 462:
case 3104:
case 184:
case 2102:
case 681:
case 1641:
case 3532:
case 2178:
case 1970:
case 1462:
case 819:
case 1363:
case 4082:
case 1215:
case 725:
case 1293:
case 708:
case 849:
case 794:
case 518:
case 3576:
case 2613:
case 105:
case 2223:
case 128:
case 2695:
case 4055:
case 1914:
case 579:
case 2478:
case 2303:
case 3823:
case 2647:
case 2547:
case 70:
case 2054:
case 3997:
case 2284:
case 3920:
case 3676:
case 2046:
case 291:
case 2020:
case 3946:
case 2748:
case 87:
case 3945:
case 2596:
case 2685:
case 136:
case 519:
case 2686:
case 1633:
case 2328:
case 1817:
case 848:
case 2934:
case 3034:
case 3274:
case 1329:
case 2208:
case 2294:
case 3488:
case 3729:
case 2148:
case 81:
case 1941:
case 1671:
case 193:
case 1533:
case 2585:
case 376:
case 1149:
case 4011:
case 1925:
case 2996:
case 57:
case 3096:
case 3545:
case 3798:
case 797:
case 1822:
case 3095:
case 1449:
case 251:
case 2552:
case 1081:
case 1224:
case 3597:
case 3521:
case 1251:
case 3163:
case 2810:
case 230:
case 2577:
case 2269:
case 2652:
case 3835:
case 2399:
case 879:
case 3211:
case 2236:
case 2778:
case 549:
case 3210:
case 4092:
case 2235:
case 1398:
case 2702:
case 818:
case 754:
case 3975:
case 372:
case 3038:
case 2710:
case 2938:
case 1879:
case 889:
case 3735:
case 3202:
case 611:
case 3804:
case 1130:
case 496:
case 926:
case 2324:
case 1369:
case 3898:
case 2155:
case 120:
case 803:
case 510:
case 2482:
case 2144:
case 3142:
case 132:
case 2182:
case 3184:
case 3829:
case 1618:
case 3558:
case 870:
case 239:
case 2444:
case 3442:
case 3317:
case 1473:
case 2619:
case 2792:
case 2456:
case 2229:
case 3794:
case 3757:
case 386:
case 1372:
case 2455:
case 2905:
case 3123:
case 3005:
case 641:
case 1357:
case 1394:
case 2519:
case 144:
case 3561:
case 1717:
case 1264:
case 2137:
case 588:
case 1431:
case 1518:
case 337:
case 1323:
case 1665:
case 2638:
case 238:
case 3194:
case 3157:
case 527:
case 3784:
case 743:
case 117:
case 2782:
case 456:
case 1143:
case 1067:
case 1384:
case 3436:
case 2737:
case 1117:
case 3469:
case 2411:
case 1001:
case 3172:
case 1565:
case 2174:
case 2538:
case 2007:
case 1730:
case 3907:
case 174:
case 6:
case 2111:
case 3960:
case 671:
case 2061:
case 312:
case 565:
case 2744:
case 713:
case 840:
case 3888:
case 1289:
case 2606:
case 2315:
case 570:
case 2755:
case 3958:
case 3494:
case 2058:
case 2316:
case 334:
case 3330:
case 1310:
case 52:
case 3368:
case 1601:
case 1899:
case 893:
case 1600:
case 1311:
case 2898:
case 1667:
case 1724:
case 1751:
case 553:
case 2804:
case 3351:
case 406:
case 1116:
case 3802:
case 563:
case 3711:
case 1039:
case 1193:
case 148:
case 2423:
case 715:
case 1279:
case 1066:
case 411:
case 1501:
case 3350:
case 1065:
case 2736:
case 2278:
case 3710:
case 3938:
case 3437:
case 696:
case 2658:
case 1864:
case 441:
case 2560:
case 179:
case 3137:
case 1392:
case 2561:
case 1659:
case 2006:
case 1493:
case 118:
case 2772:
case 2123:
case 3905:
case 745:
case 1374:
case 286:
case 3455:
case 2794:
case 2757:
case 1828:
case 3619:
case 3229:
case 3456:
case 3792:
case 2660:
case 339:
case 2184:
case 2607:
case 14:
case 656:
case 3538:
case 178:
case 3411:
case 2108:
case 3410:
case 529:
case 4088:
case 863:
case 536:
case 2436:
case 934:
case 1109:
case 1967:
case 2435:
case 593:
case 3782:
case 2784:
case 3848:
case 912:
case 587:
case 1424:
case 2194:
case 2157:
case 3638:
case 666:
case 338:
case 1803:
case 3492:
case 1889:
case 2958:
case 2457:
case 2494:
case 3316:
case 234:
case 3755:
case 3393:
case 3315:
case 17:
case 3744:
case 750:
case 1150:
case 760:
case 3110:
case 4:
case 471:
case 828:
case 1409:
case 3506:
case 2019:
case 3061:
case 2961:
case 775:
case 3060:
case 2472:
case 2960:
case 1716:
case 2169:
case 2373:
case 2907:
case 2408:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759694401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,];
var gg_b = "1759694401/";

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
