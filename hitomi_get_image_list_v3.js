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
case 2749:
case 1017:
case 3819:
case 3429:
case 1444:
case 2609:
case 3947:
case 3430:
case 3537:
case 2165:
case 2807:
case 489:
case 3617:
case 3304:
case 3953:
case 1331:
case 2050:
case 2139:
case 287:
case 2204:
case 4001:
case 2616:
case 1870:
case 3489:
case 2568:
case 600:
case 3161:
case 2197:
case 410:
case 3362:
case 1602:
case 166:
case 1021:
case 1883:
case 3720:
case 2761:
case 3888:
case 144:
case 2553:
case 3259:
case 1151:
case 2401:
case 2937:
case 3765:
case 1345:
case 3681:
case 2359:
case 451:
case 968:
case 3276:
case 463:
case 55:
case 3149:
case 3599:
case 1124:
case 3405:
case 3377:
case 1963:
case 1823:
case 1413:
case 3968:
case 3418:
case 3828:
case 2293:
case 3780:
case 1992:
case 2874:
case 220:
case 786:
case 1337:
case 184:
case 3531:
case 1976:
case 2801:
case 407:
case 1268:
case 2569:
case 3941:
case 2840:
case 3710:
case 994:
case 1483:
case 3292:
case 1236:
case 2608:
case 2392:
case 1779:
case 1813:
case 2615:
case 3167:
case 1114:
case 979:
case 3791:
case 2474:
case 2748:
case 764:
case 2003:
case 81:
case 2945:
case 452:
case 209:
case 834:
case 3627:
case 2:
case 2407:
case 2500:
case 2375:
case 3830:
case 1157:
case 150:
case 2271:
case 1562:
case 1027:
case 2767:
case 875:
case 3598:
case 2094:
case 937:
case 2772:
case 1399:
case 1247:
case 3935:
case 1087:
case 3371:
case 3766:
case 247:
case 3195:
case 3545:
case 3258:
case 111:
case 1253:
case 1733:
case 1026:
case 347:
case 492:
case 3626:
case 751:
case 763:
case 833:
case 1156:
case 954:
case 1714:
case 2148:
case 2598:
case 1299:
case 2969:
case 2829:
case 65:
case 3358:
case 3931:
case 1353:
case 2830:
case 2627:
case 1904:
case 639:
case 1246:
case 710:
case 993:
case 498:
case 1008:
case 1015:
case 802:
case 1237:
case 1882:
case 4019:
case 3615:
case 1977:
case 3748:
case 3474:
case 169:
case 1743:
case 1368:
case 2791:
case 2941:
case 536:
case 1993:
case 2292:
case 190:
case 1822:
case 1962:
case 789:
case 3795:
case 808:
case 824:
case 3166:
case 3801:
case 3138:
case 500:
case 1133:
case 857:
case 2531:
case 2377:
case 2405:
case 3625:
case 2418:
case 2968:
case 2654:
case 1155:
case 2936:
case 3262:
case 320:
case 2546:
case 178:
case 555:
case 2276:
case 3359:
case 1575:
case 1300:
case 172:
case 1434:
case 1245:
case 2002:
case 206:
case 2621:
case 3401:
case 976:
case 3440:
case 3197:
case 3547:
case 3685:
case 749:
case 2888:
case 1812:
case 3277:
case 2393:
case 3536:
case 2797:
case 1650:
case 1335:
case 2806:
case 464:
case 36:
case 491:
case 1751:
case 387:
case 3050:
case 265:
case 1231:
case 3807:
case 2617:
case 1732:
case 1252:
case 1009:
case 2304:
case 2064:
case 1724:
case 1369:
case 2429:
case 2819:
case 2947:
case 4005:
case 4018:
case 42:
case 2680:
case 324:
case 357:
case 2754:
case 2445:
case 168:
case 3117:
case 1164:
case 1923:
case 1863:
case 2665:
case 3928:
case 3868:
case 521:
case 2313:
case 2506:
case 3382:
case 741:
case 2519:
case 2282:
case 3441:
case 315:
case 1218:
case 2498:
case 3322:
case 162:
case 1061:
case 1340:
case 2721:
case 3334:
case 966:
case 1301:
case 3785:
case 1476:
case 234:
case 4052:
case 2837:
case 1230:
case 8:
case 2452:
case 585:
case 1750:
case 460:
case 2697:
case 297:
case 2185:
case 905:
case 116:
case 1651:
case 223:
case 912:
case 3906:
case 3574:
case 1970:
case 275:
case 2528:
case 1229:
case 2344:
case 1632:
case 3024:
case 1289:
case 1512:
case 413:
case 3847:
case 333:
case 3919:
case 2055:
case 2431:
case 2125:
case 3032:
case 1624:
case 2907:
case 3154:
case 1875:
case 638:
case 911:
case 2666:
case 3835:
case 1582:
case 3111:
case 2638:
case 2370:
case 2787:
case 725:
case 3672:
case 631:
case 773:
case 2033:
case 137:
case 3501:
case 3667:
case 1458:
case 950:
case 1307:
case 1522:
case 1067:
case 759:
case 2727:
case 3869:
case 1944:
case 3447:
case 3540:
case 3918:
case 1913:
case 1463:
case 2790:
case 742:
case 3043:
case 2589:
case 522:
case 3436:
case 1492:
case 1859:
case 3715:
case 2186:
case 2845:
case 179:
case 456:
case 4046:
case 2126:
case 194:
case 2530:
case 301:
case 3312:
case 748:
case 1228:
case 667:
case 2940:
case 820:
case 984:
case 2841:
case 3940:
case 1544:
case 3529:
case 685:
case 1388:
case 971:
case 2312:
case 532:
case 3898:
case 2695:
case 1010:
case 2187:
case 1862:
case 180:
case 990:
case 3126:
case 3610:
case 3437:
case 1934:
case 4053:
case 2715:
case 3691:
case 806:
case 3079:
case 2127:
case 2905:
case 1091:
case 1877:
case 1328:
case 538:
case 3727:
case 2270:
case 4036:
case 4068:
case 2540:
case 2190:
case 2447:
case 1103:
case 3115:
case 3108:
case 2501:
case 865:
case 127:
case 2667:
case 1804:
case 983:
case 119:
case 488:
case 3852:
case 1066:
case 1207:
case 2672:
case 3446:
case 1513:
case 3370:
case 3505:
case 3787:
case 2835:
case 2111:
case 3499:
case 3907:
case 2649:
case 2032:
case 622:
case 3673:
case 2181:
case 2024:
case 3717:
case 3588:
case 1583:
case 1329:
case 2847:
case 2469:
case 233:
case 3055:
case 1073:
case 2574:
case 1871:
case 2084:
case 2121:
case 2435:
case 4041:
case 3528:
case 481:
case 567:
case 2051:
case 604:
case 3185:
case 1039:
case 1150:
case 2334:
case 334:
case 31:
case 202:
case 3620:
case 2661:
case 3498:
case 3639:
case 645:
case 3519:
case 3282:
case 2760:
case 1462:
case 1912:
case 140:
case 1020:
case 3781:
case 2868:
case 1240:
case 2117:
case 425:
case 3506:
case 1318:
case 2836:
case 978:
case 1305:
case 3222:
case 473:
case 3974:
case 3313:
case 2725:
case 3445:
case 257:
case 3754:
case 2417:
case 2967:
case 2510:
case 2378:
case 2355:
case 92:
case 303:
case 1177:
case 3324:
case 1349:
case 2731:
case 624:
case 4054:
case 2251:
case 3409:
case 2629:
case 3145:
case 2689:
case 1450:
case 935:
case 2232:
case 3416:
case 2100:
case 3351:
case 1933:
case 1894:
case 2972:
case 4021:
case 3198:
case 245:
case 3255:
case 1162:
case 1634:
case 2342:
case 3022:
case 2135:
case 2421:
case 2811:
case 2995:
case 85:
case 332:
case 204:
case 3640:
case 3485:
case 3815:
case 3425:
case 1239:
case 1682:
case 1104:
case 1759:
case 2454:
case 189:
case 2745:
case 913:
case 999:
case 3082:
case 3242:
case 1979:
case 3991:
case 1612:
case 2688:
case 3596:
case 3146:
case 778:
case 1171:
case 3279:
case 4087:
case 1942:
case 2356:
case 2573:
case 3920:
case 2821:
case 3860:
case 1291:
case 3012:
case 2243:
case 2083:
case 3343:
case 2881:
case 1763:
case 1348:
case 2023:
case 2147:
case 2597:
case 772:
case 2490:
case 1210:
case 4027:
case 3357:
case 2628:
case 1403:
case 3825:
case 221:
case 1551:
case 1266:
case 2539:
case 1775:
case 2168:
case 2949:
case 3607:
case 2520:
case 956:
case 1367:
case 3314:
case 70:
case 3747:
case 1955:
case 2214:
case 4011:
case 2070:
case 3997:
case 2487:
case 2606:
case 3816:
case 3426:
case 523:
case 1850:
case 575:
case 107:
case 743:
case 2746:
case 1670:
case 3606:
case 2426:
case 2816:
case 3333:
case 1951:
case 1366:
case 2137:
case 3214:
case 2997:
case 1771:
case 57:
case 1924:
case 469:
case 3520:
case 2561:
case 3427:
case 3817:
case 1163:
case 3168:
case 1019:
case 2747:
case 2233:
case 533:
case 2809:
case 4008:
case 3539:
case 1295:
case 3628:
case 2965:
case 2825:
case 836:
case 1158:
case 3153:
case 1028:
case 2343:
case 3881:
case 2980:
case 508:
case 800:
case 988:
case 557:
case 1578:
case 3356:
case 3573:
case 996:
case 1310:
case 982:
case 1555:
case 1088:
case 3411:
case 2860:
case 2549:
case 502:
case 231:
case 515:
case 4026:
case 2885:
case 186:
case 3481:
case 2242:
case 3013:
case 1005:
case 1018:
case 2572:
case 3890:
case 2991:
case 948:
case 1380:
case 443:
case 3948:
case 1533:
case 4009:
case 1613:
case 3605:
case 2808:
case 2131:
case 3745:
case 1365:
case 829:
case 238:
case 40:
case 328:
case 697:
case 232:
case 191:
case 146:
case 1339:
case 2034:
case 164:
case 1793:
case 981:
case 942:
case 2022:
case 855:
case 2460:
case 2567:
case 1762:
case 3342:
case 345:
case 3591:
case 3972:
case 4060:
case 914:
case 2735:
case 3887:
case 750:
case 472:
case 1296:
case 3232:
case 2416:
case 3689:
case 3752:
case 2938:
case 24:
case 2351:
case 1704:
case 1159:
case 3731:
case 2886:
case 2409:
case 1644:
case 3629:
case 925:
case 3630:
case 203:
case 3510:
case 3417:
case 1464:
case 1373:
case 1556:
case 2769:
case 1029:
case 3465:
case 3915:
case 3908:
case 2130:
case 1045:
case 780:
case 226:
case 3705:
case 1713:
case 1879:
case 2848:
case 2129:
case 2990:
case 3891:
case 3093:
case 2740:
case 1856:
case 300:
case 2461:
case 3810:
case 2895:
case 174:
case 1225:
case 3439:
case 416:
case 821:
case 1662:
case 160:
case 793:
case 910:
case 1052:
case 3866:
case 3101:
case 2635:
case 2350:
case 1209:
case 2508:
case 2515:
case 606:
case 3140:
case 3590:
case 3789:
case 3652:
case 727:
case 135:
case 2987:
case 1122:
case 719:
case 2927:
case 3511:
case 5:
case 1604:
case 2118:
case 3631:
case 1455:
case 1744:
case 3004:
case 1031:
case 3250:
case 2669:
case 3986:
case 453:
case 2472:
case 461:
case 3071:
case 907:
case 1112:
case 1099:
case 3916:
case 1046:
case 2525:
case 39:
case 1433:
case 3699:
case 494:
case 2707:
case 4048:
case 2128:
case 2467:
case 2917:
case 3521:
case 2560:
case 845:
case 3873:
case 952:
case 2653:
case 3174:
case 3880:
case 3728:
case 1479:
case 1723:
case 2063:
case 4067:
case 2448:
case 355:
case 3865:
case 3925:
case 828:
case 2303:
case 2516:
case 317:
case 1215:
case 437:
case 329:
case 822:
case 1842:
case 3788:
case 3960:
case 2921:
case 3410:
case 1456:
case 3637:
case 3106:
case 1170:
case 2788:
case 3861:
case 2410:
case 530:
case 2203:
case 768:
case 2985:
case 196:
case 3668:
case 419:
case 35:
case 832:
case 1550:
case 1457:
case 1315:
case 1308:
case 3636:
case 1692:
case 427:
case 1068:
case 3063:
case 2880:
case 2728:
case 493:
case 255:
case 3119:
case 1211:
case 4091:
case 2294:
case 2521:
case 1964:
case 1824:
case 1658:
case 1675:
case 2719:
case 3585:
case 3707:
case 3647:
case 3058:
case 3075:
case 609:
case 84:
case 2916:
case 2466:
case 377:
case 1851:
case 4010:
case 803:
case 2581:
case 3188:
case 3496:
case 2730:
case 2004:
case 88:
case 4065:
case 2986:
case 3669:
case 2631:
case 867:
case 3449:
case 3927:
case 2511:
case 2729:
case 2473:
case 737:
case 2652:
case 2590:
case 440:
case 4020:
case 3264:
case 1484:
case 476:
case 1451:
case 2926:
case 2866:
case 159:
case 3508:
case 3515:
case 4039:
case 1316:
case 3350:
case 1385:
case 687:
case 236:
case 2698:
case 1000:
case 1254:
case 3701:
case 1041:
case 3189:
case 1360:
case 3740:
case 3911:
case 66:
case 1722:
case 2705:
case 2480:
case 1659:
case 3129:
case 2077:
case 3990:
case 2645:
case 1843:
case 831:
case 148:
case 2465:
case 3059:
case 1325:
case 326:
case 753:
case 1857:
case 761:
case 1565:
case 995:
case 258:
case 2850:
case 3951:
case 3338:
case 3670:
case 207:
case 680:
case 977:
case 3771:
case 3006:
case 185:
case 1070:
case 3267:
case 2978:
case 2367:
case 3019:
case 3542:
case 3163:
case 1949:
case 3924:
case 3864:
case 1520:
case 1427:
case 1817:
case 4003:
case 2758:
case 1619:
case 2238:
case 3932:
case 409:
case 1153:
case 249:
case 121:
case 3158:
case 619:
case 654:
case 3175:
case 2551:
case 860:
case 1854:
case 568:
case 398:
case 874:
case 2403:
case 3623:
case 627:
case 939:
case 1597:
case 2792:
case 1379:
case 95:
case 693:
case 2348:
case 1881:
case 3391:
case 1023:
case 2291:
case 4094:
case 1961:
case 2524:
case 2942:
case 2171:
case 3310:
case 3802:
case 392:
case 562:
case 2612:
case 447:
case 1737:
case 2395:
case 3683:
case 2532:
case 899:
case 1688:
case 3777:
case 3380:
case 579:
case 1169:
case 2220:
case 926:
case 1013:
case 3005:
case 2979:
case 1454:
case 122:
case 1745:
case 3613:
case 1605:
case 1538:
case 3533:
case 487:
case 2776:
case 391:
case 2265:
case 104:
case 2634:
case 1342:
case 3762:
case 1421:
case 2956:
case 2361:
case 46:
case 2040:
case 594:
case 364:
case 210:
case 640:
case 537:
case 1972:
case 1224:
case 3249:
case 3089:
case 145:
case 676:
case 2933:
case 1100:
case 3176:
case 1752:
case 856:
case 1232:
case 1629:
case 1251:
case 263:
case 1284:
case 1044:
case 2349:
case 420:
case 3556:
case 2297:
case 1510:
case 1967:
case 3373:
case 1630:
case 1324:
case 1769:
case 554:
case 2029:
case 668:
case 2464:
case 2914:
case 1886:
case 3396:
case 2644:
case 363:
case 351:
case 1351:
case 1966:
case 3557:
case 2296:
case 406:
case 1735:
case 430:
case 3273:
case 3162:
case 7:
case 3543:
case 1548:
case 1198:
case 2249:
case 2089:
case 1567:
case 1910:
case 936:
case 1022:
case 709:
case 2762:
case 3040:
case 3280:
case 1741:
case 3001:
case 3622:
case 3776:
case 246:
case 2339:
case 580:
case 616:
case 3265:
case 132:
case 888:
case 389:
case 896:
case 882:
case 3104:
case 3759:
case 4064:
case 1572:
case 2777:
case 1242:
case 1082:
case 2683:
case 3532:
case 1146:
case 286:
case 540:
case 3395:
case 848:
case 131:
case 2248:
case 576:
case 3524:
case 2310:
case 929:
case 3942:
case 3210:
case 3074:
case 1256:
case 2391:
case 2028:
case 3348:
case 1343:
case 1980:
case 3551:
case 1674:
case 2158:
case 3403:
case 1415:
case 2623:
case 2295:
case 1357:
case 298:
case 1233:
case 3775:
case 76:
case 3758:
case 1753:
case 1486:
case 3007:
case 352:
case 859:
case 814:
case 2932:
case 2019:
case 3978:
case 1973:
case 1607:
case 1561:
case 2272:
case 2163:
case 2984:
case 167:
case 99:
case 2670:
case 307:
case 2338:
case 1816:
case 2564:
case 1861:
case 1921:
case 757:
case 2842:
case 1106:
case 382:
case 3902:
case 2037:
case 889:
case 1509:
case 2208:
case 1495:
case 2215:
case 1636:
case 3308:
case 1303:
case 1516:
case 3457:
case 388:
case 15:
case 1092:
case 1448:
case 1981:
case 2390:
case 921:
case 3675:
case 669:
case 77:
case 1560:
case 1917:
case 1467:
case 1849:
case 3824:
case 3053:
case 2226:
case 1707:
case 1585:
case 3832:
case 3386:
case 256:
case 3326:
case 2433:
case 985:
case 3851:
case 851:
case 505:
case 863:
case 3884:
case 2099:
case 2112:
case 512:
case 195:
case 1472:
case 3227:
case 1669:
case 22:
case 678:
case 3309:
case 3432:
case 807:
case 2744:
case 2182:
case 373:
case 3814:
case 3424:
case 2604:
case 1867:
case 1118:
case 3035:
case 511:
case 2122:
case 235:
case 4042:
case 945:
case 1515:
case 3503:
case 41:
case 2052:
case 434:
case 852:
case 33:
case 849:
case 60:
case 3254:
case 497:
case 3000:
case 3734:
case 274:
case 2693:
case 3385:
case 928:
case 423:
case 904:
case 1600:
case 2856:
case 2321:
case 3041:
case 1189:
case 1129:
case 3594:
case 1990:
case 2260:
case 3782:
case 4055:
case 3857:
case 1526:
case 3325:
case 1202:
case 126:
case 1130:
case 1059:
case 2903:
case 2325:
case 569:
case 892:
case 886:
case 3045:
case 248:
case 1908:
case 3903:
case 618:
case 1465:
case 2144:
case 1891:
case 4024:
case 2221:
case 3260:
case 3381:
case 3879:
case 1718:
case 1587:
case 1480:
case 433:
case 1705:
case 3713:
case 2782:
case 1420:
case 1810:
case 100:
case 571:
case 2722:
case 2041:
case 4084:
case 3098:
case 2000:
case 281:
case 590:
case 2254:
case 2385:
case 898:
case 3225:
case 1302:
case 1698:
case 47:
case 1439:
case 136:
case 3134:
case 1101:
case 1926:
case 644:
case 214:
case 402:
case 415:
case 2035:
case 2484:
case 94:
case 1652:
case 1789:
case 2217:
case 1140:
case 1590:
case 3994:
case 1364:
case 3744:
case 1729:
case 3478:
case 3455:
case 2069:
case 1631:
case 3182:
case 273:
case 3604:
case 1986:
case 408:
case 2432:
case 3031:
case 3216:
case 2884:
case 1581:
case 3112:
case 1646:
case 1699:
case 2326:
case 3286:
case 3046:
case 967:
case 3671:
case 401:
case 2851:
case 1916:
case 1909:
case 2386:
case 356:
case 3502:
case 3226:
case 775:
case 2832:
case 4057:
case 1174:
case 3855:
case 2287:
case 3878:
case 1719:
case 1873:
case 1294:
case 797:
case 4043:
case 2443:
case 71:
case 2211:
case 2036:
case 1491:
case 650:
case 3390:
case 578:
case 2068:
case 3723:
case 1880:
case 1728:
case 891:
case 288:
case 611:
case 1985:
case 2902:
case 296:
case 129:
case 1839:
case 1203:
case 572:
case 3456:
case 3783:
case 3564:
case 1788:
case 1960:
case 931:
case 3311:
case 2170:
case 696:
case 3694:
case 703:
case 147:
case 1110:
case 2247:
case 3156:
case 1094:
case 2577:
case 4083:
case 1541:
case 1191:
case 52:
case 3299:
case 4023:
case 2593:
case 2143:
case 2027:
case 3179:
case 250:
case 1767:
case 3714:
case 3347:
case 3246:
case 2157:
case 3086:
case 1500:
case 1:
case 1407:
case 1931:
case 3353:
case 688:
case 3237:
case 109:
case 3015:
case 1003:
case 513:
case 369:
case 3368:
case 2423:
case 2813:
case 3603:
case 1392:
case 3336:
case 2779:
case 732:
case 2483:
case 2756:
case 3412:
case 3822:
case 3962:
case 560:
case 574:
case 2268:
case 3993:
case 868:
case 2976:
case 371:
case 3834:
case 3133:
case 1801:
case 1138:
case 1166:
case 2337:
case 1795:
case 1262:
case 2571:
case 2992:
case 861:
case 1173:
case 625:
case 2124:
case 3482:
case 2241:
case 4044:
case 1625:
case 2823:
case 2963:
case 1359:
case 2200:
case 2054:
case 2345:
case 894:
case 378:
case 3025:
case 1937:
case 3434:
case 3245:
case 372:
case 3085:
case 1376:
case 63:
case 1553:
case 3300:
case 3575:
case 659:
case 3060:
case 266:
case 1277:
case 1761:
case 2883:
case 1440:
case 1197:
case 3784:
case 2269:
case 1120:
case 205:
case 3650:
case 3335:
case 1536:
case 2870:
case 3971:
case 212:
case 3016:
case 3231:
case 1050:
case 1139:
case 1204:
case 2331:
case 837:
case 648:
case 1165:
case 3252:
case 767:
case 2664:
case 1807:
case 4013:
case 2235:
case 2778:
case 343:
case 3369:
case 556:
case 2017:
case 1429:
case 3444:
case 3755:
case 613:
case 1064:
case 3958:
case 1304:
case 1617:
case 2252:
case 1430:
case 1537:
case 20:
case 3352:
case 432:
case 854:
case 819:
case 674:
case 2751:
case 2231:
case 2016:
case 165:
case 4034:
case 3269:
case 2784:
case 97:
case 2142:
case 893:
case 1489:
case 1806:
case 1797:
case 1720:
case 1888:
case 721:
case 2060:
case 3021:
case 1393:
case 3602:
case 596:
case 582:
case 2422:
case 2812:
case 130:
case 902:
case 3742:
case 2245:
case 2434:
case 106:
case 1002:
case 2575:
case 1739:
case 44:
case 344:
case 62:
case 3054:
case 3132:
case 1546:
case 278:
case 1681:
case 1765:
case 2178:
case 880:
case 403:
case 3571:
case 3992:
case 1968:
case 1828:
case 957:
case 1377:
case 3963:
case 3413:
case 3823:
case 1900:
case 3976:
case 1531:
case 2412:
case 290:
case 542:
case 1292:
case 3756:
case 3483:
case 1488:
case 1710:
case 901:
case 2993:
case 2368:
case 269:
case 1791:
case 840:
case 548:
case 3114:
case 2603:
case 704:
case 3779:
case 1818:
case 876:
case 2015:
case 656:
case 2246:
case 1830:
case 2353:
case 2576:
case 1598:
case 1148:
case 3143:
case 1829:
case 3844:
case 2714:
case 283:
case 2347:
case 3027:
case 350:
case 1371:
case 2156:
case 53:
case 4012:
case 3577:
case 3470:
case 559:
case 514:
case 3733:
case 3253:
case 2026:
case 1545:
case 2694:
case 3346:
case 1766:
case 380:
case 3010:
case 1898:
case 3388:
case 1383:
case 477:
case 1437:
case 1530:
case 3934:
case 1610:
case 1901:
case 2095:
case 1126:
case 294:
case 1186:
case 2643:
case 1845:
case 700:
case 1691:
case 2859:
case 1790:
case 866:
case 2492:
case 589:
case 1589:
case 1212:
case 3877:
case 2374:
case 2463:
case 2913:
case 3982:
case 1079:
case 2944:
case 4063:
case 805:
case 4092:
case 2067:
case 551:
case 2522:
case 1727:
case 45:
case 354:
case 2475:
case 2614:
case 3804:
case 2534:
case 1108:
case 698:
case 1115:
case 3038:
case 510:
case 1033:
case 686:
case 692:
case 3207:
case 818:
case 1638:
case 3513:
case 1505:
case 2794:
case 1666:
case 2875:
case 3655:
case 2096:
case 2624:
case 3073:
case 1078:
case 79:
case 1344:
case 3764:
case 552:
case 3389:
case 3523:
case 1528:
case 558:
case 670:
case 2229:
case 1899:
case 1160:
case 850:
case 2651:
case 507:
case 175:
case 3871:
case 3097:
case 646:
case 691:
case 2102:
case 2684:
case 2230:
case 197:
case 1620:
case 1837:
case 3039:
case 3150:
case 1116:
case 2061:
case 3462:
case 340:
case 1721:
case 1519:
case 1282:
case 1042:
case 3493:
case 3305:
case 1974:
case 1313:
case 549:
case 1506:
case 268:
case 3240:
case 1781:
case 2863:
case 1754:
case 1109:
case 3201:
case 1234:
case 1445:
case 1680:
case 884:
case 2459:
case 4004:
case 3459:
case 663:
case 3892:
case 1836:
case 1928:
case 1868:
case 3863:
case 2080:
case 3164:
case 598:
case 1988:
case 610:
case 2020:
case 2912:
case 592:
case 1213:
case 75:
case 115:
case 2493:
case 3218:
case 1441:
case 3476:
case 1400:
case 930:
case 1785:
case 2642:
case 3684:
case 436:
case 17:
case 3230:
case 1244:
case 3229:
case 1435:
case 1121:
case 2389:
case 2523:
case 4093:
case 1574:
case 3970:
case 883:
case 1906:
case 3651:
case 1847:
case 1469:
case 1919:
case 2073:
case 3289:
case 3512:
case 1181:
case 3049:
case 1696:
case 2764:
case 2330:
case 3858:
case 1709:
case 1649:
case 3096:
case 2513:
case 1111:
case 2306:
case 3219:
case 2633:
case 3794:
case 1989:
case 337:
case 417:
case 2038:
case 2207:
case 1672:
case 429:
case 1726:
case 649:
case 3307:
case 1453:
case 254:
case 3534:
case 227:
case 1501:
case 1667:
case 1869:
case 3944:
case 1929:
case 1190:
case 455:
case 2319:
case 1014:
case 1436:
case 3492:
case 2877:
case 2091:
case 1043:
case 3288:
case 3048:
case 3657:
case 2982:
case 1905:
case 3913:
case 1468:
case 1648:
case 3703:
case 1708:
case 652:
case 3859:
case 101:
case 3876:
case 2934:
case 394:
case 3095:
case 361:
case 591:
case 2862:
case 1187:
case 726:
case 2388:
case 1841:
case 2544:
case 1695:
case 3228:
case 1312:
case 1223:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744192802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,];
var gg_b = "1744192802/";

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
