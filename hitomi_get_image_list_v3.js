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
case 692:
case 2561:
case 2349:
case 1489:
case 948:
case 1463:
case 2852:
case 756:
case 345:
case 3025:
case 3920:
case 883:
case 465:
case 1855:
case 1801:
case 1089:
case 2568:
case 1466:
case 2815:
case 791:
case 3591:
case 3819:
case 3274:
case 3425:
case 1905:
case 3177:
case 3482:
case 1951:
case 305:
case 3186:
case 3720:
case 1417:
case 3542:
case 2650:
case 1758:
case 2457:
case 3273:
case 1064:
case 2199:
case 73:
case 3874:
case 889:
case 2215:
case 1610:
case 1751:
case 3169:
case 954:
case 2165:
case 3538:
case 1208:
case 1017:
case 1212:
case 3276:
case 4088:
case 122:
case 771:
case 2711:
case 2057:
case 217:
case 1549:
case 1361:
case 118:
case 1115:
case 2067:
case 1454:
case 3848:
case 710:
case 1299:
case 3647:
case 1305:
case 669:
case 2101:
case 3223:
case 929:
case 677:
case 2311:
case 3824:
case 1054:
case 1358:
case 3841:
case 3320:
case 3832:
case 2603:
case 212:
case 848:
case 2949:
case 2112:
case 3097:
case 3945:
case 1768:
case 2302:
case 2660:
case 2108:
case 854:
case 3232:
case 697:
case 2604:
case 2013:
case 1865:
case 583:
case 3892:
case 3075:
case 3970:
case 1456:
case 2558:
case 7:
case 2079:
case 1453:
case 1968:
case 1899:
case 4030:
case 3248:
case 346:
case 755:
case 3509:
case 1239:
case 2505:
case 3630:
case 989:
case 3823:
case 3127:
case 422:
case 2820:
case 2341:
case 520:
case 2138:
case 2332:
case 3565:
case 3952:
case 1727:
case 2444:
case 2694:
case 1526:
case 2428:
case 3617:
case 357:
case 641:
case 1145:
case 2583:
case 2774:
case 240:
case 2586:
case 1377:
case 3664:
case 742:
case 2919:
case 2044:
case 3915:
case 3010:
case 398:
case 2028:
case 1880:
case 2324:
case 2636:
case 713:
case 2421:
case 3168:
case 1395:
case 1209:
case 2043:
case 1524:
case 2446:
case 660:
case 1927:
case 3752:
case 1386:
case 3689:
case 851:
case 2622:
case 4063:
case 3211:
case 2577:
case 261:
case 2987:
case 1759:
case 936:
case 580:
case 2634:
case 482:
case 2220:
case 1625:
case 378:
case 3007:
case 3218:
case 2693:
case 1170:
case 1369:
case 2584:
case 2198:
case 2773:
case 2924:
case 26:
case 85:
case 1935:
case 1783:
case 1574:
case 3656:
case 1291:
case 935:
case 1769:
case 2373:
case 3315:
case 1831:
case 2948:
case 2672:
case 2319:
case 880:
case 1795:
case 4053:
case 487:
case 2270:
case 3849:
case 2376:
case 2932:
case 1120:
case 1786:
case 3653:
case 2723:
case 166:
case 707:
case 535:
case 836:
case 427:
case 2245:
case 64:
case 1777:
case 1898:
case 2387:
case 1447:
case 1735:
case 3508:
case 576:
case 2923:
case 60:
case 3555:
case 1242:
case 2374:
case 1231:
case 2471:
case 3962:
case 1997:
case 1533:
case 2772:
case 2393:
case 3366:
case 743:
case 2692:
case 3557:
case 3804:
case 2442:
case 626:
case 966:
case 3756:
case 2431:
case 2334:
case 1382:
case 2626:
case 1325:
case 1271:
case 384:
case 4062:
case 630:
case 1737:
case 2128:
case 2322:
case 611:
case 2385:
case 231:
case 3753:
case 3363:
case 1278:
case 2031:
case 3110:
case 1181:
case 2042:
case 2438:
case 489:
case 3662:
case 3300:
case 3206:
case 2396:
case 255:
case 2336:
case 29:
case 2091:
case 3754:
case 1522:
case 3806:
case 1677:
case 1585:
case 2143:
case 3461:
case 2648:
case 1797:
case 1740:
case 1534:
case 3529:
case 2582:
case 2394:
case 3317:
case 2525:
case 2491:
case 1070:
case 749:
case 2641:
case 3953:
case 2:
case 3468:
case 1684:
case 2333:
case 196:
case 686:
case 2674:
case 3458:
case 685:
case 15:
case 3051:
case 2996:
case 1243:
case 195:
case 3900:
case 3717:
case 690:
case 1627:
case 1572:
case 291:
case 3989:
case 2922:
case 2575:
case 3354:
case 3579:
case 1020:
case 3405:
case 2736:
case 3513:
case 2409:
case 256:
case 1821:
case 2480:
case 2171:
case 2785:
case 2288:
case 136:
case 3514:
case 3652:
case 448:
case 3917:
case 2796:
case 3763:
case 1221:
case 2676:
case 1846:
case 3964:
case 965:
case 2673:
case 1147:
case 1190:
case 2178:
case 2734:
case 1782:
case 23:
case 61:
case 4015:
case 408:
case 1725:
case 3567:
case 3250:
case 1659:
case 3182:
case 3388:
case 2129:
case 294:
case 2253:
case 4070:
case 1166:
case 496:
case 2706:
case 3747:
case 3790:
case 1279:
case 1100:
case 3077:
case 1163:
case 1867:
case 2703:
case 183:
case 918:
case 693:
case 3035:
case 3930:
case 2256:
case 129:
case 451:
case 123:
case 1816:
case 3483:
case 3872:
case 3095:
case 3990:
case 476:
case 1164:
case 2099:
case 527:
case 435:
case 2510:
case 189:
case 2465:
case 38:
case 3469:
case 822:
case 3521:
case 2254:
case 987:
case 3730:
case 1462:
case 4045:
case 3645:
case 673:
case 1214:
case 2649:
case 2903:
case 3069:
case 518:
case 1813:
case 2960:
case 2065:
case 3486:
case 1117:
case 3822:
case 3236:
case 3885:
case 2408:
case 2412:
case 2950:
case 242:
case 2001:
case 3059:
case 2800:
case 3896:
case 1707:
case 1015:
case 108:
case 2866:
case 2217:
case 202:
case 2114:
case 3459:
case 2012:
case 3893:
case 982:
case 2455:
case 614:
case 1560:
case 234:
case 1503:
case 1154:
case 148:
case 1052:
case 3175:
case 1710:
case 1907:
case 4020:
case 3781:
case 3427:
case 2179:
case 2618:
case 2360:
case 2602:
case 887:
case 2113:
case 2266:
case 2817:
case 316:
case 3833:
case 1658:
case 2750:
case 3137:
case 3620:
case 1229:
case 1504:
case 1153:
case 639:
case 3027:
case 219:
case 495:
case 1156:
case 3285:
case 3836:
case 2116:
case 2263:
case 1651:
case 2864:
case 480:
case 2200:
case 1374:
case 1559:
case 3999:
case 789:
case 1471:
case 2995:
case 2891:
case 57:
case 358:
case 2519:
case 955:
case 723:
case 4067:
case 1387:
case 1478:
case 2576:
case 531:
case 2447:
case 2735:
case 510:
case 2238:
case 1071:
case 9:
case 2490:
case 397:
case 1724:
case 412:
case 3406:
case 3614:
case 3552:
case 1870:
case 2697:
case 871:
case 3060:
case 2777:
case 443:
case 2898:
case 2984:
case 1932:
case 4079:
case 97:
case 1941:
case 449:
case 4013:
case 3261:
case 266:
case 3308:
case 3102:
case 3613:
case 3799:
case 332:
case 2675:
case 1845:
case 3118:
case 3312:
case 1376:
case 2977:
case 409:
case 344:
case 3765:
case 891:
case 1373:
case 1948:
case 1319:
case 3616:
case 2842:
case 1924:
case 4016:
case 3404:
case 2935:
case 377:
case 2574:
case 369:
case 1693:
case 1046:
case 2170:
case 2369:
case 2541:
case 2532:
case 1773:
case 1584:
case 1392:
case 2383:
case 3258:
case 1987:
case 754:
case 2759:
case 1326:
case 1634:
case 2682:
case 2625:
case 1191:
case 2548:
case 2927:
case 2386:
case 1622:
case 372:
case 1776:
case 556:
case 3205:
case 265:
case 2524:
case 1043:
case 428:
case 2880:
case 708:
case 3339:
case 1324:
case 991:
case 3901:
case 1787:
case 3955:
case 3050:
case 1586:
case 1044:
case 1348:
case 1142:
case 2081:
case 1694:
case 1428:
case 87:
case 3912:
case 4057:
case 1774:
case 1976:
case 956:
case 392:
case 1341:
case 1820:
case 1569:
case 1332:
case 2592:
case 3657:
case 53:
case 2481:
case 2727:
case 1633:
case 1444:
case 3858:
case 974:
case 1413:
case 2239:
case 30:
case 594:
case 751:
case 2511:
case 2453:
case 2968:
case 2899:
case 819:
case 3072:
case 3520:
case 2865:
case 1604:
case 796:
case 149:
case 3742:
case 2502:
case 3284:
case 2053:
case 287:
case 1416:
case 3187:
case 652:
case 2518:
case 1014:
case 547:
case 1603:
case 2265:
case 1302:
case 1660:
case 1467:
case 2358:
case 3938:
case 3671:
case 3884:
case 1155:
case 1101:
case 507:
case 735:
case 3286:
case 218:
case 2115:
case 842:
case 3942:
case 1067:
case 103:
case 3119:
case 3678:
case 3931:
case 1606:
case 2299:
case 3877:
case 1262:
case 2305:
case 3798:
case 3173:
case 3126:
case 2464:
case 440:
case 1711:
case 1057:
case 117:
case 542:
case 1252:
case 2549:
case 3436:
case 736:
case 3709:
case 2017:
case 678:
case 2162:
case 1457:
case 2368:
case 874:
case 1702:
case 720:
case 1199:
case 3433:
case 3644:
case 2610:
case 3628:
case 3036:
case 4044:
case 847:
case 2201:
case 3123:
case 360:
case 3259:
case 1650:
case 188:
case 698:
case 3331:
case 461:
case 3342:
case 3148:
case 780:
case 1429:
case 2951:
case 3909:
case 795:
case 942:
case 1568:
case 1139:
case 2466:
case 2463:
case 1029:
case 4046:
case 519:
case 3338:
case 2400:
case 1918:
case 282:
case 2607:
case 902:
case 3093:
case 341:
case 894:
case 3074:
case 928:
case 809:
case 1263:
case 4080:
case 491:
case 3172:
case 1306:
case 2651:
case 1864:
case 2605:
case 3530:
case 653:
case 2156:
case 4009:
case 3680:
case 31:
case 2658:
case 3474:
case 3371:
case 3728:
case 917:
case 3282:
case 2857:
case 2229:
case 2153:
case 456:
case 1303:
case 2710:
case 588:
case 254:
case 1266:
case 3473:
case 3825:
case 134:
case 2415:
case 2052:
case 1866:
case 1217:
case 1304:
case 528:
case 471:
case 102:
case 843:
case 1012:
case 1455:
case 3076:
case 3073:
case 1863:
case 208:
case 659:
case 1167:
case 2452:
case 113:
case 3746:
case 43:
case 1889:
case 3590:
case 803:
case 1055:
case 1950:
case 3476:
case 1001:
case 142:
case 4038:
case 1649:
case 3423:
case 949:
case 2879:
case 1903:
case 3194:
case 2813:
case 1960:
case 3092:
case 3133:
case 3837:
case 1254:
case 3026:
case 964:
case 1157:
case 2462:
case 828:
case 289:
case 1856:
case 1510:
case 3492:
case 174:
case 4031:
case 431:
case 3631:
case 3978:
case 3642:
case 2816:
case 2550:
case 2062:
case 2164:
case 3426:
case 1704:
case 3343:
case 3771:
case 2189:
case 3185:
case 3024:
case 330:
case 1350:
case 455:
case 2163:
case 2867:
case 1703:
case 903:
case 2310:
case 283:
case 766:
case 2166:
case 3424:
case 2213:
case 1706:
case 1904:
case 2814:
case 2279:
case 3897:
case 684:
case 194:
case 1253:
case 3032:
case 509:
case 3448:
case 943:
case 3729:
case 3655:
case 220:
case 3106:
case 540:
case 1673:
case 4055:
case 1793:
case 1178:
case 1372:
case 3160:
case 3313:
case 1994:
case 2375:
case 2221:
case 434:
case 362:
case 3612:
case 3379:
case 3957:
case 171:
case 1288:
case 722:
case 236:
case 1933:
case 2337:
case 616:
case 1993:
case 3018:
case 2397:
case 1537:
case 3411:
case 3104:
case 561:
case 2020:
case 782:
case 3929:
case 1736:
case 1409:
case 2627:
case 1733:
case 2828:
case 1080:
case 2130:
case 3757:
case 3402:
case 1674:
case 333:
case 3810:
case 1881:
case 25:
case 1009:
case 1794:
case 1996:
case 2871:
case 1:
case 2684:
case 1632:
case 1333:
case 3913:
case 1582:
case 1394:
case 1098:
case 3979:
case 3767:
case 787:
case 1146:
case 251:
case 2585:
case 3916:
case 3714:
case 1972:
case 2797:
case 1648:
case 650:
case 2740:
case 3500:
case 1230:
case 2635:
case 155:
case 3639:
case 1091:
case 3563:
case 399:
case 2278:
case 2181:
case 3779:
case 1247:
case 615:
case 2695:
case 1290:
case 3713:
case 1396:
case 1623:
case 110:
case 447:
case 2445:
case 2737:
case 1128:
case 2686:
case 96:
case 4065:
case 1442:
case 840:
case 2188:
case 2382:
case 1334:
case 17:
case 2325:
case 2271:
case 3517:
case 727:
case 2997:
case 407:
case 2940:
case 3914:
case 3049:
case 1393:
case 2533:
case 1772:
case 1692:
case 3665:
case 1084:
case 1125:
case 2134:
case 1388:
case 1477:
case 1182:
case 226:
case 1747:
case 1790:
case 546:
case 2424:
case 4061:
case 704:
case 2778:
case 2321:
case 2840:
case 424:
case 3814:
case 3279:
case 1077:
case 115:
case 2196:
case 769:
case 1484:
case 3668:
case 3100:
case 777:
case 3310:
case 3867:
case 2185:
case 1543:
case 1930:
case 3189:
case 506:
case 4068:
case 230:
case 1483:
case 3816:
case 1872:
case 2631:
case 946:
case 2978:
case 2426:
case 3164:
case 3062:
case 1947:
case 1095:
case 2581:
case 389:
case 2023:
case 763:
case 1521:
case 3462:
case 1495:
case 2026:
case 6:
case 3214:
case 2346:
case 2297:
case 797:
case 2875:
case 484:
case 1486:
case 2092:
case 1069:
case 2590:
case 1330:
case 468:
case 1236:
case 290:
case 1059:
case 2476:
case 1896:
case 285:
case 2073:
case 905:
case 453:
case 2019:
case 2746:
case 2944:
case 3015:
case 308:
case 3707:
case 656:
case 2076:
case 2921:
case 2825:
case 945:
case 1988:
case 2882:
case 3829:
case 3560:
case 3415:
case 1233:
case 2419:
case 3154:
case 505:
case 3710:
case 2744:
case 2474:
case 270:
case 3504:
case 3229:
case 1234:
case 3857:
case 1620:
case 459:
case 1788:
case 1285:
case 2680:
case 772:
case 2487:
case 2721:
case 1390:
case 2943:
case 225:
case 3997:
case 3045:
case 3940:
case 1260:
case 1366:
case 3669:
case 4069:
case 1756:
case 2517:
case 3382:
case 857:
case 4095:
case 2150:
case 3737:
case 376:
case 2564:
case 1389:
case 552:
case 4086:
case 2779:
case 2967:
case 2699:
case 3536:
case 335:
case 3695:
case 1300:
case 1662:
case 674:
case 2500:
case 4077:
case 1956:
case 415:
case 299:
case 1364:
case 647:
case 3585:
case 3677:
case 3797:
case 3740:
case 3878:
case 2714:
case 70:
case 42:
case 1317:
case 2913:
case 1204:
case 3070:
case 1107:
case 2979:
case 3684:
case 3871:
case 607:
case 952:
case 74:
case 878:
case 3937:
case 2810:
case 1963:
case 2556:
case 2367:
case 1717:
case 1900:
case 1005:
case 35:
case 1051:
case 395:
case 3243:
case 578:
case 1850:
case 3627:
case 3130:
case 2757:
case 2402:
case 2929:
case 1513:
case 214:
case 634:
case 3020:
case 3925:
case 1405:
case 2018:
case 2207:
case 3821:
case 2411:
case 2002:
case 1353:
case 1789:
case 2957:
case 3337:
case 336:
case 1514:
case 375:
case 2160:
case 852:
case 3846:
case 2379:
case 978:
case 2612:
case 2807:
case 1763:
case 2554:
case 3221:
case 262:
case 3843:
case 3190:
case 1766:
case 2106:
case 3782:
case 320:
case 239:
case 153:
case 2655:
case 1567:
case 3384:
case 2657:
case 3088:
case 2858:
case 1410:
case 3727:
case 3481:
case 157:
case 568:
case 884:
case 1802:
case 1818:
case 2912:
case 3145:
case 3377:
case 3488:
case 790:
case 1010:
case 1915:
case 198:
case 3081:
case 688:
case 959:
case 2339:
case 3880:
case 2955:
case 2050:
case 968:
case 628:
case 365:
case 3524:
case 2399:
case 3209:
case 1600:
case 3395:
case 3548:
case 725:
case 953:
case 405:
case 3280:
case 1211:
case 3386:
case 1689:
case 2701:
case 3759:
case 2258:
case 2755:
case 237:
case 3625:
case 3682:
case 4082:
case 4025:
case 1007:
case 178:
case 2365:
case 770:
case 1666:
case 277:
case 2939:
case 2301:
case 3291:
case 524:
case 3783:
case 2355:
case 1105:
case 1151:
case 3769:
case 711:
case 2616:
case 3842:
case 138:
case 603:
case 3831:
case 406:
case 726:
case 1762:
case 2102:
case 2308:
case 4037:
case 2679:
case 2118:
case 1849:
case 612:
case 232:
case 3675:
case 1653:
case 984:
case 3637:
case 2261:
case 2552:
case 3697:
case 2614:
case 1249:
case 3969:
case 3898:
case 2060:
case 786:
case 3983:
case 3576:
case 152:
case 2739:
case 3735:
case 297:
case 3490:
case 3519:
case 2403:
case 3891:
case 3327:
case 258:
case 2515:
case 3784:
case 263:
case 1555:
case 3242:
case 1962:
case 3047:
case 3090:
case 3995:
case 2999:
case 714:
case 1876:
case 2093:
case 3489:
case 241:
case 3066:
case 3463:
case 1287:
case 1598:
case 478:
case 1184:
case 1025:
case 2338:
case 3400:
case 1082:
case 3801:
case 3855:
case 2493:
case 201:
case 2085:
case 3466:
case 815:
case 1819:
case 1274:
case 3063:
case 1591:
case 2331:
case 1873:
case 82:
case 3000:
case 2036:
case 2494:
case 1720:
case 4010:
case 3417:
case 850:
case 3255:
case 3201:
case 2391:
case 2123:
case 260:
case 3368:
case 1195:
case 1681:
case 2433:
case 1874:
case 3705:
case 2436:
case 3751:
case 1370:
case 3464:
case 2780:
case 2126:
case 762:
case 3549:
case 3361:
case 916:
case 1183:
case 457:
case 2678:
case 2931:
case 3115:
case 2877:
case 2798:
case 2173:
case 881:
case 3351:
case 3299:
case 1223:
case 1440:
case 1824:
case 2286:
case 66:
case 92:
case 2380:
case 3358:
case 58:
case 3054:
case 1320:
case 1841:
case 2671:
case 1097:
case 2176:
case 2269:
case 3265:
case 550:
case 1292:
case 3053:
case 1826:
case 3502:
case 1037:
case 3518:
case 2883:
case 2187:
case 3865:
case 2869:
case 2998:
case 515:
case 3456:
case 1970:
case 821:
case 3968:
case 2277:
case 1437:
case 98:
case 1630:
case 1224:
case 3239:
case 2991:
case 3056:
case 1823:
case 4019:
case 253:
case 2356:
case 1601:
case 2567:
case 592:
case 2766:
case 3372:
case 3178:
case 3281:
case 2615:
case 1313:
case 897:
case 3994:
case 2917:
case 3676:
case 1612:
case 1554:
case 1807:
case 2763:
case 162:
case 3171:
case 3722:
case 937:
case 2789:
case 1957:
case 4076:
case 2652:
case 3540:
case 3597:
case 3537:
case 1018:
case 1207:
case 745:
case 992:
case 356:
case 1553:
case 2966:
case 1104:
case 470:
case 1411:
case 804:
case 572:
case 648:
case 1929:
case 2513:
case 2405:
case 705:
case 2516:
case 1418:
case 1402:
case 4074:
case 391:
case 3080:
case 133:
case 1556:
case 2963:
case 259:
case 41:
case 608:
case 869:
case 3674:
case 1367:
case 2458:
case 3996:
case 877:
case 3:
case 997:
case 3333:
case 577:
case 2061:
case 2317:
case 3098:
case 1913:
case 2529:
case 3394:
case 837:
case 173:
case 4041:
case 544:
case 2803:
case 1767:
case 3847:
case 3143:
case 3890:
case 532:
case 2806:
case 1589:
case 623:
case 1916:
case 4024:
case 355:
case 39:
case 746:
case 3624:
case 3230:
case 3498:
case 958:
case 689:
case 2754:
case 199:
case 2110:
case 1967:
case 193:
case 3031:
case 1699:
case 3290:
case 2662:
case 597:
case 3830:
case 3385:
case 331:
case 2753:
case 1564:
case 3322:
case 2389:
case 977:
case 2756:
case 2954:
case 3626:
case 1716:
case 4026:
case 3772:
case 3121:
case 932:
case 486:
case 563:
case 3692:
case 2260:
case 2557:
case 2366:
case 3116:
case 1487:
case 1721:
case 1074:
case 2347:
case 3864:
case 1530:
case 3200:
case 3306:
case 960:
case 2788:
case 2285:
case 3611:
case 433:
case 11:
case 1680:
case 2833:
case 3750:
case 636:
case 216:
case 1728:
case 1225:
case 778:
case 2620:
case 2427:
case 2781:
case 3618:
case 2293:
case 1744:
case 3266:
case 3113:
case 3817:
case 3360:
case 2894:
case 334:
case 560:
case 757:
case 2233:
case 2294:
case 3304:
case 1743:
case 3008:
case 2571:
case 3012:
case 2197:
case 3455:
case 302:
case 3401:
case 3114:
case 1921:
case 2459:
case 1073:
case 65:
case 1019:
case 1746:
case 3863:
case 2981:
case 1928:
case 3408:
case 901:
case 2578:
case 3412:
case 3950:
case 3903:
case 1875:
case 1240:
case 1092:
case 1194:
case 1837:
case 1971:
case 2730:
case 307:
case 3853:
case 1026:
case 4049:
case 3510:
case 1023:
case 2544:
case 90:
case 2469:
case 2086:
case 1492:
case 28:
case 860:
case 1631:
case 250:
case 1426:
case 3906:
case 651:
case 2095:
case 3039:
case 2543:
case 22:
case 1328:
case 1122:
case 3350:
case 676:
case 1691:
case 130:
case 1441:
case 1196:
case 499:
case 54:
case 2272:
case 3703:
case 1698:
case 2747:
case 2790:
case 3904:
case 2670:
case 1897:
case 1778:
case 1321:
case 2125:
case 841:
case 2388:
case 2182:
case 1041:
case 1134:
case 3129:
case 473:
case 3253:
case 2546:
case 126:
case 1448:
case 3854:
case 3507:
case 1738:
case 3505:
case 2509:
case 1886:
case 3413:
case 10:
case 3551:
case 1991:
case 309:
case 444:
case 3479:
case 3862:
case 246:
case 2437:
case 3604:
case 3013:
case 14:
case 1869:
case 1998:
case 1742:
case 870:
case 2970:
case 349:
case 432:
case 2232:
case 2826:
case 2037:
case 986:
case 206:
case 4004:
case 1472:
case 1187:
case 3318:
case 2097:
case 3112:
case 784:
case 2040:
case 1176:
case 2945:
case 497:
case 312:
case 1269:
case 3660:
case 2292:
case 666:
case 3467:
case 343:
case 1884:
case 2226:
case 1938:
case 2320:
case 1671:
case 3101:
case 3414:
case 2159:
case 2497:
case 2440:
case 3155:
case 1835:
case 885:
case 911:
case 586:
case 1678:
case 1119:
case 2848:
case 2770:
case 890:
case 1942:
case 2690:
case 3262:
case 1877:
case 458:
case 1309:
case 590:
case 3057:
case 1126:
case 492:
case 2688:
case 970:
case 1033:
case 1545:
case 2183:
case 2887:
case 1398:
case 2169:
case 1094:
case 585:
case 886:
case 2370:
case 2276:
case 4050:
case 2195:
case 3702:
case 665:
case 3718:
case 2681:
case 2874:
case 91:
case 1036:
case 1494:
case 768:
case 2186:
case 1628:
case 3650:
case 2531:
case 1123:
case 1342:
case 830:
case 388:
case 3429:
case 1434:
case 205:
case 2873:
case 2425:
case 811:
case 1227:
case 1859:
case 990:
case 472:
case 1124:
case 101:
case 1085:
case 759:
case 3568:
case 2287:
case 3852:
case 51:
case 1496:
case 1093:
case 3349:
case 2876:
case 826:
case 3918:
case 1422:
case 3902:
case 163:
case 3374:
case 3471:
case 1868:
case 3923:
case 567:
case 1403:
case 1515:
case 1460:
case 579:
case 3732:
case 3741:
case 3478:
case 252:
case 3926:
case 1739:
case 1406:
case 2508:
case 3245:
case 2249:
case 1060:
case 3992:
case 3941:
case 2653:
case 104:
case 3932:
case 967:
case 979:
case 1261:
case 44:
case 2762:
case 1308:
case 1312:
case 1679:
case 3376:
case 3845:
case 1268:
case 1765:
case 2105:
case 3373:
case 144:
case 3319:
case 1616:
case 993:
case 2315:
case 3948:
case 36:
case 3924:
case 3180:
case 1404:
case 1301:
case 715:
case 2656:
case 833:
case 962:
case 4034:
case 3046:
case 2218:
case 2007:
case 278:
case 2715:
case 622:
case 1365:
case 3392:
case 533:
case 3773:
case 2666:
case 716:
case 1701:
case 873:
case 1258:
case 3220:
case 137:
case 3326:
case 3443:
case 3634:
case 2752:
case 939:
case 3323:
case 361:
case 3685:
case 3622:
case 4022:
case 3776:
case 401:
case 4085:
case 172:
case 2663:
case 3696:
case 2362:
case 2600:
case 2168:
case 3535:
case 1708:
case 2599:
case 1339:
case 3324:
case 3028:
case 3595:
case 1901:
case 3787:
case 300:
case 1805:
case 1851:
case 562:
case 3586:
case 298:
case 3142:
case 3348:
case 3919:
case 3044:
case 3131:
case 3428:
case 257:
case 2617:
case 867:
case 4033:
case 2802:
case 192:
case 2818:
case 682:
case 1149:
case 1912:
case 3332:
case 539:
case 3138:
case 1657:
case 3341:
case 3569:
case 2410:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1761919202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,];
var gg_b = "1761919202/";

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
