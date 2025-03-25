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
case 3123:
case 3968:
case 3879:
case 3026:
case 763:
case 3103:
case 3056:
case 836:
case 1774:
case 727:
case 2292:
case 1463:
case 357:
case 2413:
case 3282:
case 2532:
case 934:
case 3820:
case 3952:
case 268:
case 731:
case 2857:
case 4075:
case 1633:
case 570:
case 3850:
case 2121:
case 3922:
case 206:
case 2807:
case 3800:
case 575:
case 2786:
case 863:
case 3828:
case 3546:
case 1399:
case 2273:
case 1532:
case 3796:
case 168:
case 1827:
case 1151:
case 1755:
case 736:
case 1121:
case 1857:
case 3435:
case 201:
case 1807:
case 1363:
case 2095:
case 4054:
case 3039:
case 831:
case 4024:
case 2774:
case 3271:
case 4004:
case 3960:
case 509:
case 2967:
case 1413:
case 197:
case 1510:
case 3621:
case 2560:
case 3601:
case 4043:
case 3009:
case 2711:
case 1502:
case 860:
case 2894:
case 499:
case 1496:
case 1165:
case 689:
case 3214:
case 511:
case 3884:
case 1837:
case 2946:
case 2653:
case 3405:
case 75:
case 2396:
case 3455:
case 2603:
case 32:
case 1789:
case 3386:
case 1115:
case 1077:
case 2165:
case 417:
case 3355:
case 2522:
case 3549:
case 444:
case 3799:
case 2735:
case 2131:
case 573:
case 958:
case 3078:
case 2510:
case 760:
case 297:
case 524:
case 2245:
case 3036:
case 765:
case 119:
case 3763:
case 85:
case 1518:
case 3313:
case 1026:
case 1006:
case 1879:
case 1812:
case 566:
case 1282:
case 157:
case 2665:
case 3095:
case 79:
case 2858:
case 3273:
case 1411:
case 3786:
case 3499:
case 459:
case 2435:
case 301:
case 169:
case 1922:
case 3633:
case 1820:
case 3644:
case 3532:
case 1796:
case 3949:
case 1546:
case 1808:
case 998:
case 2800:
case 1435:
case 306:
case 2902:
case 269:
case 368:
case 3151:
case 2952:
case 2103:
case 922:
case 3363:
case 2026:
case 2153:
case 920:
case 2123:
case 9:
case 3413:
case 257:
case 2910:
case 1085:
case 1862:
case 3292:
case 2615:
case 810:
case 1665:
case 1374:
case 4087:
case 2036:
case 3245:
case 614:
case 2144:
case 1651:
case 1567:
case 4090:
case 3568:
case 813:
case 1059:
case 647:
case 1029:
case 1214:
case 2486:
case 284:
case 2325:
case 2355:
case 3552:
case 1070:
case 3165:
case 3496:
case 626:
case 3761:
case 3502:
case 2078:
case 3789:
case 1386:
case 2932:
case 2799:
case 974:
case 3837:
case 1405:
case 2549:
case 184:
case 1486:
case 2838:
case 776:
case 1264:
case 3894:
case 688:
case 1305:
case 713:
case 22:
case 3603:
case 1799:
case 3623:
case 545:
case 3396:
case 542:
case 3653:
case 2405:
case 4:
case 319:
case 2374:
case 3042:
case 420:
case 2651:
case 2567:
case 422:
case 1144:
case 218:
case 3560:
case 1517:
case 637:
case 2621:
case 2876:
case 2009:
case 2713:
case 2059:
case 1763:
case 3637:
case 1278:
case 1452:
case 593:
case 2989:
case 1422:
case 1402:
case 3732:
case 3555:
case 1064:
case 2322:
case 2302:
case 2270:
case 1911:
case 74:
case 601:
case 2961:
case 3162:
case 1318:
case 1410:
case 83:
case 2259:
case 1676:
case 3467:
case 1821:
case 3242:
case 1157:
case 1127:
case 402:
case 277:
case 405:
case 1360:
case 1368:
case 3417:
case 1259:
case 3913:
case 1460:
case 2676:
case 1418:
case 903:
case 3574:
case 2851:
case 2468:
case 3045:
case 1310:
case 3100:
case 84:
case 177:
case 2360:
case 1630:
case 2452:
case 3179:
case 2422:
case 2402:
case 3803:
case 2596:
case 1935:
case 1352:
case 668:
case 1322:
case 3449:
case 3112:
case 454:
case 164:
case 1961:
case 1620:
case 1905:
case 2432:
case 1955:
case 1925:
case 1600:
case 1749:
case 3996:
case 2608:
case 2658:
case 1194:
case 697:
case 1071:
case 3760:
case 314:
case 2974:
case 1239:
case 347:
case 905:
case 2513:
case 902:
case 1679:
case 2137:
case 2206:
case 900:
case 3710:
case 2717:
case 1082:
case 337:
case 4040:
case 1767:
case 581:
case 619:
case 1974:
case 2612:
case 2679:
case 403:
case 3768:
case 321:
case 3702:
case 592:
case 2650:
case 2955:
case 3722:
case 590:
case 3607:
case 2599:
case 3176:
case 1628:
case 3589:
case 1732:
case 1999:
case 4016:
case 3746:
case 3402:
case 2823:
case 3422:
case 2586:
case 1637:
case 2179:
case 3278:
case 885:
case 1162:
case 1277:
case 669:
case 2112:
case 2449:
case 478:
case 796:
case 1555:
case 1467:
case 3410:
case 1158:
case 2417:
case 56:
case 1108:
case 3801:
case 3360:
case 657:
case 2100:
case 3107:
case 2045:
case 2574:
case 891:
case 3157:
case 1242:
case 2467:
case 3460:
case 1417:
case 2963:
case 3259:
case 2158:
case 3209:
case 782:
case 1367:
case 3310:
case 377:
case 785:
case 2317:
case 1045:
case 4066:
case 1803:
case 2349:
case 939:
case 30:
case 3630:
case 1179:
case 3961:
case 555:
case 1112:
case 1449:
case 3270:
case 3302:
case 1694:
case 550:
case 2607:
case 2722:
case 807:
case 2657:
case 2561:
case 1833:
case 221:
case 1511:
case 2446:
case 3620:
case 2702:
case 2627:
case 1844:
case 553:
case 62:
case 1996:
case 3599:
case 4019:
case 3332:
case 449:
case 2184:
case 114:
case 1092:
case 1760:
case 3285:
case 237:
case 529:
case 2768:
case 1718:
case 87:
case 1295:
case 1138:
case 3974:
case 707:
case 3662:
case 1184:
case 1710:
case 3865:
case 3082:
case 3206:
case 3137:
case 3226:
case 3831:
case 3256:
case 1752:
case 3432:
case 1657:
case 439:
case 494:
case 1627:
case 1446:
case 2511:
case 121:
case 3986:
case 1176:
case 77:
case 3608:
case 2996:
case 4069:
case 1073:
case 2975:
case 686:
case 2416:
case 1541:
case 496:
case 2864:
case 1791:
case 1195:
case 3156:
case 1316:
case 3106:
case 2366:
case 3023:
case 18:
case 330:
case 111:
case 1924:
case 3642:
case 2740:
case 335:
case 3747:
case 2021:
case 1904:
case 4017:
case 3597:
case 332:
case 1748:
case 273:
case 2609:
case 1276:
case 482:
case 1021:
case 695:
case 1740:
case 1590:
case 1051:
case 692:
case 2904:
case 480:
case 1609:
case 3793:
case 345:
case 2276:
case 1629:
case 519:
case 1975:
case 3294:
case 681:
case 97:
case 3781:
case 628:
case 1416:
case 2541:
case 124:
case 2814:
case 491:
case 2195:
case 2466:
case 2238:
case 2791:
case 1864:
case 3139:
case 2678:
case 2316:
case 1366:
case 996:
case 3109:
case 4046:
case 3159:
case 2258:
case 2472:
case 3129:
case 366:
case 2419:
case 3941:
case 209:
case 1469:
case 3391:
case 1200:
case 2447:
case 483:
case 2626:
case 2656:
case 2988:
case 3383:
case 1493:
case 501:
case 1685:
case 1997:
case 170:
case 1882:
case 2177:
case 1065:
case 1639:
case 839:
case 2262:
case 2871:
case 2015:
case 3554:
case 1626:
case 2279:
case 1447:
case 3178:
case 1934:
case 1988:
case 985:
case 2031:
case 849:
case 982:
case 2685:
case 275:
case 3340:
case 272:
case 3990:
case 2997:
case 506:
case 2639:
case 2212:
case 270:
case 1871:
case 1015:
case 2980:
case 1208:
case 47:
case 3257:
case 361:
case 3575:
case 3207:
case 739:
case 2372:
case 1381:
case 2139:
case 1677:
case 3466:
case 3195:
case 3791:
case 629:
case 3541:
case 3284:
case 2294:
case 1772:
case 38:
case 2769:
case 1023:
case 1053:
case 1719:
case 1106:
case 3678:
case 1156:
case 3904:
case 1747:
case 1642:
case 3636:
case 854:
case 130:
case 3924:
case 242:
case 2543:
case 2793:
case 245:
case 2534:
case 3783:
case 240:
case 232:
case 3590:
case 2747:
case 3740:
case 235:
case 2580:
case 230:
case 584:
case 3659:
case 1543:
case 1588:
case 145:
case 3609:
case 373:
case 140:
case 3670:
case 3864:
case 324:
case 4052:
case 1781:
case 779:
case 2023:
case 951:
case 3366:
case 2106:
case 2053:
case 3230:
case 2126:
case 43:
case 66:
case 1159:
case 2766:
case 1716:
case 2033:
case 108:
case 2044:
case 2207:
case 2575:
case 3200:
case 261:
case 1391:
case 2257:
case 233:
case 848:
case 3279:
case 1440:
case 3980:
case 1524:
case 3212:
case 370:
case 2483:
case 3882:
case 3997:
case 569:
case 372:
case 787:
case 2340:
case 3656:
case 1178:
case 1448:
case 3177:
case 2170:
case 650:
case 1695:
case 652:
case 1990:
case 1340:
case 1892:
case 2129:
case 2159:
case 1766:
case 2716:
case 93:
case 3381:
case 1033:
case 1207:
case 208:
case 2391:
case 1136:
case 2941:
case 1257:
case 3062:
case 589:
case 3787:
case 2547:
case 3682:
case 2114:
case 3790:
case 3454:
case 723:
case 1593:
case 1743:
case 1788:
case 3375:
case 186:
case 2572:
case 1233:
case 281:
case 1244:
case 228:
case 774:
case 1027:
case 4061:
case 1057:
case 49:
case 3028:
case 4089:
case 4035:
case 1673:
case 971:
case 3966:
case 1572:
case 2233:
case 286:
case 2007:
case 2581:
case 2244:
case 3000:
case 867:
case 3741:
case 624:
case 2057:
case 4011:
case 3475:
case 823:
case 874:
case 616:
case 3354:
case 3265:
case 1780:
case 2164:
case 1547:
case 192:
case 1797:
case 3548:
case 3583:
case 3798:
case 2593:
case 3079:
case 2788:
case 3334:
case 3993:
case 3343:
case 2490:
case 3388:
case 2983:
case 2487:
case 193:
case 3480:
case 3836:
case 3251:
case 675:
case 3221:
case 672:
case 1390:
case 2724:
case 3201:
case 1498:
case 2754:
case 1387:
case 1441:
case 910:
case 3969:
case 3030:
case 2037:
case 36:
case 820:
case 8:
case 3614:
case 825:
case 1094:
case 99:
case 3919:
case 1253:
case 413:
case 1203:
case 798:
case 1341:
case 4005:
case 476:
case 3084:
case 2775:
case 4055:
case 2094:
case 2877:
case 3664:
case 1490:
case 1948:
case 1983:
case 1398:
case 293:
case 355:
case 7:
case 3434:
case 3947:
case 564:
case 2390:
case 3488:
case 2842:
case 720:
case 1704:
case 722:
case 2387:
case 2645:
case 1754:
case 2498:
case 725:
case 858:
case 632:
case 2304:
case 1790:
case 1682:
case 1540:
case 2354:
case 1215:
case 1062:
case 3788:
case 3743:
case 2806:
case 1404:
case 3593:
case 3734:
case 2856:
case 1454:
case 2231:
case 463:
case 1424:
case 2826:
case 2591:
case 431:
case 3027:
case 2145:
case 3581:
case 3007:
case 3233:
case 547:
case 3569:
case 446:
case 2916:
case 3673:
case 1058:
case 2475:
case 537:
case 1050:
case 436:
case 1145:
case 1741:
case 328:
case 381:
case 3572:
case 2375:
case 2008:
case 3519:
case 1916:
case 2058:
case 1475:
case 3114:
case 521:
case 392:
case 3797:
case 3547:
case 3780:
case 1265:
case 1354:
case 2885:
case 1324:
case 642:
case 962:
case 4063:
case 645:
case 31:
case 253:
case 1583:
case 640:
case 1388:
case 927:
case 1343:
case 2076:
case 1497:
case 1993:
case 963:
case 3387:
case 1201:
case 252:
case 1221:
case 2488:
case 3940:
case 255:
case 2947:
case 817:
case 45:
case 931:
case 1878:
case 3566:
case 2919:
case 2664:
case 3877:
case 1614:
case 1192:
case 744:
case 3037:
case 2878:
case 1919:
case 936:
case 2614:
case 3991:
case 1084:
case 1038:
case 3341:
case 3487:
case 1829:
case 3948:
case 1809:
case 2497:
case 2388:
case 3754:
case 150:
case 2201:
case 3724:
case 1443:
case 465:
case 3704:
case 1397:
case 462:
case 1947:
case 155:
case 3146:
case 1132:
case 3088:
case 2779:
case 4029:
case 3043:
case 3034:
case 4059:
case 220:
case 3476:
case 1667:
case 1551:
case 1090:
case 222:
case 2617:
case 418:
case 1758:
case 42:
case 2494:
case 1896:
case 1728:
case 3484:
case 649:
case 969:
case 3707:
case 1437:
case 298:
case 3825:
case 2750:
case 3757:
case 3855:
case 399:
case 4070:
case 3503:
case 1337:
case 344:
case 3523:
case 1649:
case 1700:
case 198:
case 1750:
case 1720:
case 3338:
case 1098:
case 53:
case 3618:
case 3931:
case 3376:
case 1712:
case 2087:
case 3080:
case 2762:
case 1:
case 125:
case 3874:
case 2667:
case 2551:
case 3660:
case 3951:
case 1240:
case 3479:
case 556:
case 881:
case 1515:
case 3901:
case 2102:
case 2565:
case 3362:
case 2776:
case 918:
case 4056:
case 2813:
case 3149:
case 2283:
case 1863:
case 4006:
case 2531:
case 2784:
case 890:
case 1357:
case 159:
case 786:
case 895:
case 2110:
case 1160:
case 2457:
case 3308:
case 2923:
case 3269:
case 2953:
case 2427:
case 2407:
case 3358:
case 1899:
case 81:
case 2903:
case 3328:
case 2357:
case 728:
case 274:
case 1738:
case 1291:
case 3272:
case 3428:
case 2118:
case 3632:
case 3889:
case 1457:
case 3219:
case 1168:
case 1646:
case 1953:
case 3835:
case 1407:
case 3737:
case 1903:
case 2240:
case 3004:
case 267:
case 1122:
case 3054:
case 2515:
case 795:
case 3024:
case 1565:
case 3379:
case 1248:
case 1283:
case 1813:
case 2863:
case 1043:
case 1088:
case 2376:
case 2931:
case 3132:
case 2618:
case 1146:
case 1610:
case 596:
case 2097:
case 3551:
case 3667:
case 2965:
case 3087:
case 3501:
case 1915:
case 76:
case 3708:
case 2216:
case 244:
case 3728:
case 3758:
case 2338:
case 1602:
case 850:
case 1825:
case 1757:
case 3944:
case 3437:
case 2430:
case 855:
case 3933:
case 704:
case 1707:
case 3649:
case 2266:
case 2438:
case 2484:
case 1886:
case 1523:
case 1503:
case 968:
case 648:
case 3720:
case 2602:
case 299:
case 3041:
case 1338:
case 2727:
case 4077:
case 2825:
case 1384:
case 580:
case 2652:
case 2805:
case 3700:
case 585:
case 2034:
case 1376:
case 2043:
case 1931:
case 1618:
case 603:
case 3098:
case 2146:
case 3617:
case 2610:
case 322:
case 1097:
case 1660:
case 755:
case 752:
case 3712:
case 4095:
case 3515:
case 2312:
case 2004:
case 602:
case 2462:
case 2167:
case 1281:
case 258:
case 1544:
case 3160:
case 2300:
case 1117:
case 2861:
case 1794:
case 2458:
case 2272:
case 1533:
case 3327:
case 2320:
case 2408:
case 1328:
case 2835:
case 1400:
case 583:
case 1420:
case 2889:
case 2544:
case 158:
case 1428:
case 1167:
case 2075:
case 1272:
case 2794:
case 2117:
case 1861:
case 679:
case 507:
case 1408:
case 406:
case 1350:
case 654:
case 1737:
case 3168:
case 853:
case 2269:
case 3953:
case 3646:
case 3923:
case 1024:
case 829:
case 1312:
case 1054:
case 2901:
case 2921:
case 3152:
case 2832:
case 2930:
case 3937:
case 3699:
case 2635:
case 2069:
case 1723:
case 1753:
case 1019:
case 2507:
case 338:
case 1072:
case 294:
case 1984:
case 2557:
case 2661:
case 3091:
case 1938:
case 3174:
case 527:
case 1611:
case 239:
case 2465:
case 3048:
case 2196:
case 447:
case 3579:
case 3186:
case 772:
case 1224:
case 3512:
case 387:
case 1365:
case 775:
case 1254:
case 531:
case 1204:
case 770:
case 1047:
case 303:
case 2415:
case 1465:
case 3613:
case 2224:
case 3701:
case 620:
case 6:
case 2365:
case 3562:
case 536:
case 3751:
case 625:
case 2047:
case 622:
case 1689:
case 3846:
case 3528:
case 1930:
case 2703:
case 4073:
case 1069:
case 2019:
case 2753:
case 249:
case 3994:
case 875:
case 1081:
case 3333:
case 1557:
case 1661:
case 2984:
case 194:
case 2611:
case 1950:
case 3584:
case 3241:
case 816:
case 1920:
case 1900:
case 2733:
case 2594:
case 2908:
case 3696:
case 3353:
case 2958:
case 3303:
case 2928:
case 2351:
case 2321:
case 2674:
case 3867:
case 1810:
case 300:
case 1280:
case 2962:
case 3576:
case 2234:
case 1451:
case 1421:
case 2818:
case 3298:
case 3135:
case 716:
case 2297:
case 3290:
case 3715:
case 1860:
case 1962:
case 4045:
case 2280:
case 2810:
case 3287:
case 773:
case 2451:
case 937:
case 1288:
case 2401:
case 1199:
case 3957:
case 811:
case 3423:
case 2920:
case 562:
case 2605:
case 3927:
case 3907:
case 1594:
case 2625:
case 2900:
case 560:
case 2655:
case 3403:
case 2802:
case 278:
case 1744:
case 988:
case 2016:
case 1163:
case 1958:
case 3530:
case 3849:
case 2537:
case 349:
case 3753:
case 3019:
case 1699:
case 2508:
case 2528:
case 1937:
case 1444:
case 1174:
case 1520:
case 708:
case 634:
case 1091:
case 2333:
case 2613:
case 3976:
case 1579:
case 1083:
case 2040:
case 2125:
case 4071:
case 3204:
case 2721:
case 2751:
case 2562:
case 3254:
case 3365:
case 512:
case 2701:
case 3093:
case 2579:
case 733:
case 1613:
case 3196:
case 2083:
case 103:
case 1040:
case 808:
case 1751:
case 287:
case 3431:
case 1562:
case 3315:
case 2512:
case 1508:
case 2699:
case 148:
case 2444:
case 1528:
case 1846:
case 2433:
case 1558:
case 3689:
case 339:
case 843:
case 2520:
case 2174:
case 3557:
case 3661:
case 3275:
case 1994:
case 1333:
case 3081:
case 2403:
case 3900:
case 2907:
case 2927:
case 3852:
case 2453:
case 3920:
case 3605:
case 3822:
case 254:
case 1303:
case 842:
case 989:
case 2530:
case 3113:
case 845:
case 1353:
case 1323:
case 100:
case 3810:
case 2287:
case 2817:
case 735:
case 732:
case 2290:
case 105:
case 1135:
case 3401:
case 1189:
case 1576:
case 2765:
case 3962:
case 1817:
case 2161:
case 200:
case 1715:
case 2867:
case 1111:
case 202:
case 576:
case 2135:
case 2731:
case 3288:
case 3818:
case 3234:
case 832:
case 835:
case 3733:
case 4014:
case 179:
case 1453:
case 2584:
case 2241:
case 1423:
case 1530:
case 40:
case 3163:
case 3958:
case 2696:
case 3066:
case 3908:
case 3764:
case 251:
case 466:
case 156:
case 2872:
case 789:
case 65:
case 1869:
case 3134:
case 1978:
case 3188:
case 2289:
case 1032:
case 3046:
case 2198:
case 2141:
case 1654:
case 443:
case 2847:
case 1624:
case 1936:
case 3840:
case 3539:
case 1371:
case 2382:
case 2909:
case 1893:
case 932:
case 3263:
case 1482:
case 935:
case 2929:
case 2936:
case 940:
case 1595:
case 662:
case 2604:
case 942:
case 889:
case 2371:
case 665:
case 945:
case 1909:
case 433:
case 3492:
case 2893:
case 1471:
case 3556:
case 1959:
case 2482:
case 3213:
case 3197:
case 151:
case 1261:
case 2978:
case 1819:
case 1235:
case 3373:
case 2773:
case 3049:
case 3296:
case 4003:
case 3578:
case 2286:
case 1414:
case 908:
case 3641:
case 2022:
case 1364:
case 877:
case 1225:
case 2314:
case 2688:
case 2643:
case 2926:
case 2634:
case 80:
case 943:
case 2906:
case 1018:
case 3175:
case 3771:
case 1060:
case 435:
case 1985:
case 1542:
case 1939:
case 2274:
case 1792:
case 1956:
case 1926:
case 3509:
case 440:
case 2018:
case 2060:
case 3690:
case 3067:
case 380:
case 3782:
case 933:
case 598:
case 382:
case 777:
case 2792:
case 1773:
case 2866:
case 1464:
case 1816:
case 2414:
case 1286:
case 2205:
case 3124:
case 3570:
case 3154:
case 5:
case 2364:
case 2255:
case 1314:
case 3104:
case 356:
case 2180:
case 1473:
case 98:
case 671:
case 1977:
case 2197:
case 2714:
case 3190:
case 2891:
case 3032:
case 1134:
case 27:
case 472:
case 1585:
case 714:
case 3624:
case 1539:
case 3936:
case 4065:
case 1942:
case 821:
case 3654:
case 2526:
case 2848:
case 2556:
case 3893:
case 2492:
case 4031:
case 2585:
case 2539:
case 2392:
case 973:
case 558:
case 3745:
case 3929:
case 1848:
case 2263:
case 3909:
case 916:
case 2473:
case 676:
case 3261:
case 351:
case 3675:
case 1714:
case 2764:
case 1891:
case 613:
case 3198:
case 3235:
case 1373:
case 924:
case 3289:
case 2143:
case 2134:
case 17:
case 3866:
case 69:
case 1049:
case 1296:
case 612:
case 3225:
case 2124:
case 610:
case 3018:
case 1698:
case 1445:
case 2529:
case 975:
case 972:
case 2559:
case 1536:
case 3792:
case 2995:
case 282:
case 2687:
case 411:
case 3542:
case 1017:
case 2782:
case 534:
case 280:
case 2690:
case 3697:
case 473:
case 1509:
case 1529:
case 544:
case 3688:
case 1559:
case 3956:
case 517:
case 2536:
case 1687:
case 3010:
case 4051:
case 1690:
case 2771:
case 3816:
case 3286:
case 2578:
case 2296:
case 2049:
case 3052:
case 1104:
case 296:
case 3002:
case 1570:
case 424:
case 2739:
case 2992:
case 260:
case 262:
case 3880:
case 2181:
case 3982:
case 1706:
case 1119:
case 3436:
case 2169:
case 3478:
case 3252:
case 1147:
case 3222:
case 1514:
case 1841:
case 3202:
case 656:
case 2193:
case 15:
case 3086:
case 46:
case 3148:
case 1477:
case 2096:
case 3183:
case 929:
case 1973:
case 3025:
case 897:
case 2147:
case 3140:
case 1564:
case 3055:
case 651:
case 4038:
case 376:
case 4084:
case 1193:
case 3378:
case 1249:
case 1096:
case 3616:
case 2973:
case 3409:
case 1890:
case 1342:
case 1992:
case 160:
case 3336:
case 1739:
case 3459:
case 3971:
case 2172:
case 455:
case 162:
case 1887:
case 2267:
case 165:
case 3260:
case 1181:
case 3843:
case 2119:
case 3218:
case 3834:
case 2756:
case 2726:
case 1759:
case 3693:
case 3326:
case 2063:
case 2166:
case 453:
case 2495:
case 3439:
case 2648:
case 2683:
case 2571:
case 1582:
case 3035:
case 3669:
case 2246:
case 904:
case 2099:
case 4008:
case 2778:
case 4028:
case 3089:
case 4058:
case 1770:
case 3061:
case 236:
case 64:
case 3914:
case 1099:
case 246:
case 63:
case 1691:
case 2770:
case 136:
case 3011:
case 768:
case 3964:
case 3672:
case 706:
case 2759:
case 1063:
case 955:
case 2116:
case 1683:
case 1648:
case 950:
case 1495:
case 1571:
case 227:
case 539:
case 594:
case 3426:
case 3385:
case 3647:
case 2395:
case 801:
case 3339:
case 4012:
case 3267:
case 1210:
case 2971:
case 3172:
case 2459:
case 1880:
case 1191:
case 2336:
case 2409:
case 3726:
case 1329:
case 3756:
case 1268:
case 1436:
case 2834:
case 2888:
case 3119:
case 3706:
case 2843:
case 1370:
case 505:
case 3514:
case 1222:
case 4094:
case 3841:
case 3147:
case 2025:
case 1252:
case 500:
case 3973:
case 72:
case 2616:
case 1183:
case 3477:
case 1666:
case 986:
case 35:
case 176:
case 3377:
case 271:
case 2370:
case 818:
case 1055:
case 1025:
case 2478:
case 3564:
case 1140:
case 3249:
case 3096:
case 2183:
case 3193:
case 981:
case 2086:
case 928:
case 607:
case 3181:
case 1429:
case 2880:
case 1459:
case 3217:
case 579:
case 362:
case 3887:
case 1971:
case 2795:
case 360:
case 1409:
case 2545:
case 2897:
case 3342:
case 3890:
case 82:
case 2359:
case 1834:
case 1218:
case 1439:
case 363:
case 1306:
case 1693:
case 1485:
case 3759:
case 1356:
case 3013:
case 3945:
case 2406:
case 2742:
case 538:
case 993:
case 1804:
case 2647:
case 2456:
case 1854:
case 346:
case 1573:
case 4007:
case 2672:
case 115:
case 486:
case 696:
case 2011:
case 2875:
case 110:
case 1061:
case 331:
case 4027:
case 503:
case 2573:
case 1619:
case 3099:
case 1672:
case 1964:
case 336:
case 1777:
case 2061:
case 691:
case 2439:
case 2306:
case 3063:
case 2485:
case 2326:
case 3736:
case 1339:
case 1592:
case 490:
case 869:
case 1742:
case 1426:
case 2824:
case 1647:
case 495:
case 3571:
case 1456:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1742900402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,];
var gg_b = "1742900402/";

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
