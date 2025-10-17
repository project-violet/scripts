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
case 1178:
case 4057:
case 712:
case 3878:
case 706:
case 2306:
case 1101:
case 586:
case 2530:
case 3505:
case 2658:
case 61:
case 1310:
case 3175:
case 2349:
case 2488:
case 1490:
case 1508:
case 2773:
case 788:
case 181:
case 1407:
case 456:
case 3043:
case 404:
case 311:
case 3563:
case 3739:
case 3615:
case 948:
case 2847:
case 1051:
case 101:
case 210:
case 3843:
case 3558:
case 946:
case 42:
case 344:
case 3322:
case 2240:
case 1972:
case 881:
case 3630:
case 2959:
case 3583:
case 1851:
case 257:
case 512:
case 793:
case 2199:
case 3316:
case 49:
case 3991:
case 1272:
case 2468:
case 3496:
case 1434:
case 506:
case 2259:
case 3687:
case 205:
case 3457:
case 588:
case 1335:
case 708:
case 1075:
case 1175:
case 3571:
case 876:
case 4034:
case 3875:
case 2946:
case 2623:
case 215:
case 68:
case 2655:
case 1667:
case 3178:
case 1801:
case 2485:
case 167:
case 2428:
case 2147:
case 2527:
case 694:
case 381:
case 2246:
case 844:
case 3636:
case 1322:
case 653:
case 3555:
case 811:
case 2781:
case 1583:
case 3851:
case 2403:
case 3219:
case 3972:
case 1630:
case 1291:
case 3382:
case 2397:
case 414:
case 452:
case 280:
case 3143:
case 867:
case 3075:
case 1457:
case 4090:
case 1777:
case 1316:
case 878:
case 1001:
case 3919:
case 702:
case 1338:
case 3272:
case 2364:
case 2899:
case 2634:
case 572:
case 186:
case 302:
case 1289:
case 316:
case 888:
case 2427:
case 2532:
case 1463:
case 1312:
case 914:
case 812:
case 1492:
case 806:
case 3507:
case 3276:
case 3590:
case 2121:
case 1326:
case 2352:
case 3408:
case 1304:
case 1039:
case 3929:
case 701:
case 3976:
case 2845:
case 581:
case 3944:
case 1360:
case 3603:
case 2148:
case 3751:
case 1405:
case 1989:
case 460:
case 2565:
case 2436:
case 823:
case 2398:
case 1839:
case 781:
case 371:
case 2045:
case 2861:
case 501:
case 1969:
case 2418:
case 3139:
case 3320:
case 2242:
case 2081:
case 2613:
case 106:
case 3628:
case 382:
case 939:
case 1270:
case 1653:
case 941:
case 2517:
case 893:
case 2231:
case 1688:
case 3775:
case 3354:
case 442:
case 2173:
case 1269:
case 318:
case 308:
case 3463:
case 578:
case 2487:
case 882:
case 3492:
case 4083:
case 1229:
case 984:
case 818:
case 2711:
case 1177:
case 102:
case 567:
case 776:
case 1244:
case 4058:
case 1513:
case 2430:
case 1751:
case 3405:
case 1603:
case 3360:
case 1944:
case 871:
case 744:
case 3989:
case 264:
case 2848:
case 2553:
case 3304:
case 2145:
case 7:
case 1590:
case 2588:
case 474:
case 3743:
case 1471:
case 669:
case 2568:
case 1534:
case 1320:
case 2048:
case 3380:
case 2161:
case 3557:
case 711:
case 5:
case 1139:
case 2021:
case 4005:
case 1641:
case 778:
case 2873:
case 1775:
case 3625:
case 802:
case 2302:
case 1354:
case 904:
case 275:
case 3483:
case 247:
case 465:
case 767:
case 1685:
case 3778:
case 354:
case 3653:
case 3337:
case 911:
case 2678:
case 1342:
case 3883:
case 2937:
case 613:
case 2601:
case 59:
case 3214:
case 1158:
case 365:
case 3858:
case 2087:
case 3092:
case 2280:
case 2118:
case 967:
case 3914:
case 2369:
case 1707:
case 1998:
case 2370:
case 3005:
case 978:
case 584:
case 1713:
case 860:
case 758:
case 1575:
case 72:
case 2094:
case 3233:
case 255:
case 2904:
case 2643:
case 2830:
case 3578:
case 2960:
case 3501:
case 4039:
case 2015:
case 504:
case 2768:
case 692:
case 233:
case 3796:
case 1734:
case 2547:
case 2127:
case 3611:
case 9:
case 3477:
case 408:
case 1055:
case 2067:
case 3757:
case 79:
case 1192:
case 3058:
case 2204:
case 944:
case 3933:
case 2279:
case 1214:
case 3158:
case 2954:
case 3298:
case 1092:
case 482:
case 165:
case 1123:
case 2167:
case 2728:
case 3551:
case 3342:
case 342:
case 1883:
case 2220:
case 1295:
case 3183:
case 626:
case 2115:
case 552:
case 1647:
case 1005:
case 471:
case 2920:
case 2732:
case 739:
case 1202:
case 972:
case 2254:
case 1914:
case 3071:
case 1578:
case 1805:
case 714:
case 2481:
case 174:
case 2986:
case 360:
case 2376:
case 628:
case 2329:
case 1233:
case 3871:
case 3952:
case 1757:
case 3023:
case 698:
case 3163:
case 402:
case 1892:
case 146:
case 1083:
case 3734:
case 603:
case 1477:
case 2286:
case 2827:
case 2727:
case 3964:
case 3196:
case 2085:
case 3834:
case 1896:
case 2499:
case 3256:
case 2561:
case 1792:
case 3157:
case 3090:
case 1857:
case 2041:
case 2865:
case 19:
case 1443:
case 3007:
case 1621:
case 3771:
case 3200:
case 856:
case 240:
case 804:
case 760:
case 12:
case 902:
case 2982:
case 3681:
case 3264:
case 401:
case 3956:
case 2718:
case 3661:
case 4051:
case 3284:
case 341:
case 1950:
case 560:
case 2736:
case 1249:
case 1577:
case 858:
case 2993:
case 1224:
case 3813:
case 82:
case 2962:
case 2293:
case 1401:
case 89:
case 2581:
case 3755:
case 2262:
case 3374:
case 3034:
case 2828:
case 1478:
case 2545:
case 1758:
case 3984:
case 472:
case 2910:
case 3475:
case 3723:
case 1250:
case 2065:
case 1057:
case 2841:
case 64:
case 3890:
case 3792:
case 1900:
case 565:
case 923:
case 4078:
case 1090:
case 3763:
case 2088:
case 3857:
case 39:
case 3539:
case 4001:
case 1297:
case 2677:
case 1964:
case 3134:
case 2938:
case 1196:
case 2391:
case 2916:
case 1256:
case 1834:
case 2868:
case 839:
case 3359:
case 2103:
case 384:
case 1956:
case 841:
case 908:
case 2216:
case 1451:
case 3705:
case 691:
case 1771:
case 1645:
case 2117:
case 993:
case 3621:
case 358:
case 2573:
case 1813:
case 574:
case 3577:
case 3206:
case 356:
case 4043:
case 988:
case 1661:
case 141:
case 852:
case 3950:
case 906:
case 3107:
case 2521:
case 3057:
case 3949:
case 268:
case 2888:
case 748:
case 3250:
case 478:
case 3924:
case 3783:
case 2068:
case 546:
case 1034:
case 1309:
case 277:
case 46:
case 243:
case 1927:
case 336:
case 3738:
case 3037:
case 3377:
case 2205:
case 2640:
case 2833:
case 2002:
case 2963:
case 27:
case 832:
case 1054:
case 934:
case 3804:
case 3879:
case 3287:
case 3826:
case 2263:
case 1179:
case 1782:
case 2152:
case 1126:
case 1020:
case 1509:
case 1574:
case 2489:
case 3722:
case 2659:
case 1672:
case 2905:
case 3880:
case 3339:
case 2258:
case 3026:
case 1918:
case 1936:
case 3994:
case 2814:
case 1431:
case 670:
case 3267:
case 3915:
case 1793:
case 995:
case 2591:
case 2283:
case 3215:
case 1442:
case 563:
case 2724:
case 919:
case 3837:
case 3559:
case 2983:
case 2373:
case 338:
case 2033:
case 1218:
case 3012:
case 3294:
case 2802:
case 1236:
case 2749:
case 1710:
case 1987:
case 359:
case 1812:
case 2700:
case 3735:
case 2271:
case 3054:
case 2133:
case 136:
case 909:
case 647:
case 1691:
case 1716:
case 1377:
case 1860:
case 3020:
case 3509:
case 3574:
case 1930:
case 2756:
case 2444:
case 1287:
case 2852:
case 1804:
case 3066:
case 2098:
case 3546:
case 3104:
case 2345:
case 2908:
case 3793:
case 3820:
case 127:
case 3762:
case 479:
case 1120:
case 2114:
case 1026:
case 1079:
case 2898:
case 1166:
case 1994:
case 3218:
case 2784:
case 138:
case 3710:
case 2646:
case 3236:
case 2674:
case 2609:
case 1215:
case 1967:
case 3137:
case 1737:
case 1016:
case 3985:
case 1301:
case 3409:
case 732:
case 2213:
case 1378:
case 3232:
case 2990:
case 1988:
case 3941:
case 3754:
case 3446:
case 863:
case 3375:
case 559:
case 2000:
case 1110:
case 63:
case 3241:
case 1288:
case 2631:
case 3082:
case 2097:
case 1225:
case 2798:
case 3766:
case 2907:
case 2150:
case 1022:
case 489:
case 1193:
case 2913:
case 3893:
case 1670:
case 3265:
case 1343:
case 1182:
case 1779:
case 3676:
case 1726:
case 2752:
case 2472:
case 3903:
case 1268:
case 490:
case 1689:
case 3093:
case 1816:
case 1440:
case 3138:
case 2419:
case 2934:
case 420:
case 4046:
case 163:
case 532:
case 1135:
case 3217:
case 4009:
case 4074:
case 2084:
case 3835:
case 685:
case 1712:
case 759:
case 235:
case 3925:
case 2702:
case 2184:
case 1941:
case 4040:
case 3110:
case 1375:
case 1035:
case 738:
case 1985:
case 495:
case 797:
case 3016:
case 3737:
case 2806:
case 1232:
case 536:
case 1474:
case 1285:
case 3022:
case 1228:
case 1932:
case 2795:
case 3253:
case 419:
case 253:
case 2850:
case 680:
case 1241:
case 3288:
case 3780:
case 849:
case 1644:
case 3268:
case 1062:
case 96:
case 527:
case 3822:
case 3760:
case 1351:
case 1122:
case 1542:
case 600:
case 2050:
case 3343:
case 3726:
case 2197:
case 1629:
case 3182:
case 3779:
case 3704:
case 1010:
case 1965:
case 3135:
case 2049:
case 2100:
case 2996:
case 1203:
case 2164:
case 2491:
case 3816:
case 2006:
case 224:
case 2311:
case 2024:
case 3840:
case 1999:
case 3416:
case 662:
case 1140:
case 1334:
case 3396:
case 2368:
case 120:
case 1046:
case 24:
case 3633:
case 2243:
case 1566:
case 3580:
case 1435:
case 2612:
case 190:
case 2502:
case 2943:
case 2679:
case 109:
case 2626:
case 936:
case 3859:
case 3211:
case 1299:
case 2660:
case 2450:
case 3614:
case 4022:
case 3512:
case 325:
case 2533:
case 1313:
case 2278:
case 890:
case 3695:
case 2770:
case 2201:
case 3247:
case 2091:
case 3040:
case 3109:
case 3560:
case 820:
case 1586:
case 2901:
case 1742:
case 1809:
case 1410:
case 927:
case 2449:
case 1390:
case 2388:
case 668:
case 2400:
case 2598:
case 895:
case 1416:
case 2819:
case 3520:
case 3334:
case 2191:
case 3074:
case 1438:
case 2744:
case 1422:
case 1537:
case 3299:
case 825:
case 1211:
case 959:
case 3159:
case 819:
case 3482:
case 4093:
case 2497:
case 3554:
case 390:
case 579:
case 4062:
case 2776:
case 309:
case 2072:
case 2332:
case 1059:
case 3313:
case 1947:
case 3462:
case 431:
case 1695:
case 3493:
case 1614:
case 2275:
case 125:
case 291:
case 389:
case 932:
case 1512:
case 2654:
case 3410:
case 1579:
case 1504:
case 1146:
case 1040:
case 1109:
case 2019:
case 666:
case 3874:
case 3809:
case 2328:
case 3586:
case 86:
case 3709:
case 3842:
case 1606:
case 1383:
case 3355:
case 607:
case 633:
case 292:
case 2556:
case 931:
case 432:
case 1973:
case 3746:
case 2076:
case 3961:
case 1131:
case 379:
case 2029:
case 1480:
case 1273:
case 590:
case 4086:
case 1650:
case 2564:
case 2662:
case 2170:
case 3945:
case 1426:
case 2876:
case 2584:
case 1921:
case 1404:
case 2829:
case 3031:
case 4020:
case 2682:
case 790:
case 3486:
case 1460:
case 1305:
case 1948:
case 3981:
case 1759:
case 4066:
case 3042:
case 2719:
case 2327:
case 1740:
case 2635:
case 3245:
case 1392:
case 795:
case 2402:
case 1582:
case 3649:
case 1454:
case 3973:
case 237:
case 1709:
case 1842:
case 203:
case 4012:
case 1355:
case 2870:
case 3516:
case 2315:
case 4079:
case 534:
case 427:
case 1466:
case 2869:
case 2394:
case 179:
case 3650:
case 25:
case 719:
case 2889:
case 2070:
case 3305:
case 2144:
case 2524:
case 2330:
case 2506:
case 3460:
case 1486:
case 2277:
case 226:
case 734:
case 879:
case 2622:
case 1656:
case 3479:
case 3404:
case 1945:
case 3426:
case 661:
case 1697:
case 2549:
case 2129:
case 1031:
case 1371:
case 2433:
case 3412:
case 4037:
case 595:
case 1600:
case 2387:
case 650:
case 2550:
case 36:
case 3248:
case 1664:
case 1042:
case 2977:
case 1593:
case 617:
case 296:
case 2791:
case 3740:
case 2616:
case 1562:
case 697:
case 3634:
case 875:
case 3427:
case 2665:
case 1073:
case 515:
case 1487:
case 2276:
case 2229:
case 638:
case 1525:
case 3541:
case 3121:
case 500:
case 1588:
case 3061:
case 3845:
case 1821:
case 599:
case 2929:
case 627:
case 3585:
case 1430:
case 2751:
case 4018:
case 1181:
case 4036:
case 1553:
case 700:
case 580:
case 1494:
case 3565:
case 3436:
case 864:
case 3045:
case 271:
case 3607:
case 1021:
case 2320:
case 1747:
case 1568:
case 1395:
case 461:
case 3613:
case 147:
case 282:
case 2685:
case 2455:
case 715:
case 218:
case 729:
case 3173:
case 175:
case 4067:
case 3657:
case 3073:
case 73:
case 1799:
case 3711:
case 632:
case 293:
case 2289:
case 1532:
case 1528:
case 1148:
case 2360:
case 757:
case 1585:
case 364:
case 2989:
case 3553:
case 223:
case 2379:
case 170:
case 3145:
case 2304:
case 710:
case 3395:
case 3568:
case 1081:
case 2970:
case 1242:
case 3494:
case 2557:
case 2839:
case 2380:
case 3021:
case 1045:
case 1861:
case 1231:
case 288:
case 3873:
case 375:
case 2458:
case 659:
case 4087:
case 2778:
case 1942:
case 2270:
case 3467:
case 2701:
case 212:
case 2667:
case 3453:
case 2801:
case 747:
case 3011:
case 1428:
case 3683:
case 3306:
case 267:
case 2878:
case 4068:
case 3425:
case 1384:
case 1946:
case 278:
case 1441:
case 1623:
case 199:
case 1761:
case 2043:
case 2694:
case 2739:
case 1246:
case 211:
case 880:
case 1147:
case 2615:
case 2558:
case 649:
case 1745:
case 310:
case 631:
case 1608:
case 180:
case 1417:
case 2322:
case 2151:
case 244:
case 764:
case 357:
case 3047:
case 1403:
case 3959:
case 2583:
case 2630:
case 2291:
case 3605:
case 3240:
case 2777:
case 4088:
case 815:
case 3515:
case 3199:
case 3811:
case 829:
case 3259:
case 3468:
case 3940:
case 1899:
case 2078:
case 2338:
case 2991:
case 276:
case 3692:
case 1518:
case 33:
case 305:
case 2687:
case 4053:
case 1300:
case 1465:
case 1536:
case 185:
case 1349:
case 2508:
case 3623:
case 315:
case 1425:
case 3946:
case 1773:
case 1453:
case 3909:
case 3655:
case 4065:
case 2101:
case 1306:
case 83:
case 1011:
case 1530:
case 3485:
case 2413:
case 3209:
case 3274:
case 2362:
case 3432:
case 2393:
case 810:
case 2051:
case 1847:
case 4003:
case 1350:
case 917:
case 3761:
case 570:
case 300:
case 3246:
case 3356:
case 2972:
case 2851:
case 1047:
case 2219:
case 3671:
case 110:
case 770:
case 3608:
case 380:
case 105:
case 4028:
case 3518:
case 13:
case 3536:
case 2075:
case 2335:
case 1515:
case 1199:
case 2627:
case 4041:
case 2272:
case 885:
case 3364:
case 2434:
case 1259:
case 2919:
case 3319:
case 517:
case 2196:
case 3168:
case 2964:
case 970:
case 1868:
case 3085:
case 1165:
case 3935:
case 695:
case 3561:
case 3282:
case 2297:
case 1025:
case 625:
case 2645:
case 2200:
case 561:
case 2007:
case 340:
case 1573:
case 619:
case 3032:
case 1238:
case 1216:
case 2956:
case 214:
case 1730:
case 2284:
case 241:
case 3718:
case 2807:
case 239:
case 3210:
case 3993:
case 499:
case 634:
case 1132:
case 3962:
case 1128:
case 1548:
case 415:
case 3293:
case 717:
case 3153:
case 362:
case 3885:
case 2034:
case 2309:
case 2374:
case 145:
case 2346:
case 866:
case 168:
case 2890:
case 1888:
case 0:
case 3065:
case 3841:
case 2723:
case 1825:
case 3787:
case 3165:
case 1935:
case 3025:
case 1041:
case 3088:
case 3391:
case 1727:
case 2340:
case 2134:
case 1319:
case 405:
case 3868:
case 1085:
case 733:
case 587:
case 3916:
case 43:
case 1499:
case 1372:
case 2648:
case 3103:
case 1032:
case 2705:
case 3730:
case 410:
case 457:
case 755:
case 140:
case 258:
case 1817:
case 22:
case 840:
case 2577:
case 3715:
case 1003:
case 3447:
case 1962:
case 2113:
case 1718:
case 555:
case 2107:
case 2950:
case 690:
case 3639:
case 3794:
case 1017:
case 1736:
case 2249:
case 2758:
case 1125:
case 2190:
case 1188:
case 3141:
case 3521:
case 620:
case 3825:
case 3888:
case 1065:
case 1841:
case 2057:
case 3185:
case 2906:
case 3767:
case 2401:
case 533:
case 1828:
case 1728:
case 1167:
case 2155:
case 3937:
case 1785:
case 117:
case 2295:
case 768:
case 1675:
case 150:
case 248:
case 745:
case 2092:
case 1266:
case 3087:
case 2858:
case 3894:
case 3369:
case 2914:
case 1254:
case 4048:
case 3118:
case 3980:
case 1818:
case 3237:
case 1599:
case 2647:
case 2005:
case 1920:
case 2995:
case 985:
case 1036:
case 355:
case 3643:
case 3979:
case 3212:
case 1018:
case 3830:
case 2805:
case 3015:
case 1481:
case 3448:
case 1130:
case 274:
case 2611:
case 246:
case 307:
case 2796:
case 2083:
case 3067:
case 910:
case 2477:
case 850:
case 1286:
case 2863:
case 957:
case 1765:
case 1187:
case 568:
case 3279:
case 3204:
case 3887:
case 3912:
case 3954:
case 66:
case 2823:
case 3675:
case 1087:
case 833:
case 807:
case 3266:
case 1280:
case 1678:
case 900:
case 3728:
case 1937:
case 1601:
case 2183:
case 1753:
case 999:
case 1370:
case 3115:
case 855:
case 3732:
case 2713:
case 1815:
case 3920:
case 4081:
case 1118:
case 1894:
case 540:
case 3461:
case 2707:
case 2331:
case 1136:
case 3194:
case 2071:
case 1830:
case 3703:
case 1389:
case 3651:
case 4061:
case 3986:
case 3130:
case 2105:
case 1015:
case 3481:
case 3329:
case 740:
case 3376:
case 1094:
case 3036:
case 1212:
case 3018:
case 1926:
case 155:
case 1643:
case 1904:
case 1979:
case 2023:
case 3187:
case 1226:
case 1912:
case 1279:
case 1204:
case 2699:
case 2734:
case 562:
case 1768:
case 1067:
case 3106:
case 421:
case 2928:
case 3544:
case 3642:
case 2474:
case 2409:
case 3213:
case 2810:
case 1184:
case 2941:
case 1849:
case 3990:
case 3884:
case 3149:
case 894:
case 1714:
case 231:
case 6:
case 3290:
case 3150:
case 249:
case 4072:
case 2766:
case 491:
case 2862:
case 3056:
case 1795:
case 2932:
case 2893:
case 153:
case 2720:
case 913:
case 1050:
case 611:
case 2882:
case 569:
case 2903:
case 2062:
case 3234:
case 2093:
case 194:
case 1156:
case 2351:
case 2122:
case 2542:
case 1996:
case 3419:
case 667:
case 1491:
case 835:
case 1006:
case 1570:
case 2217:
case 1957:
case 3800:
case 1733:
case 3084:
case 2835:
case 3184:
case 30:
case 1990:
case 1884:
case 1529:
case 1000:
case 1207:
case 81:
case 1544:
case 2737:
case 1213:
case 1064:
case 1642:
case 2022:
case 1056:
case 2193:
case 1913:
case 3347:
case 2253:
case 2288:
case 1290:
case 1631:
case 3714:
case 903:
case 1907:
case 1856:
case 3296:
case 3156:
case 2760:
case 2689:
case 3257:
case 2343:
case 3050:
case 2182:
case 2779:
case 983:
case 1752:
case 77:
case 38:
case 926:
case 473:
case 11:
case 2712:
case 1934:
case 1419:
case 3311:
case 3024:
case 44:
case 324:
case 263:
case 3006:
case 236:
case 724:
case 2738:
case 1764:
case 3205:
case 2377:
case 2716:
case 1700:
case 37:
case 535:
case 1133:
case 78:
case 1208:
case 1852:
case 973:
case 2826:
case 426:
case 2287:
case 1476:
case 3292:
case 2080:
case 1098:
case 1971:
case 671:
case 1429:
case 2804:
case 4070:
case 3095:
case 794:
case 3348:
case 3905:
case 869:
case 4069:
case 3659:
case 2722:
case 169:
case 3814:
case 2166:
case 2915:
case 2267:
case 3283:
case 1519:
case 1609:
case 1955:
case 3724:
case 498:
case 2215:
case 3983:
case 2837:
case 1572:
case 3958:
case 1102:
case 238:
case 3033:
case 1923:
case 437:
case 3749:
case 1646:
case 2735:
case 3271:
case 71:
case 3700:
case 259:
case 17:
case 3208:
case 2112:
case 688:
case 2927:
case 606:
case 1205:
case 2574:
case 1489:
case 2020:
case 2509:
case 2227:
case 1095:
case 2886:
case 3756:
case 2160:
case 3098:
case 3429:
case 3852:
case 3476:
case 3345:
case 2179:
case 2782:
case 3908:
case 1152:
case 3797:
case 3255:
case 2793:
case 2086:
case 1283:
case 3195:
case 3519:
case 4029:
case 2866:
case 369:
case 1469:
case 2918:
case 4044:
case 3361:
case 2180:
case 1198:
case 2431:
case 3102:
case 3784:
case 1373:
case 51:
case 1958:
case 2236:
case 843:
case 608:
case 2854:
case 2710:
case 2137:
case 991:
case 3609:
case 3572:
case 1983:
case 103:
case 2709:
case 137:
case 2842:
case 392:
case 2355:
case 1367:
case 2323:
case 721:
case 2684:
case 3610:
case 2582:
case 1402:
case 1239:
case 2746:
case 3597:
case 198:
case 791:
case 3029:
case 3500:
case 2961:
case 3336:
case 1869:
case 1394:
case 15:
case 128:
case 1414:
case 3169:
case 1939:
case 1089:
case 2420:
case 3693:
case 3170:
case 3044:
case 4052:
case 3662:
case 469:
case 3829:
case 3876:
case 2945:
case 2697:
case 1549:
case 2371:
case 2510:
case 2031:
case 3682:
case 2981:
case 1144:
case 1524:
case 2656:
case 2664:
case 2042:
case 898:
case 930:
case 3327:
case 313:
case 1616:
case 2562:
case 3719:
case 1433:
case 665:
case 2600:
case 3635:
case 837:
case 803:
case 813:
case 2973:
case 1597:
case 2649:
case 398:
case 2358:
case 573:
case 2624:
case 2383:
case 337:
case 192:
case 3367:
case 2437:
case 2538:
case 1564:
case 3870:
case 1693:
case 3315:
case 122:
case 1170:
case 935:
case 1076:
case 328:
case 2273:
case 3939:
case 35:
case 1318:
case 3277:
case 3070:
case 2305:
case 2948:
case 3622:
case 2759:
case 1844:
case 326:
case 3069:
case 1452:
case 1829:
case 2921:
case 3129:
case 2363:
case 3433:
case 994:
case 443:
case 2392:
case 3387:
case 4002:
case 773:
case 3638:
case 383:
case 642:
case 1719:
case 1327:
case 396:
case 3791:
case 821:
case 2840:
case 796:
case 1819:
case 1251:
case 373:
case 3368:
case 783:
case 4049:
case 2438:
case 1464:
case 34:
case 598:
case 424:
case 4006:
case 3514:
case 3243:
case 494:
case 1729:
case 641:
case 3679:
case 1317:
case 1456:
case 2422:
case 97:
case 1951:
case 3172:
case 1303:
case 1686:
case 2614:
case 728:
case 453:
case 219:
case 3450:
case 191:
case 3769:
case 1666:
case 3680:
case 2512:
case 3278:
case 1072:
case 2947:
case 526:
case 2059:
case 614:
case 2695:
case 3770:
case 1620:
case 2109:
case 3091:
case 596:
case 1019:
case 2247:
case 1385:
case 3424:
case 737:
case 40:
case 3449:
case 2602:
case 2504:
case 121:
case 1484:
case 1341:
case 2146:
case 2526:
case 1514:
case 3365:
case 1243:
case 2435:
case 2566:
case 3598:
case 3400:
case 3251:
case 713:
case 592:
case 1119:
case 173:
case 3191:
case 2520:
case 430:
case 656:
case 522:
case 3744:
case 3303:
case 290:
case 3497:
case 1502:
case 3317:
case 1943:
case 1626:
case 2652:
case 3729:
case 3332:
case 3072:
case 2493:
case 3620:
case 684:
case 1770:
case 3275:
case 2307:
case 1769:
case 4056:
case 289:
case 1680:
case 3666:
case 2698:
case 3975:
case 2410:
case 1449:
case 69:
case 4064:
case 873:
case 2390:
case 1388:
case 3341:
case 321:
case 3484:
case 1325:
case 1637:
case 3019:
case 1353:
case 1091:
case 1406:
case 3328:
case 969:
case 1424:
case 2742:
case 2809:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760695201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,];
var gg_b = "1760695201/";

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
